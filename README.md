#  EPL Match Tracker

##  Project Overview

EPL Match Tracker is a web application designed for Premier League fans to check match schedules and results in real-time.  
It leverages the [Football-Data.org](https://www.football-data.org/) API to provide live updates and presents information through a user-friendly interface with dynamic visualizations.

---

##  Key Features

1. **Home Page**
   - Header text: "EPL Match Schedule & Results ⚽"
   - "Choose Club" button redirects users to the team selection page

2. **Team Selection Page**
   - Displays logos of all EPL clubs
   - Clicking on a team logo navigates to that team's match page
   - A "Back" button allows returning to the home page

3. **Match Schedule & Results Page**
   - Shows recent match results
   - Upcoming fixtures are displayed in a calendar view
   - Includes a "Back to Team Selection" button

4. **AJAX & Fetch API**
   - Enables real-time updates and asynchronous data fetching from the API

5. **League Standings Chart**
   - Uses `Chart.js` to display EPL standings as a line chart
   - Relegation zone teams are highlighted in red

6. **Web Storage (Local Storage)**
   - Remembers the user’s selected team and automatically redirects on revisit

---

## Wireframes

### Home Page  
![Home Page](assets/homepage_wireframe.png)

###  Team Selection Page  
![Team Selection](assets/team_selection_wireframe.png)

###  Match Schedule & Results Page  
![Schedule Results Page](assets/schedule_results_wireframe.png)  
![Calendar View](assets/schedule_cal_wireframe.png)

---

##  Technologies Used

###  Frontend  
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

###  Backend  
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)](https://www.json.org/)

### API  
[![Football-Data.org](https://img.shields.io/badge/Football--Data.org-264653?style=for-the-badge&logo=soccer&logoColor=white)](https://www.football-data.org/)

### Libraries  
[![Chart.js](https://img.shields.io/badge/Chart.js-F5788D?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
---

## Languages

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

##  Author

- **GaEun Lee**  
- Department of AI Engineering, Sookmyung Women’s University  
- GitHub: [2eueu](https://github.com/2eueu)

---

##  License

MIT License © 2024 GaEun Lee (2eueu_)
