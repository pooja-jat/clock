function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours} : ${minutes} : ${seconds}`;
  document.getElementById("clock-container").innerText = timeString;
}
// const now = new Date();
// const hours = now.getHours();
setInterval(updateClock, 1000);

const setPm = () => {
  let now = new Date();
  let hours = now.getHours();
  let p = document.querySelector("p");
  p.innerText = hours > 12 ? "PM" : "AM";
};
setPm();
