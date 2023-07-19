"use strict";
let timer;
function clockStart() {
  timer = setInterval(() => render(), 1000);
  render();
}

function clockStop() {
  clearInterval(timer);
}

function render() {
  let hh = document.querySelector(".hour");
  let mm = document.querySelector(".min");
  let ss = document.querySelector(".sec");

  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;

  let mins = date.getMinutes();
  if (mins < 10) mins = "0" + mins;

  let secs = date.getSeconds();
  if (secs < 10) secs = "0" + secs;

  hh.textContent = hours;
  mm.textContent = mins;
  ss.textContent = secs;
}
