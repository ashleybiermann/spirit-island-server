'use strict';

$('document').ready(() => {
  // $('#playerInfo').hide();

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
});

function updateNumberOfPlayers() {
  let numberOfPlayers = document.getElementById('numberOfPlayers').value;
  console.log('number of players:', numberOfPlayers);

  // let playerInfoDiv = document.getElementById('playerInfo');
  // console.log('playerInfoDiv', playerInfoDiv);
  
  // return { 'numberOfPlayers': numberOfPlayers };
  // for (let i = 0; i < numberOfPlayers; i++) {
    // $('#playerInfo').show();
  // }

}

