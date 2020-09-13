DROP TABLE IF EXISTS game_data;

CREATE TABLE IF NOT EXISTS game_data (
  game_id SERIAL PRIMARY KEY NOT NULL,
  date DATE,
  owner VARCHAR(255),
  victory BOOLEAN,
  victory_condition VARCHAR(255),
  loss_condition VARCHAR(255),
  phase VARCHAR(255),
  country VARCHAR(255),
  country_level INTEGER,
  terrain_card_count INTEGER,
  terror_level INTEGER,
  invader_hp_remaining INTEGER,
  difficulty_feel INTEGER,
  blight_card VARCHAR(255),
  scenario VARCHAR(255),
  branch_claw BOOLEAN,
  jagged_earth BOOLEAN,
  events BOOLEAN,
  notes TEXT
);