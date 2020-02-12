'use strict';

const goBackButton = $('#404-go-back')

goBackButton.on('click', goBack);

function goBack() {
  window.history.back();
}