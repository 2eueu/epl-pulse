# EPL Match Tracker ⚽

## **프로젝트 개요**
EPL 팬들을 위한 경기 일정 및 결과 확인 웹 어플리케이션입니다.  
Football-Data.org API를 활용하여 실시간 경기 데이터를 제공하며, 사용자 친화적인 UI와 시각적 차트를 통해 정보 전달의 효율성을 극대화했습니다.

---

## **주요 기능**
1. **홈 페이지**
   - 헤더 텍스트: "EPL 경기 일정 및 결과 ⚽"
   - "클럽 선택하기" 버튼으로 팀 선택 페이지로 이동

2. **팀 선택 페이지**
   - EPL 구단 로고를 표시, 사용자가 원하는 팀 로고 클릭 시 해당 팀의 경기 페이지로 이동
   - 뒤로 가기 버튼으로 홈 페이지로 복귀

3. **경기 결과 및 일정 페이지**
   - 지난 경기 결과 리스트
   - 캘린더를 통한 향후 경기 일정 표시
   - 팀 선택으로 돌아가기 버튼

4. **AJAX 및 Fetch API**
   - 실시간 데이터 업데이트 및 비동기 처리

5. **리그 순위 차트 시각화**
   - 강등권 팀은 빨간색으로 강조
   - Chart.js 라이브러리를 활용한 라인 차트 구현

6. **웹 스토리지(Local Storage)**
   - 사용자가 선택한 팀 정보를 저장하여 재방문 시 해당 팀 페이지로 자동 이동

---

## **와이어프레임**
### 홈 페이지
![홈 페이지](assets/homepage_wireframe.png)

### 팀 선택 페이지
![팀 선택 페이지](assets/team_selection_wireframe.png)

### 경기 결과 및 일정 페이지
![경기 결과 및 일정 페이지](assets/schedule_results_wireframe.png)
![경기 결과 및 일정 페이지](assets/schedule_cal_wireframe.png)
---
## 언어
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## **사용 기술 스택**
### 프론트엔드
- **HTML**: 구조 설계
- **CSS**: 스타일링 및 레이아웃
- **JavaScript**: 동적 상호작용 구현

### 백엔드
- **Node.js / Express**: 서버 구축 및 API 통신
- **JSON**: 데이터 관리

### API
- **Football-Data.org API**: 실시간 데이터 제공

### 라이브러리
- **Chart.js**: 리그 순위 차트 시각화

---

