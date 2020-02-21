'use strict';

let count = 0;
function changeImage(){
  if (count === 0){
    $('#project1').css("background-image", "url('../img/pickster1.png')");
    count++;
  } else if (count === 1){
    $('#project1').css("background-image", "url('../img/pickster2.png')");
    count++;
  } else if (count === 2){
    $('#project1').css("background-image", "url('../img/pickster3.png')");
    count = 0;
  }
}

window.onload = function () {
  let x = 0;
  setInterval(function () {
    changeImage();
  }, 5000);
};