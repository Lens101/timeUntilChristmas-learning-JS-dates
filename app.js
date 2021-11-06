days = document.querySelector(".days");
hours = document.querySelector(".hours");
seconds = document.querySelector(".seconds");
minutes = document.querySelector(".minutes");

function timerFunc() {
  let date1 = new Date();
  const christmas = new Date("25 Dec 2021");

  const totalSeconds = (christmas - date1) / 1000;

  const daysTry = Math.floor(totalSeconds / 3600 / 24);
  const hoursTry = Math.floor((totalSeconds / 3600) % 24);
  const minutesTry = Math.floor((totalSeconds / 60) % 60);
  const secondsTry = Math.floor(totalSeconds % 60);
  console.log(daysTry, hoursTry, minutesTry, secondsTry);
  //all current dates

  days.innerHTML = daysTry;
  hours.innerHTML = hoursTry;
  minutes.innerHTML = minutesTry;
  seconds.innerHTML = secondsTry;
}
timerFunc();
setInterval(timerFunc, 1000);
