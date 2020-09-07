'use strict';

// packages and dependencies
require('dotenv').config();
const express = require('express');
const { Client } = require('pg');
const methodOverride = require('method-override');

// global vars and app setup
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// configs and middleware
app.use(express.urlencoded({ extended: true })); //middleware to create req.body for PORT forms
app.use(express.static('./public')); // which frontend files to serve, for the case of forms
app.set('view engine', 'ejs'); // render === build a page in express
app.use(methodOverride('_overrideMethod'));

// pg set up
const client = new Client(DATABASE_URL);

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to spirit_island database');
  }
});

// routes
app.get('/', getHomePage);
app.get('/games/all', getAllGameData);

// start the app
app.listen(PORT, () => console.log(`app is up on port : ${PORT}`));

// function declarations
function getHomePage(req, res) {
  res.render('pages/index.ejs');
}

function getAllGameData(req, res) {
  const sqlQuery = 'SELECT * FROM game_data';
  client.query(sqlQuery)
    .then(result => {

      if (result.rowCount > 0) {
        console.log(result.rows);
        res.render('pages/games/all', { 'allGames': result.rows });
      } else {
        res.render('pages/games/add');
      }
    })
    .catch (error => {
      res.render('pages/error', { 'error': error });
      console.log('error retrieving game data from database', error);
    });

  // res.send('all game data coming sooN!');
}

module.exports = getHomePage;