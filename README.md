<h1 align="center">ExpressJS - REST API for Hospital</h1>

REST API to manage patient's data in hospital.

## Features

1. Get List of All Patient's Data
2. Get Patient's Detail
3. Update Patient's Data
4. Delete Patient's Data
5. Add New Patient's Data

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.18.2-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. XAMPP)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make a new **.env** file, set up first [here](#set-up-env-file)
4. Turn on Web Server
5. Create a database with name `hospital_db`, then import hospital_db.sql file to **phpmyadmin**
6. Open Postman desktop application
7. Choose HTTP Method and enter request url.(ex. localhost:3001/)
8. You can see all the end point [here](#postman-documentation)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=          // Database host
DB_PASS=          // Database password
DB_USER=          // Database user
DB_NAME=          // Database name
PORT=             // Port where express is running
IP=               // IP where express is running
```

## Postman Documentation
You can see all the HTTP requests [here](https://www.getpostman.com/collections/9ef2dceaffce311ea976)