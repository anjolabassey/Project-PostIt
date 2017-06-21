# Project-PostIt

# Badges
coverall badge: [![Coverage Status](https://coveralls.io/repos/github/anjolabassey/Project-PostIt/badge.svg?branch=master)](https://coveralls.io/github/anjolabassey/Project-PostIt?branch=master)

Description: PostIt is a simple application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.

# SetUp and Use

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Open terminal/console and type: 'git clone https://github.com/anjolabassey/post-it'

Start a local server in the post-it root directory.

Open postman to test the API routes. They include;
* api/user/signup
* api/user/login
* api/group
* api/group/<group id>/user
* api/group/<group id>/message

# Features
* Users can create accounts and signin to the app.
* Users can create groups and add other users to the group.
* Users can post messgaes to their created groups.
* Users can retrieve messages that have been posted on their group.


# Future modifications

Core functionality is not implemented on the user interface yet

# Built With

HTML/CSS/Bootstrap - Used to build the user interface pages
NodeJS - Runtime environment for executing JavaScript code server-side
Express - A NodeJS application framework that provides a robust set of features for web and mobile applications
Postgresql/Sequelize - Used to crated the database

# Author

Anjolaoluwa Bassey


# LICENSING

This project is licensed under the MIT License 

