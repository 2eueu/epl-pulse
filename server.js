const express = require('express');
const axios = require('axios');
const cors = require('cors'); // CORS 모듈 불러오기

const app = express();
const PORT = 3000;

// CORS 설정 추가
app.use(cors());

// 경기 일정 가져오기 라우트
app.get('/get-matches/:teamId', async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const apiUrl = `https://api.football-data.org/v4/teams/${teamId}/matches`;

        const response = await axios.get(apiUrl, {
            headers: { 'X-Auth-Token': '2d25702dea504a21960c3a1608499972
' }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// 리그 테이블 가져오기 라우트
app.get('/get-league-table', async (req, res) => {
    try {
        const apiUrl = 'https://api.football-data.org/v4/competitions/PL/standings';

        const response = await axios.get(apiUrl, {
            headers: { 'X-Auth-Token': '2d25702dea504a21960c3a1608499972' }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


    // 팀 데이터를 가져와서 경기 결과와 일정을 표시하는 함수
    function fetchTeamData(teamId, teamTitle) {
        fetch(`http://localhost:3000/get-matches/${teamId}`)
            .then(response => response.json())
            .then(data => {
                displaySchedule(data, teamTitle);
            })
            .catch(error => {
                console.error('Error fetching team data:', error);
            });
    }

    // 경기 결과와 일정을 표시하는 함수
    function displaySchedule(data, teamTitle) {
        resultsContainer.innerHTML = '';
        calendarContainer.innerHTML = '';
        teamName.textContent = `${teamTitle} 경기 결과 및 일정`;

        if (data.matches && data.matches.length > 0) {
            // 경기 결과 표시
            data.matches.forEach(match => {
                const matchElement = document.createElement('div');
                matchElement.classList.add('match-result');
                matchElement.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.score.fullTime.home} : ${match.score.fullTime.away}`;
                resultsContainer.appendChild(matchElement);
            });

            // 경기 일정을 캘린더에 표시
            data.matches.forEach(match => {
                const matchDate = new Date(match.utcDate);
                const dayCell = document.querySelector(`.calendar-table td[data-date="${matchDate.toISOString().split('T')[0]}"]`);

                if (dayCell) {
                    const event = document.createElement('div');
                    event.classList.add('event');
                    event.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name}`;
                    dayCell.appendChild(event);
                }
            });
        } else {
            resultsContainer.innerHTML = '<p>경기 데이터가 없습니다.</p>';
        }

        // 팀 선택 페이지 숨기기
        teamSelectPage.style.display = 'none';
        // 경기 결과 및 일정 페이지 보이기
        schedulePage.style.display = 'block';
    }

    // 뒤로 가기 버튼 이벤트 리스너
    document.getElementById('back-to-teams').addEventListener('click', () => {
        schedulePage.style.display = 'none';
        teamSelectPage.style.display = 'block';
    });



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
