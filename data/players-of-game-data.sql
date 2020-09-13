DROP TABLE IF EXISTS players_of_game_data;

CREATE TABLE IF NOT EXISTS players_of_game_data (
  players_of_game_id INTEGER,
  player_name VARCHAR(255),
  spirit VARCHAR(255),
  board VARCHAR(255),
  presence_at_end INTEGER
);