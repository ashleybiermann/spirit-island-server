'use strict';

// packages and dependencies
require('dotenv').config();
const express = require('express');
const { Client } = require('pg');
const methodOverride = require('method-override');

// global vars and app setup
const app = express();
const PORT = process.env.PORT || 3000;
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

// configs and middleware
app.use(express.urlencoded({ extended: true })); //middleware to create req.body for PORT from forms
app.use(express.static('./public')); // which frontend files to serve, for the case of forms
app.use(methodOverride('_overrideMethod'));

// pg set up
const client = new Client({
  user: DBUSER,
  password: DBPASSWORD,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to postgres database');
  }
});

// routes
app.get('/', getHomePage);

// start the app
app.listen(PORT, () => console.log(`app is up on port : ${PORT}`));

// function declarations
function getHomePage(req, res) {
  res.send('Welcome to the Spirit Island Game Tracker Homepage!');
}

function getAllGameInfo(req, res) {

}

