document.addEventListener('DOMContentLoaded', () => {
    const teamLogos = document.querySelectorAll('.team-logos img');
    const homePage = document.getElementById('home-page');
    const teamSelectPage = document.getElementById('team-select-page');
    const schedulePage = document.getElementById('schedule-page');
    const resultsContainer = document.getElementById('results');
    const teamName = document.getElementById('team-name');
    const calendarContainer = document.querySelector('.calendar-table tbody');
    const leagueChartCtx = document.getElementById('leagueChart').getContext('2d');
    const currentMonthLabel = document.getElementById('current-month');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let matchesData = [];

    // "클럽 선택하기" 버튼 클릭 이벤트 리스너
    document.getElementById('go-to-team-select').addEventListener('click', () => {
        homePage.style.display = 'none';
        teamSelectPage.style.display = 'block';
    });

    // 팀 로고 클릭 이벤트 리스너
    teamLogos.forEach(logo => {
        logo.addEventListener('click', () => {
            const teamId = logo.getAttribute('data-team-id');
            fetchTeamData(teamId, logo.alt);
        });
    });

    fetch('http://localhost:3000/get-league-table')
    .then(response => response.json())
    .then(data => {
        const standings = data.standings[0].table;
        const teams = standings.map(team => team.team.name);
        const points = standings.map(team => team.points);

        // 강등권 위기 팀 (리그 하위 3팀) 인덱스를 찾음
        const relegationZoneIndex = standings.length - 3;

        // 각 팀에 대해 색상을 설정 (강등권은 빨간색, 나머지는 보라색)
        const pointColors = teams.map((_, index) =>
            index >= relegationZoneIndex ? 'red' : 'purple'
        );

        new Chart(leagueChartCtx, {
            type: 'line',
            data: {
                labels: teams,
                datasets: [{
                    label: '리그 순위 포인트',
                    data: points,
                    borderColor: pointColors,
                    backgroundColor: 'rgba(128, 0, 128, 0.2)',
                    pointBackgroundColor: pointColors,
                    pointBorderColor: pointColors,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    });


    // 팀 데이터를 가져와서 경기 결과와 일정을 표시하는 함수
    function fetchTeamData(teamId, teamTitle) {
        fetch(`http://localhost:3000/get-matches/${teamId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                matchesData = data.matches;
                displaySchedule(matchesData, teamTitle);
            })
            .catch(error => {
                console.error('Error fetching team data:', error);
            });
    }

    // 경기 결과와 일정을 표시하는 함수
    function displaySchedule(matches, teamTitle) {
        resultsContainer.innerHTML = '';
        teamName.textContent = `${teamTitle} 경기 결과 및 일정`;

        const now = new Date();

        if (matches && matches.length > 0) {
            // 지난 경기 결과 표시
            matches.forEach(match => {
                const matchDate = new Date(match.utcDate);
                if (matchDate <= now) {
                    const matchElement = document.createElement('div');
                    matchElement.classList.add('match-result');
                    matchElement.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.score.fullTime.home} : ${match.score.fullTime.away}`;
                    resultsContainer.appendChild(matchElement);
                }
            });

            // 캘린더에 경기 일정 표시
            initializeCalendar(matches);
        } else {
            resultsContainer.innerHTML = '<p>경기 데이터가 없습니다.</p>';
        }

        homePage.style.display = 'none';
        teamSelectPage.style.display = 'none';
        schedulePage.style.display = 'block';
    }

    // 달력 초기화 함수
    function initializeCalendar(matches) {
        calendarContainer.innerHTML = '';

        const firstDay = new Date(currentYear, currentMonth, 1);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const totalDays = lastDay.getDate();

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay.getDay()) {
                    cell.textContent = '';
                } else if (date > totalDays) {
                    break;
                } else {
                    const cellDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                    cell.setAttribute('data-date', cellDate);
                    cell.textContent = date;

                    // 경기 일정을 캘린더에 표시
                    matches.forEach(match => {
                        const matchDate = new Date(match.utcDate).toISOString().split('T')[0];
                        if (matchDate === cellDate) {
                            const event = document.createElement('div');
                            event.classList.add('event');
                            if (match.score.fullTime.home !== null && match.score.fullTime.away !== null) {
                                event.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name} (${match.score.fullTime.home} : ${match.score.fullTime.away})`;
                            } else {
                                event.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name}`;
                            }
                            cell.appendChild(event);
                        }
                    });

                    date++;
                }
                row.appendChild(cell);
            }
            calendarContainer.appendChild(row);
        }

        currentMonthLabel.textContent = `${currentYear}년 ${currentMonth + 1}월`;
    }

    // 이전 달 버튼 클릭 이벤트 리스너
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        initializeCalendar(matchesData);
    });

    // 다음 달 버튼 클릭 이벤트 리스너
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        initializeCalendar(matchesData);
    });

    // 팀 선택 페이지에서 홈으로 돌아가기
    document.getElementById('back-to-home').addEventListener('click', () => {
        teamSelectPage.style.display = 'none';
        homePage.style.display = 'block';
    });

    // 경기 결과 페이지에서 팀 선택으로 돌아가기
    document.getElementById('back-to-teams').addEventListener('click', () => {
        schedulePage.style.display = 'none';
        teamSelectPage.style.display = 'block';
    });
});
