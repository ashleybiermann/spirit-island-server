DROP TABLE IF EXISTS players_of_game_data CASCADE;

CREATE TABLE IF NOT EXISTS players_of_game_data (
  game_id INTEGER,
  player_name VARCHAR(255),
  spirit VARCHAR(255),
  board VARCHAR(255),
  presence_at_end INTEGER,
  FOREIGN KEY(game_id) REFERENCES game_data(game_id)
);

