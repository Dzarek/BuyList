// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const submitBtn2 = document.querySelector(".submit-btn2");
const submitBtn4 = document.querySelector(".submit-btn4");
const submitBtn5 = document.querySelector(".submit-btn5");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// token = 6087d056788729297cf49ac7012ac4b027ab54b9028b41894f11ee7dc0075117655a13949619e41df6bdd57d6c758175e55eb1e9d3bfaafc37118ca202f003e318bd19f5ebf9c03eeb1d9a2d8ac79bae14ede945b74d4dd73ac2453c8549f0678816b51bc9873e564d513946819d0554e3ccbadd402c93a668aa381ac998072b

const url = "http://localhost:1337/api/products";

// DATA PRODUCTS
const jedzenie = [
  {
    src: "https://img.icons8.com/office/40/000000/bread.png",
    alt: "chleb",
    category: "pieczywo",
  },
  {
    src: "https://img.icons8.com/emoji/48/000000/bagel-emoji.png",
    alt: "bułki",
    category: "pieczywo",
  },
  {
    src: "https://img.icons8.com/officel/40/000000/wrap.png",
    alt: "tortilla",
    category: "pieczywo",
  },
  {
    src: "https://img.icons8.com/office/40/000000/baby-bottle.png",
    alt: "mleko dla dziecka",
    category: "nabiał",
  },

  {
    src: "https://img.icons8.com/office/40/000000/milk.png",
    alt: "mleko",
    category: "nabiał",
  },
  {
    src: "https://img.icons8.com/ultraviolet/40/000000/yogurt.png",
    alt: "jogurt",
    category: "nabiał",
  },
  {
    src: "https://img.icons8.com/office/40/000000/cheese.png",
    alt: "ser",
    category: "nabiał",
  },
  {
    src: "https://img.icons8.com/carbon-copy/100/000000/mozzarella.png",
    alt: "twaróg",
    category: "nabiał",
  },
  {
    src: "https://img.icons8.com/office/40/000000/sunny-side-up-eggs.png",
    alt: "jajka",
    category: "nabiał",
  },
  {
    src: "https://img.icons8.com/office/40/000000/apple.png",
    alt: "jabłka",
    category: "owoce",
  },
  {
    src: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-banana-jungle-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
    alt: "banany",
    category: "owoce",
  },
  {
    src: "https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-grapes-autumn-tulpahn-outline-color-tulpahn.png",
    alt: "winogrona",
    category: "owoce",
  },
  {
    src: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-lemon-fruit-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png",
    alt: "cytryna",
    category: "owoce",
  },
  {
    src: "https://img.icons8.com/office/40/000000/potato.png",
    alt: "ziemniak",
    category: "warzywa",
  },
  {
    src: "https://img.icons8.com/office/40/000000/tomato.png",
    alt: "pomidor",
    category: "warzywa",
  },
  {
    src: "https://img.icons8.com/emoji/48/000000/cucumber-emoji.png",
    alt: "ogórek",
    category: "warzywa",
  },
  {
    src: "https://img.icons8.com/color/48/000000/lettuce.png",
    alt: "salata",
    category: "warzywa",
  },
  {
    src: "https://img.icons8.com/cotton/64/000000/ham.png",
    alt: "szynka",
    category: "mięso",
  },
  {
    src: "https://img.icons8.com/office/40/000000/sausages.png",
    alt: "parówki",
    category: "mięso",
  },
  {
    src: "./produkty/kurczak.svg",
    alt: "kurczak",
    category: "mięso",
  },
  {
    src: "./produkty/mięso_wieprzowe.svg",
    alt: "mięso wieprzowe",
    category: "mięso",
  },
  {
    src: "./produkty/mięso_wołowe.svg",
    alt: "mięso wołowe",
    category: "mięso",
  },
  {
    src: "https://img.icons8.com/fluency/48/000000/sausages.png",
    alt: "kabanosy",
    category: "mięso",
  },
  {
    src: "https://img.icons8.com/emoji/48/000000/chocolate-bar-emoji.png",
    alt: "coś słodkiego",
    category: "przekąski",
  },
  {
    src: "https://img.icons8.com/office/40/000000/nachos.png",
    alt: "chipsy",
    category: "przekąski",
  },
  {
    src: "https://img.icons8.com/office/40/000000/beer.png",
    alt: "piwo",
    category: "przekąski",
  },
  {
    src: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-peanut-butter-healthy-food-and-vegan-justicon-lineal-color-justicon.png",
    alt: "masło orzechowe",
    category: "przekąski",
  },
  {
    src: "https://img.icons8.com/office/40/000000/ketchup.png",
    alt: "ketchup",
    category: "inne",
  },
  {
    src: "https://img.icons8.com/emoji/48/000000/canned-food-emoji.png",
    alt: "pasta pomidorowa",
    category: "inne",
  },
  {
    src: "https://img.icons8.com/color/48/000000/french-fries.png",
    alt: "frytki",
    category: "inne",
  },
  {
    src: "https://img.icons8.com/office/40/000000/rice-bowl.png",
    alt: "ryż",
    category: "inne",
  },
  {
    src: "https://img.icons8.com/office/40/000000/spaghetti.png",
    alt: "makaron",
    category: "inne",
  },
];
const chemia = [
  {
    src: "https://img.icons8.com/office/40/000000/toilet-paper.png",
    alt: "papier toaletowy",
    category: "higiena",
  },
  {
    src: "https://img.icons8.com/plasticine/100/000000/deodorant-spray.png",
    alt: "deodorant",
    category: "higiena",
  },
  {
    src: "./produkty/mydło.svg",
    alt: "mydło",
    category: "higiena",
  },
  {
    src: "https://img.icons8.com/officel/40/000000/toothpaste.png",
    alt: "pasta do zębów",
    category: "higiena",
  },
  {
    src: "./produkty/patyczkiDoUszu.svg",
    alt: "patyczki do uszu",
    category: "higiena",
  },
  {
    src: "https://img.icons8.com/officel/40/000000/nappy.png",
    alt: "pieluchy",
    category: "higiena",
  },
  {
    src: "./produkty/szampon.svg",
    alt: "szampon",
    category: "higiena",
  },
  {
    src: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-wet-wipes-hygiene-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
    alt: "chusteczki",
    category: "higiena",
  },
  {
    src: "https://img.icons8.com/emoji/48/000000/lotion-bottle.png",
    alt: "płyn do naczyń",
    category: "sprzątanie",
  },
  {
    src: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-trash-hygiene-kiranshastry-lineal-color-kiranshastry.png",
    alt: "worki na śmieci",
    category: "sprzątanie",
  },
];

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);

