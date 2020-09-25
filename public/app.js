'use strict';

$('document').ready(() => {
  
  // $('#allGameInfo').hide();

  $('#recordNewGame').click(function(e) {
    e.preventDefault();
    window.location.href = '/games/new';
  });

  $('#viewAllGameData').click(function(e) {
    e.preventDefault();
    window.location.href = '/games/all';
  });

  $('#searchGameData').click(function(e) {
    e.preventDefault();
    window.location.href = '/games/search';
  });

  $('#numberOfPlayers').click(function(e) {
    e.preventDefault();
    let numberOfPlayers = updateNumberOfPlayers();
    window.location.href = '/games/new/' + numberOfPlayers;
  });

  // $('#setNumberOfPlayers').
});

function updateNumberOfPlayers() {
  let numberOfPlayers = document.getElementById('numberOfPlayers').value;
  return numberOfPlayers;
}

