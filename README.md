# Spirit Island Score Tracker

## Description
Server for Spirit Island game data tracking

## Requirements 
- Node.js
- PostgreSQL
- Environment Variables
  - `PORT`
  - `DATABASE_URL`
    - Note: When in development and using localhost, set to `5432`, *not* the PORT address
    - `postgres://<yourDBusername>:<yourDBpassword>@localhost:5432/<database_name>`

## Instructions
- Create database `spirit_island`
- Within, create tables `game_data` and `players_of_game_data`
  - Connect `data/game-schema.sql` and `data/players-of-game-schema.sql` to your running database
    
- `npm install`
- `npm start`
- View on `http://localhost:<PORT>/`

## Data

## Cheatsheet
- Database name: spirit_island
- Tables: game_data | players_of_game_data
- link db to schema Heroku `heroku pg:push spirit_island DATABASE_URL --app spirit-island-scores`
- connect files to local db `psql -d spirit_island -f data/game-schema.sql` & `psql -d spirit_island -f data/players-of-game-schema.sql`

## Current feature tasks
- performing query on tables to retrieve info from db and render it to the View All Games page