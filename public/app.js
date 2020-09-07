'use strict';

$('document').ready(() => {
  $('#gameDataEntryForm').show();

  $('#viewAllGameData').click(function(e) {
    e.preventDefault();
    window.location.href = '/games/all';
  });

  $('#searchGameData').show();
});