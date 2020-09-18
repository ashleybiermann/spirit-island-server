'use strict';

$('document').ready(() => {
  $('#playerInfoForm').hide();

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

  $('#addPlayerInfo').click(function(e) {
    e.preventDefault();
    $('#playerInfoForm').show();
    // $('#addAnotherPlayer').show();
  });
});