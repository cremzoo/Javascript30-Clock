const secHand = document.querySelector(".seconds-hand");
const minHand = document.querySelector(".minutes-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  weekday_value = now.getDay();
  month_value = now.getMonth();
  const year = now.getFullYear();
  const dayOfMonth = now.getDate();

  document.getElementById("message1").innerHTML =
    weekdays[weekday_value] +
    " " +
    dayOfMonth +
    ", " +
    months[month_value] +
    ", " +
    year;

  const seconds = now.getSeconds();
  const secondsDegrees = seconds / 60 * 360 + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = hours / 12 * 360 + minutes / 60 * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const hands = document.querySelectorAll(".hand");
  
  if (secondsDegrees === 90) {
    hands.forEach(hand => (hand.style.transition = "none"));
  } 
  else {
    hands.forEach(hand => (hand.style.transition = " "));
  }

  document.getElementById("message2").innerHTML = "Hello, there!";
  let quotes = [
    "Time to wake up! The sun has risen!",
    "It's lunch time! Enjoy your meal!",
    "Soon workday will be over! Have a little patience!",
    "Your job here is done! Go home!",
    "You better eat something!",
    "Time to go to sleep! Good night!",
    "Hooray! It's midnight!",
    "You rock! Use your time wisely."
  ];
  let funnyMessage = document.getElementById("message3");
  if ((hours >= 7) & (hours <= 11)) {
    funnyMessage.innerHTML = quotes[0];
  } 
  else if ((hours >= 12) & (hours < 14)) {
    funnyMessage.innerHTML = quotes[1];
  } 
  else if ((hours >= 17) & (hours < 18)) {
    funnyMessage.innerHTML = quotes[2];
  } 
  else if ((hours >= 18) & (hours < 19)) {
    funnyMessage.innerHTML = quotes[3];
  } 
  else if ((hours >= 19) & (hours < 22)) {
    funnyMessage.innerHTML = quotes[4];
  } 
  else if (hours >= 22) {
    funnyMessage.innerHTML = quotes[5];
  } 
  else if (hours === 0) {
    funnyMessage.innerHTML = quotes[6];
  } 
  else {
    funnyMessage.innerHTML = quotes[7];
  }
}
setInterval(setDate, 1000);
setDate();