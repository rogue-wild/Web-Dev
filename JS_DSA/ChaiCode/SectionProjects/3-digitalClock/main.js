const clock = document.getElementById("clock");
clock.innerHTML = new Date().toLocaleTimeString();
const date = document.getElementById("date");
setInterval(function () {
  clock.innerHTML = new Date().toLocaleTimeString();
  date.innerHTML = new Date().toDateString();
}, 1000);
