const body = document.querySelector("body");
const send = document.querySelector(".input-btn");
const cube = document.querySelector(".cube");
const donateOpen = document.querySelector(".donate-btn");
const donateClose = document.querySelector(".close");

const form = document.querySelector("form");
const modal = document.querySelector(".modal");

send.addEventListener("click", function () {
  let formP = document.createElement("p");
  let formText = "Спасибо за подписку на спам!";
  formP.style.color = "red";
  formP.style.fontSize = "24px";
  formP.textContent = formText;
  form.appendChild(formP);
});

donateOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("hidden");
  body.classList.add("disable-scroll");
});
donateClose.addEventListener("click", function () {
  modal.classList.add("hidden");
  body.classList.remove("disable-scroll");
});

cube.addEventListener("click", function () {
  modal.classList.toggle("modal-fullscreen");
  let container = document.createElement("div");
  container.classList.add("flex");
  modal.appendChild(container);
  let title = document.createElement("h2");
  title.textContent = "Привет в секретном";
  title.style.color = "#f7f7f7";
  container.appendChild(title);
  let btn = document.createElement("button");
  btn.style.background = "#cd6326";
  btn.style.border = "#cd6326";
  btn.style.borderRadius = "5px";
  btn.style.padding = "15px";
  btn.style.color = "#f7f7f7";
  btn.style.marginTop = "100px";
  btn.textContent = "тыкни в меня";
  container.appendChild(btn);

  btn.addEventListener("click", function () {
    alert("Взлом жопы активирован! АХТУНГ!");
  });
});
