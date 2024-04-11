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

//訂購成功按鈕

function toastSuccess() {
  let toastSuccess = document.querySelector(".toast-success");
  toastSuccess.classList.add("toast-show"); // 添加顯示類
  setTimeout(() => {
    toastSuccess.classList.remove("toast-show"); // 移除顯示類，觸發消失的轉場
  }, 2000); // 顯示時間
}

function toastError() {
  let toastError = document.querySelector(".toast-error");
  toastError.classList.add("toast-show"); // 添加顯示類
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
  "Asia, the largest and most populous continent, is a land of remarkable diversity and rich cultural heritage. It spans vast deserts, towering mountains, and endless coastlines. Home to some of the world’s oldest civilizations, Asia offers a blend of ancient traditions and rapid modernization, with bustling metropolises like Tokyo and tranquil landscapes such as the rice terraces of Bali.",
  "Africa, often referred to as the cradle of humanity, is a continent bursting with vibrant cultures, majestic wildlife, and sprawling savannas. It boasts the Sahara, the world's largest hot desert, alongside lush rainforests and stunning beaches. Africa's rich biodiversity includes iconic species such as lions, elephants, and giraffes, making it a prime destination for safari enthusiasts.",
  "North America is characterized by its diverse ecosystems, from the Arctic tundra of Canada to the tropical rainforests of Central America. This continent offers some of the world’s most iconic landscapes, including the Grand Canyon and Niagara Falls. It’s a melting pot of cultures, with a history deeply influenced by indigenous peoples, European colonization, and the African diaspora.",
  "South America is known for its awe-inspiring natural wonders and colorful cultures. The Amazon Rainforest, the largest rainforest on Earth, and the Andes, the world’s longest mountain range, dominate its geography. The continent's rich cultural tapestry is reflected in its music, dance, and festivals, with the Carnival in Rio being a world-famous event.",
  "Antarctica, the southernmost continent, is a frozen wilderness at the end of the world. It is the coldest, driest, and windiest continent, covered by the largest ice sheet on Earth. This remote land, uninhabited by humans, plays a crucial role in the world’s climate and ocean systems. Its unique landscape offers unparalleled beauty, making it a bucket-list destination for the most intrepid explorers.",
  "Europe, rich in history and culture, is characterized by its diverse architecture, art, and cuisine. From the ancient ruins in Rome to the modernist wonders in Barcelona, Europe is a testament to human creativity across ages. The continent also offers natural beauty ranging from the fjords of Norway to the sunny beaches of the Mediterranean.",
  "Australia, known for its vast outback, unique wildlife, and vibrant cities, is a continent of contrasts. It's home to the Great Barrier Reef, the world's largest coral reef system, and iconic landmarks like the Sydney Opera House. Australia's indigenous cultures, surf beaches, and the laid-back lifestyle make it a fascinating destination for travelers.",
];

// features.forEach((feature) => {
//   const p4 = document.createElement("p");
//   p4.textContent = feature;
// });

const btnSharing = document.createElement("button");
btnSharing.textContent = "Appreciate Sharing";

// Assuming 'features' array and 'options' array are defined as in your example

// Create a select element
// const selectCon = document.createElement("select");
select.id = "continentSelect"; // Giving an ID for easy access

// Create a container for displaying the selected feature text
const featureTextContainer = document.createElement("p");
featureTextContainer.id = "featureText";

// Add options to the select element
options.forEach((optionData, index) => {
  // Include 'index' to match with 'features' array
  const option = document.createElement("option");
  option.value = index.toString(); // Use index as value to map with the 'features' array
  option.textContent = optionData.text;
  select.appendChild(option);
});

// Add an onchange event listener to the select element
select.onchange = function () {
  // Get the index of the selected option
  const selectedIndex = this.value;

  // Update the container's text to the corresponding feature text
  // Check if selectedIndex is a valid index in the 'features' array to avoid errors
  if (features[selectedIndex]) {
    featureTextContainer.textContent = features[selectedIndex];
  } else {
    featureTextContainer.textContent = ""; // Clear text if selection is invalid
  }
};

// Assuming you have a container in your HTML to append these elements to
// document.body.appendChild(select); // Add the select element to the page
// document.body.appendChild(featureTextContainer); // Add the container for feature text

// If you want to display the text of the first option by default
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
