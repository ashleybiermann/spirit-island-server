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
app.post('/games', saveNewGame);

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
}

function saveNewGame(req, res) {
  const saveToDatabase = 'INSERT INTO game_data (date, owner, victory, victory_condition, loss_condition, country, country_level, terrain_card_count, invader_hp_remaining, difficulty_feel, blight_card, scenario, branch_claw, jagged_earth, events, notes, terror_level, phase) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING id';

  const gameInfo = [req.body.date, req.body.owner, req.body.victory, req.body.victory_condition, req.body.loss_condition, req.body.country, req.body.country_level, req.body.terrain_card_count, req.body.invader_hp_remaining, req.body.difficulty_feel, req.body.blight_card, req.body.scenario, req.body.branch_claw, req.body.jagged_earth, req.body.events, req.body.notes, req.body.terror_level, req.body.phase];

  client.query(saveToDatabase, gameInfo)
    .then(result => {
      res.redirect('/games/all');
    })
    .catch(error => {
      res.render('pages/error', { 'error': error });
    });
}

module.exports = getHomePage;