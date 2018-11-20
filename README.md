bomadeno-nodejs-playground

A playground in which I am experimenting with the nodejs ecosystem. 

#Pre requisites
 - Node JS (developed with version 10.13.0)
 - heroku CLI toolbelt (not strictly required, but you'll need to do some editing to make it work without)
 - PostgreSQL (ensure local access is enabled)

#Dev installation
Create a .env file with
- PORT= 3000 (or whatever you prefer)
- Database credentials, either DATABASE_URL or
  - DB_USERNAME_DEV
  - DB_NAME_DEV
  - DB_PASSWORD_DEV

Run "node_modules/.bin/sequelize db:create" to create the dev database
Run "node_modules/.bin/sequelize db:migrate" to prepare the dev database

This app is designed to be run with the heroku toolbelt. Once installed, run "heroku local web" to
start the server.

#Heroku installation
Create a new heroku app
Provision a new database
Push your code to Heroku
The database will automatically migrate during heroku's release build stage


#General use
Access the app at localhost:PORT/ - it should guide you from there.

#API use
The api is available at localhost:PORT/news/

*TODO document API*

#Testing use
*todo how to populate the database with test data (seeding)*