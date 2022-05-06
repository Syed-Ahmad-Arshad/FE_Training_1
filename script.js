"use-strict";
let data = [
  {
    name: "BAR B Q",
    items: [
      { name: "Tikka", price: 450 },
      { name: "Malai Boti", price: 550 },
    ],
  },
  { name: "BURGER" },
  { name: "CHINESE" },
  { name: "DRINKS" },
  { name: "FRESH JUICE" },
  { name: "ICE CREAM" },
  { name: "MEATY" },
  { name: "PIZZA" },
  { name: "SALADS" },
  { name: "SEA FOODS" },
  { name: "SOUPS" },
  { name: "SWEETS" },
];

let dataOrg = {
  "BAR B Q": [
    { name: "Tikka", price: 450 },
    { name: "Malai Boti", price: 550 },
    { name: "Sajji", price: 950 },
    { name: "Broast", price: 350 },
  ],
  BURGER: [
    { name: "Shami Burger", price: 150 },
    { name: "Simple Fillet", price: 450 },
    { name: "Beef Attack", price: 550 },
    { name: "Chicken Cheese", price: 550 },
    { name: "Tangy Jalapeno", price: 550 },
    { name: "Cheesy Mushroom", price: 550 },
    { name: "Chicken Smokey", price: 550 },
  ],
  CHINESE: [
    { name: "Shrimp Appetizer", price: 150 },
    { name: "Kung Pao Chicken", price: 450 },
    { name: "Dim Sum", price: 550 },
    { name: "Dumplings", price: 550 },
    { name: "Sushi", price: 550 },
    { name: "Peeking Roasted", price: 550 },
    { name: "Ma Po Tofu", price: 550 },
    { name: "Char Siu", price: 150 },
    { name: "Chow Mein", price: 450 },
    { name: "Fried Rice", price: 550 },
    { name: "Sichuan Pork", price: 550 },
    { name: "Xiaolongbao", price: 550 },
  ],
  DRINKS: [
    { name: "Pinacolada", price: 250 },
    { name: "Mint Attack", price: 450 },
    { name: "Rooh Afza", price: 150 },
    { name: "Sandel Wood", price: 650 },
    { name: "Mint Margarita", price: 250 },
    { name: "Diet Coke", price: 150 },
    { name: "Fresh Lime", price: 50 },
    { name: "Sunset", price: 90 },
    { name: "Lime and Berry", price: 190 },
    { name: "Pineapple Slush ", price: 155 },
  ],
  "FRESH JUICE": [
    { name: "Strawberry", price: 250 },
    { name: "Coconut Juice", price: 450 },
    { name: "Mango Necter", price: 150 },
    { name: "Red Grapes", price: 650 },
    { name: "Pineapple Necter", price: 250 },
    { name: "Orange", price: 150 },
    { name: "Apple Shapple", price: 50 },
  ],
  "ICE CREAM": [
    { name: "Chocbar", price: 250 },
    { name: "Blueberry", price: 450 },
    { name: "Tutti Frutti", price: 150 },
    { name: "Baskin's Special", price: 650 },
    { name: "Dipped Cone", price: 250 },
    { name: "Brownie Cone", price: 150 },
    { name: "Hot Chocolate", price: 50 },
    { name: "Vanilla & Brownie", price: 90 },
  ],
  MEATY: [
    { name: "Kebab", price: 250 },
    { name: "Beef Steak", price: 450 },
    { name: "Handi Special", price: 150 },
    { name: "Delhi Nehari", price: 650 },
    { name: "Bombay Biryani", price: 250 },
    { name: "Achaar Gosht", price: 150 },
    { name: "Qourma", price: 50 },
  ],
  PIZZA: [
    { name: "German Special", price: 250 },
    { name: "Fajita", price: 450 },
    { name: "Jalapeno Attack", price: 150 },
    { name: "Chicken Supreme", price: 650 },
    { name: "Salami Special", price: 250 },
    { name: "Malai Boti", price: 150 },
    { name: "Cheesy Crust", price: 50 },
    { name: "Sausage Special", price: 90 },
    { name: "All Veg Special", price: 190 },
    { name: "New Yorker", price: 155 },
    { name: "Chicken Tikka", price: 250 },
    { name: "Thin Crust", price: 450 },
    { name: "Deep Pan", price: 150 },
  ],
  SALADS: [
    { name: "Russain Salad", price: 250 },
    { name: "Simple Salad", price: 450 },
    { name: "Special Salad", price: 150 },
    { name: "Pineapple Salad", price: 650 },
    { name: "Beet Root Salad", price: 650 },
  ],
  "SEA FOODS": [
    { name: "Shrimps and Rice", price: 250 },
    { name: "Tuna", price: 450 },
    { name: "Lobster", price: 150 },
    { name: "Shrimps Dynamite", price: 650 },
    { name: "Shrimpy Noodles", price: 250 },
    { name: "Crab Cake", price: 150 },
    { name: "Oyster", price: 50 },
  ],
  SOUPS: [
    { name: "Chicken Corn", price: 250 },
    { name: "Fish Corn", price: 450 },
    { name: "Soya Attack", price: 150 },
    { name: "Brocolli Cheese", price: 650 },
    { name: "Florentine", price: 250 },
    { name: "Loaded Potato", price: 150 },
    { name: "Chicken Tottilla", price: 50 },
  ],
  SWEETS: [
    { name: "Mango Custard", price: 250 },
    { name: "Rass Gulay", price: 450 },
    { name: "Gulab Jamun", price: 150 },
    { name: "Sewian", price: 650 },
    { name: "Sheer Khurma", price: 250 },
    { name: "Pineapple Pie", price: 150 },
    { name: "Cheese Cake", price: 50 },
    { name: "Vanilla Pudding", price: 90 },
  ],
};
let list = document.getElementById("food-menu");
for (const [key, value] of Object.entries(dataOrg)) {
  let li = document.createElement("li");
  li.innerHTML =
    '<div class="wrapper"><span class="text">' +
    key +
    "</span>" +
    '<span class="arrow">></span></div>';
  list.appendChild(li);
}

