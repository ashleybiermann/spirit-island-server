'use strict';

$('document').ready(() => {

  $('#allGames').DataTable();

  $('#recordNewGame').on('click', function (e) {
    e.preventDefault();
    window.location.href = '/games/new';
  });

  $('#viewAllGameData').on('click',function (e) {
    e.preventDefault();
    window.location.href = '/games/all';
  });

  $('#searchGameData').on('click',function (e) {
    e.preventDefault();
    window.location.href = '/games/search';
  });

});


