
import { notices } from "./notices.js";

// ===================================
// STEP 5: WARM-UP - ARROW FUNCTIONS
// ===================================

const double = (n) => n * 2;

const greet = (name) => `Hello, ${name}`;

const isLong = (text) => text.length > 20;

// Test arrow functions
console.log("STEP 5: ARROW FUNCTIONS");

console.log(double(4));       // 8
console.log(greet("Ana"));    // Hello, Ana
console.log(isLong("short")); // false

document.getElementById("arrow-output").innerHTML =
    `double(4): ${double(4)}<br>
     greet("Ana"): ${greet("Ana")}<br>
     isLong("short"): ${isLong("short")}`;


// ===================================
// STEP 6: ARRAY METHODS
// ===================================

const items = [
    { name: "Coffee sachet", price: 8 },
    { name: "Biscuit", price: 12 },
    { name: "Softdrink", price: 25 },
    { name: "Candy", price: 2 },
];

// MAP: Get the names of all items
const names = items.map((item) => item.name);

// FILTER: Get items under PHP 20
const cheap = items.filter((item) => item.price < 20);

// REDUCE: Calculate the total price
const total = items.reduce(
    (sum, item) => sum + item.price, 0
);

console.log("STEP 6: ARRAY METHODS");

console.log(names);
console.log(cheap);
console.log(total);

// Display array method results
document.getElementById("names-output").textContent =
    "Names: " + JSON.stringify(names);

document.getElementById("cheap-output").textContent =
    "Items under PHP 20: " +
    JSON.stringify(cheap.map((item) => item.name));

document.getElementById("total-output").textContent =
    "Total price: PHP " + total;


// ===================================
// STEP 7: DESTRUCTURING AND SPREAD
// ===================================

const notice = {
    id: 1,
    title: "Library hours",
    pinned: false
};

// DESTRUCTURING: Extract title
const { title } = notice;

// SPREAD: Copy object and change pinned
const pinnedNotice = {
    ...notice,
    pinned: true
};

console.log("STEP 7: DESTRUCTURING AND SPREAD");

console.log("Original:", notice);
console.log("Updated:", pinnedNotice);

document.getElementById("notice-output").textContent =
    `Extracted title: ${title} | Original pinned: ${notice.pinned} | Updated pinned: ${pinnedNotice.pinned}`;


// ===================================
// STEP 8: MODULES
// ===================================

console.log("STEP 8: MODULES");

console.log("Imported campus notices:", notices);


// ===================================
// STEP 9: RENDER WITH THE DOM
// ===================================

const list = document.querySelector("#list");

const emptyMessage = document.querySelector("#empty-message");

function render(items) {

    list.innerHTML = "";

    items.forEach((n) => {

        const li = document.createElement("li");

        li.className = "notice";

        li.innerHTML = `
            <h3>${n.title}</h3>
            <p>${n.message}</p>
            <small>Notice ID: ${n.id}</small>
        `;

        list.appendChild(li);

    });

    emptyMessage.hidden = items.length !== 0;
}

// Display all four notices
render(notices);


// ===================================
// STEP 10: EVENTS - SEARCH AS YOU TYPE
// ===================================

const search = document.querySelector("#search");

search.addEventListener("input", () => {

    const text = search.value.toLowerCase();

    const matches = notices.filter((n) =>
        n.title.toLowerCase().includes(text)
    );

    render(matches);

});
