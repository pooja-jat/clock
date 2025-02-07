

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();


  const timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock-container").innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();




