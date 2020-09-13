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
