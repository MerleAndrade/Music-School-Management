# Music-School-Management

This project aims to simplify administration in a music school.<br>
Create teachers, create students and match them in a course.<br>
Important: Only the instruments that are also offered by teachers are displayed here.<br>
Because a course without a suitable teacher makes no sense.<br>

## Badges
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=merleandrade_Music-School-Management-backend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=merleandrade_Music-School-Management-backend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=merleandrade_Music-School-Management-backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=merleandrade_Music-School-Management-backend)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=merleandrade_Music-School-Management-backend&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=merleandrade_Music-School-Management-backend)

## Project status
The application is under construction

## Installation
- Open project in an IDE of your choice <br>
- Run `npm install` in frontend folder <br>
- Allow installation of backend packages (if needed)<br>
- Start backend application<br>
- Start frontend application (with start-button in package.json)<br>
- Open http://localhost:3000 in a browser of your choice <br>
   To start the application for the first time an admin-user must be stored in the MongoDB beforehand:<br>
- Open MongoDB-Compass and connect to mongodb://localhost:27017<br>
- Create a database named "music"<br>
- Create 3 collections named "teachers", "students" and "courses"<br>