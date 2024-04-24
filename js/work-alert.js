//關閉按鈕

let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let alertClosed = event.target.closest(".alert");
    if (alertClosed) {
      alertClosed.remove();
    }
  });
});

//成功按鈕

function toastSuccess() {
  let toastSuccess = document.querySelector(".toast-success");
  toastSuccess.classList.add("toast-show"); // 添加顯示類
  setTimeout(() => {
    toastSuccess.classList.remove("toast-show"); // 移除顯示類，觸發消失的轉場
  }, 2000); // 顯示時間
}

function toastError() {
  let toastError = document.querySelector(".toast-error");
  toastError.classList.add("toast-show"); // 顯示
  setTimeout(() => {
    toastError.classList.remove("toast-show"); // 移除顯示類，觸發消失的轉場
  }, 2000); // 顯示時間
}

//lightbox按鈕

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");

const btnClose = document.createElement("button");
btnClose.textContent = "x";
btnClose.classList.add("btnClose");

const h3 = document.createElement("h3");

const p1 = document.createElement("p");
p1.textContent = "您平常的嗜好是什麼？";

const ul = document.createElement("ul");

const hobbies = [
  "Reading and Writing",
  "Cooking and Baking",
  "Outdoor Adventures",
  "Music and Performing Arts",
  "Fitness and Sports",
  "Art and Crafts",
  "Technology and Gaming",
  "Travel and Exploration",
  "Science and Education",
];

hobbies.forEach((hobby) => {
  const li = document.createElement("li");
  li.textContent = hobby;

  li.addEventListener("click", function () {
    li.classList.toggle("selectedchange");
  });
  ul.append(li);
});

const textarea = document.createElement("textarea");
textarea.setAttribute("cols", "30");
textarea.setAttribute("row", "30");

const p3 = document.createElement("p");
p3.textContent = "最想去哪旅行？";

const select = document.createElement("select");
const options = [
  { text: "Asia", value: "Asia" },
  { text: "Africa", value: "Africa" },
  { text: "North America", value: "North" },
  { text: "South America", value: "South" },
  { text: "Antarctica", value: "Antarctica" },
  { text: "Europe", value: "Europe" },
  { text: "Australia", value: "Australia" },
];

// options.forEach((optionData) => {
//   const option = document.createElement("option");
//   option.value = optionData.value;
//   option.textContent = optionData.text;
//   select.appendChild(option);
// });

const features = [
  "Asia, the largest and most populous continent, is a land of remarkable diversity and rich cultural heritage.",
  "Africa, often referred to as the cradle of humanity, is a continent bursting with vibrant cultures, majestic wildlife, and sprawling savannas. ",
  "North America is characterized by its diverse ecosystems, from the Arctic tundra of Canada to the tropical rainforests of Central America.",
  "South America is known for its awe-inspiring natural wonders and colorful cultures. ",
  "Antarctica, the southernmost continent, is a frozen wilderness at the end of the world. ",
  "Europe, rich in history and culture, is characterized by its diverse architecture, art, and cuisine. ",
  "Australia, known for its vast outback, unique wildlife, and vibrant cities, is a continent of contrasts. ",
];

// features.forEach((feature) => {
//   const p4 = document.createElement("p");
//   p4.textContent = feature;
// });

const btnSharing = document.createElement("button");
btnSharing.textContent = "Appreciate Sharing";


select.id = "continentSelect"; 

const featureTextContainer = document.createElement("p");
featureTextContainer.id = "featureText";

options.forEach((optionData, index) => {
  const option = document.createElement("option");
  option.value = index.toString(); 
  option.textContent = optionData.text;
  select.appendChild(option);
});

select.onchange = function () {
  const selectedIndex = this.value;

  if (features[selectedIndex]) {
    featureTextContainer.textContent = features[selectedIndex];
  } else {
    featureTextContainer.textContent = "";
  }
};

featureTextContainer.textContent = features[0];

const html = document.querySelector("html");
function showUp() {
  lightbox.append(
    h3,
    p1,
    ul,
    p3,
    select,
    featureTextContainer,
    btnSharing,
    btnClose
  );
  lightbox.classList.add("top");
  html.classList.add("overlay");
  document.body.append(lightbox);
}

btnSharing.addEventListener("click", function () {
  lightbox.remove();
  html.classList.remove("overlay");
});

btnClose.addEventListener("click", function () {
  lightbox.remove();
  html.classList.remove("overlay");
});

//表單驗證

document.getElementById("Form").addEventListener("submit", function (event) {
  var form = this;

  // 確認密碼一樣
  if (form.password.value !== form.confirm_password.value) {
    alert("Please confirm your password for accuracy");
    event.preventDefault(); 
  }
});

const form = document.querySelector("Form");
let username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm_password");
const btnSubmit = document.querySelector("#btnSubmit");

function validation() {
  let requiredUsername = document.querySelector(".requiredUsername");
  let requiredEmail = document.querySelector(".requiredEmail");
  let requiredPassword1 = document.querySelector(".requiredPassword1");
  let requiredPassword2 = document.querySelector(".requiredPassword2");

  if (
    username.value.trim() == "" ||
    username.value.length >= 20 ||
    username.value.length < 10
  ) {
    requiredUsername.style.display = "block";
    username.style.borderBottom = "1px solid rgba(231, 41, 41, 0.4)";
  } else {
    requiredUsername.style.display = "none";
    username.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
  }

  if (email.value.trim() == "" || email.value.includes("@")) {
    requiredEmail.style.display = "block";
    email.style.borderBottom = "1px solid rgba(231, 41, 41, 0.4)";
  } else {
    requiredUsername.style.display = "none";
    email.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
  }

  if (
    password.value.trim() === "" ||
    password.value.length < 6 ||
    password.value.length > 20
  ) {
    requiredPassword1.style.display = "block";
    password.style.borderBottom = "1px solid rgba(231, 41, 41, 0.4)";
  } else if (confirm_password.value !== password.value) {
    requiredPassword1.style.display = "none";
    requiredPassword2.style.display = "block";
    password.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
    confirm.style.borderBottom = "1px solid rgba(231, 41, 41, 0.4)";
  } else {
    requiredPassword1.style.display = "none";
    requiredPassword2.style.display = "none";
    password.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
  }
}

btnSubmit.addEventListener("click", validation);
// btnSubmit.onclick = validation;
