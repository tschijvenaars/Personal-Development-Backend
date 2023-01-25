# Project Neutag

It's a new day, a new start, a new platform. Built to learn the MEAN Stack, using templates from rwieruch and BLANK.

## Features

- Express
- REST API
- MongoDB (Mongoose)

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git]

## Installation

- `git clone git@github.com:rwieruch/node-express-mongodb-server.git`
- `cd node-express-mongodb-server`
- `npm install`
- `install node dependencies`
  - visit https://www.robinwieruch.de/minimal-node-js-babel-setup/
  - `npm install nodemon --save-dev`
  - `npm install @babel/core @babel/node --save-dev`
  - `npm install @babel/preset-env --save-dev`
  - `npm install dotenv --save`
- `install mongodb dependencies`
  - `npm install mongoose --save`
  - visit https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
  - `brew tap mongodb/brew`
  - `brew install mongodb-community@6.0`
  - `brew services start/stop mongodb-community@6.0`
- `npm start`
- optional: include _.env_ in your _.gitignore_
