'use strict';

$('document').ready(() => {
  $('#recordNewGame').click(function(e) {
    e.preventDefault();
    //TODO: toggle open a form that sits about the entire game data already rendered and on submit, it will add the data to the database and re-render all game data
    // window.location.href = '/games'; FIXME: this probably doesn't need to be here
  });

  $('#viewAllGameData').click(function(e) {
    e.preventDefault();
    window.location.href = '/games/all';
  });

  $('#searchGameData').click(function(e) {
    e.preventDefault();
    // window.location.href = '/games/all'; FIXME:
  });
});