const deleteBtn = document.querySelector(".delete-btn");

window.addEventListener("DOMContentLoaded", () => {
  setupItems();
});
// ****** FUNCTIONS **********

const postProducts = (id, value) =>
  fetch("https://buy-list-dzarek.herokuapp.com/api/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        id: id,
        name: value,
        idproduct: id,
      },
    }),
  });

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    // fetch("http://localhost:1337/api/products", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     data: {
    //       id: id,
    //       name: value,
    //       idproduct: id,
    //     },
    //   }),
    // });
    postProducts(id, value);
    //display alert
    displayAlert("dodano do listy", "success");
    //show container
    container.classList.add("show-container");
    //add to local storage
    addToLocalStorage(id, value);
    //set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;

    const idUpdate =
      editElement.parentElement.parentElement.getAttribute("data-id");

<<<<<<< HEAD
    fetch(`https://buy-list-dzarek.herokuapp.com/api/products/${idUpdate}`, {
=======
    fetch(`http://localhost:1337/api/products/${idUpdate}`, {
>>>>>>> c36b8226c96d1662b66cb6b71caeabe224a8c27a
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          id: idUpdate,
          name: value,
          idproduct: idUpdate,
        },
      }),
    });
    displayAlert("produkt zmieniony", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  // console.log(items[0].getAttribute("data-id"));
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      fetch(
<<<<<<< HEAD
        `https://buy-list-dzarek.herokuapp.com/api/products/${item.getAttribute(
          "data-id"
        )}`,
=======
        `http://localhost:1337/api/products/${item.getAttribute("data-id")}`,
>>>>>>> c36b8226c96d1662b66cb6b71caeabe224a8c27a
        {
          method: "DELETE",
        }
      );
    });
  }
  container.classList.remove("show-container");
  displayAlert("lista wyczyszczona", "success");
  setBackToDefault();
  localStorage.removeItem("list");
}

//delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  const id = element.dataset.id;
  element.style.transform = "translateX(100vw)";
  setTimeout(() => {
    list.removeChild(element);
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }
  }, 500);
  displayAlert("usunięto z listy", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
<<<<<<< HEAD
  fetch(`https://buy-list-dzarek.herokuapp.com/api/products/${id}`, {
=======
  fetch(`http://localhost:1337/api/products/${id}`, {
>>>>>>> c36b8226c96d1662b66cb6b71caeabe224a8c27a
    method: "DELETE",
  });
}
//edit function
function editItem(e) {
  function displayAlertEdition(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
  }
  displayAlertEdition("edycja", "success");
  const element = e.currentTarget.parentElement.parentElement;
  //set edit item
  editElement = e.currentTarget.nextElementSibling;
  //set form value
  grocery.value = editElement.innerHTML;
  // console.log(editElement.innerHTML);
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "zapisz";
}

//set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "dodaj";
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value };
  let items = getLocalStorage();
  items.push(grocery);

  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItems() {
  const fetchProducts = async () => {
<<<<<<< HEAD
    const response = await fetch(
      `https://buy-list-dzarek.herokuapp.com/api/products`
    );
=======
    const response = await fetch(`${url}`);
>>>>>>> c36b8226c96d1662b66cb6b71caeabe224a8c27a
    const data = await response.json();
    // let items = getLocalStorage();
    const items = data.data.map((item) => {
      const {
        attributes: { idproduct, name },
      } = item;
      return {
        id: idproduct,
        value: name,
      };
    });

    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add("show-container");
    }
  };
  fetchProducts();
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = ` 
    <div class='ok'>
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <p class="title">${value}</p>
      </div>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    `;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  //append child
  list.appendChild(element);
}

let favoriteValue = "";

function addFavorite(e) {
  e.preventDefault();
  const value = favoriteValue;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    postProducts(id, value);
    displayAlert("dodano do listy", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  }
}

// PRODUCTS ICONS

const foodContainer = document.querySelector(".favorite-container");
const foodContainer2 = document.querySelector(".favorite2-container");
const favoriteChoose = document.querySelector(".favorite-choose");
const food = document.querySelector(".food");
const chemic = document.querySelector(".chemic");
const favoriteContainerButtons = document.querySelector(
  ".favorite-container-buttons"
);
const favoriteContainerProducts = document.querySelector(
  ".favorite-container-products"
);
const favoriteContainerButtons2 = document.querySelector(
  ".favorite-container2-buttons"
);
const favoriteContainerProducts2 = document.querySelector(
  ".favorite-container2-products"
);

food.addEventListener("click", function () {
  foodContainer.classList.remove("none");
  foodContainer2.classList.add("none");
  food.classList.add("favorite-choose-active");
  chemic.classList.remove("favorite-choose-active");
  food.style.height = "40px";
  chemic.style.height = "40px";
  food.style.backgroundImage = "none";
  chemic.style.backgroundImage = "none";
  food.style.paddingTop = 0;
  chemic.style.paddingTop = 0;
});
chemic.addEventListener("click", function () {
  foodContainer2.classList.remove("none");
  foodContainer.classList.add("none");
  food.classList.remove("favorite-choose-active");
  chemic.classList.add("favorite-choose-active");
  food.style.height = "40px";
  chemic.style.height = "40px";
  food.style.backgroundImage = "none";
  chemic.style.backgroundImage = "none";
  food.style.paddingTop = 0;
  chemic.style.paddingTop = 0;
});

