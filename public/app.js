'use strict';

$('document').ready(() => {
  $('#recordNewGame').click(function(e) {
    e.preventDefault();
    window.location.href = '/games';
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