let counter = document.getElementById("counter");
const count = Object.keys(dataOrg).length;
counter.innerHTML = "(" + count + ")";

let obj = document.getElementsByClassName("wrapper");
let grandTotal = 0;
var totalNumOfItems = 0;
for (let i = 0; i < obj.length; i++) {
  obj[i].onclick = function () {
    mystr = obj[i].innerText;
    mystr = mystr.slice(0, mystr.length - 2);
    foodMenu = dataOrg[mystr];
    grid = document.getElementById("food-item-container");
    grid.innerHTML = "";
    foodMenu.forEach((element) => {
      grid.innerHTML +=
        '<div class="one">' +
        '<div class="food-name">' +
        element["name"] +
        "</div>" +
        '<div class="food-price">' +
        "Rs. " +
        element["price"] +
        "</div>" +
        '<div class="btndiv"><button class="btn-black">ADD TO CART</button></div>' +
        "</div>";
    });
    var btn = document.getElementsByClassName("btn-black");
    // console.log(btn);
    let pricing = document.getElementById("pricing-container");
    let totalPrice = document.getElementById("total-price-container");
    let numOfItems = document.getElementById("btn-green");
    let btnCancel = document.getElementById("button-cancel");
    let btnProceed = document.getElementById("button-proceed");
    let noItems = document.getElementById("no-items");
    for (let a = 0; a < btn.length; a++) {
      btn[a].onclick = function () {
        totalNumOfItems++;
        numOfItems.innerHTML = totalNumOfItems;
        totalPrice.style.display = "block";
        btnCancel.style.display = "inline-block";
        btnProceed.style.display = "inline-block";
        noItems.style.display = "none";
        pricing.innerHTML +=
          '<div class="pricing-item">' +
          '<span class="food-cart-name">' +
          dataOrg[mystr][a]["name"] +
          "</span>" +
          '<div class="pricing-grid">' +
          '<div class="text-total">' +
          "Total" +
          "</div>" +
          '<div class="food-cart-price">' +
          "Rs. " +
          dataOrg[mystr][a]["price"] +
          "</div>" +
          "</div>" +
          "</div>";
        grandTotal += dataOrg[mystr][a]["price"];
        console.log(grandTotal);
        totalPrice.innerHTML =
          "Total Price" +
          '<span class="grand-total">' +
          "Rs. " +
          grandTotal +
          "</span>";
      };
    }
  };
}

let numOfItems = document.getElementById("btn-green");
let btnCancel = document.getElementById("button-cancel");
btnCancel.onclick = function () {
  let noItems = document.getElementById("no-items");
  let grid = document.getElementById("pricing-container");
  let btnProceed = document.getElementById("button-proceed");
  let totalPrice = document.getElementById("total-price-container");
  btnCancel.style.display = "none";
  btnProceed.style.display = "none";
  totalPrice.style.display = "none";
  noItems.style.display = "block";
  grid.innerHTML = "";
  grandTotal = 0;
  numOfItems.innerHTML = "-";
  totalNumOfItems = 0;
};
