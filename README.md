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
- Create database, and create a table `game_data`
  - Connect `data/schema.sql` to your running database
    
- `npm install`
- `npm start`

## Data