const displayMenuItems = (item) => {
  favoriteContainerProducts.innerHTML = item
    .map(
      (produkt) =>
        `<img class="produkt ${produkt.category}Bgc" src=${produkt.src} alt="${produkt.alt}">`
    )
    .join("");
  const produkty = document.querySelectorAll(".produkt");
  const produktArray = [...produkty];
  produktArray.map((produkt) => {
    return produkt.addEventListener("click", (e) => {
      favoriteValue = produkt.alt;
      addFavorite(e);
    });
  });
};
const displayMenuItems2 = (item) => {
  favoriteContainerProducts2.innerHTML = item
    .map(
      (produkt) =>
        `<img class="produkt2 ${produkt.category}Bgc" src=${produkt.src} alt="${produkt.alt}">`
    )
    .join("");
  const produkty2 = document.querySelectorAll(".produkt2");
  const produktArray2 = [...produkty2];
  produktArray2.map((produkt) => {
    return produkt.addEventListener("click", (e) => {
      favoriteValue = produkt.alt;
      addFavorite(e);
    });
  });
};

const displayMenuButtons = () => {
  const allCategory = [
    "wszystko",
    ...new Set(jedzenie.map((item) => item.category)),
  ];
  const favoriteSelect = document.querySelector(".favorite-select");
  const allCategoryBtns = allCategory.map((category) => {
    return `<option class="btn-category" data-id=${category}>${category}</option>`;
  });
  favoriteSelect.innerHTML = allCategoryBtns;
  favoriteSelect.addEventListener("change", (e) => {
    const category = e.target.value;
    const menuCategory = jedzenie.filter(
      (menuItem) => menuItem.category === category
    );
    if (category === "wszystko") {
      displayMenuItems(jedzenie);
    } else {
      displayMenuItems(menuCategory);
    }
  });
};
const displayMenuButtons2 = () => {
  const allCategory2 = [
    "wszystko",
    ...new Set(chemia.map((item) => item.category)),
  ];
  const favoriteSelect2 = document.querySelector(".favorite-select2");
  const allCategoryBtns2 = allCategory2.map((category) => {
    return `<option class="btn-category" data-id=${category}>${category}</option>`;
  });
  favoriteSelect2.innerHTML = allCategoryBtns2;
  favoriteSelect2.addEventListener("change", (e) => {
    const category2 = e.target.value;
    const menuCategory2 = chemia.filter(
      (menuItem) => menuItem.category === category2
    );
    if (category2 === "wszystko") {
      displayMenuItems2(chemia);
    } else {
      displayMenuItems2(menuCategory2);
    }
  });
};
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems2(chemia);
  displayMenuItems(jedzenie);
  displayMenuButtons();
  displayMenuButtons2();
});

// VOICE
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  if (e.results[0].isFinal) {
    favoriteValue = transcript;
    addFavorite(e);
  }
});

let checkVoice = true;
submitBtn2.addEventListener("click", () => {
  if (checkVoice === true) {
    submitBtn2.classList.add("submit-btn3");
    recognition.addEventListener("end", recognition.start);
    recognition.start();
    alert.textContent = "powiedz nazwę produktu";
    alert.classList.add(`alert-info`);
    checkVoice = false;
  } else {
    alert.textContent = "nagrywanie zakończone";
    alert.classList.add(`alert-info`);
    setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`alert-info`);
    }, 3000);
    submitBtn2.classList.remove("submit-btn3");
    recognition.removeEventListener("end", recognition.start);
    recognition.stop();
    recognition.abort();
    checkVoice = true;
  }
});
