function updateClock() {
  const now = new Date();
  const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours} : ${minutes} : ${seconds} : ${
    now.getHours() > 12 ? "PM" : "AM"
  }`;
  document.getElementById("clock-container").innerText = timeString;
}

setInterval(updateClock, 1000);
