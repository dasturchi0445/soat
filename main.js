// script.js
function updateClock() {
  var now = new Date(); // Hozirgi vaqtdan foydalanamiz
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Soat, daqiqa va soniyalarni ikkitalik formatda ko'rsatamiz (00:00:00)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var currentTime = hours + ":" + minutes + ":" + seconds;

  // Soat elementiga vaqtni qo'shamiz
  document.getElementById("clock").innerHTML = currentTime;
}

// Soatni har soniyada yangilaymiz
setInterval(updateClock, 1000);

// Dastur yuklanishi bilan soatni yangilash uchun birinchi qo'ng'iroq
updateClock();
