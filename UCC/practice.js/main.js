
import { notices } from "./notices.js";

// 1. ARROW FUNCTIONS

const double = (n) => n * 2;
const greet = (name) => `Hello, ${name}`;
const isLong = (text) => text.length > 20;

console.log(double(4)); 
console.log(greet("Ana"));
console.log(isLong("short"));


// 2. ARRAY METHODS

const items = [
    { name: "Coffee sachet", price: 8 },
    { name: "Biscuit", price: 12 },
    { name: "Softdrink", price: 25 },
    { name: "Candy", price: 2 },
];

const names = items.map((item) => item.name);

const cheap = items.filter((item) => item.price < 20);

const total = items.reduce(
    (sum, item) => sum + item.price, 0
);

console.log(names);
console.log(cheap);
console.log(total);


// 3. DESTRUCTURING AND SPREAD

const notice = {
    id: 1,
    title: "Library hours",
    pinned: false
};

const { title } = notice;

const pinnedNotice = {
    ...notice,
    pinned: true
};

console.log(notice, pinnedNotice);


// 4. IMPORTED NOTICES

console.log(notices);


// 5. RENDER WITH THE DOM

const list = document.querySelector("#list");
const search = document.querySelector("#search");

function render(items) {
    list.innerHTML = "";

    items.forEach((n) => {
        const li = document.createElement("li");

        li.textContent = `${n.title}: ${n.message}`;

        list.appendChild(li);
    });
}

// Display all notices initially
render(notices);


// 6. SEARCH AS YOU TYPE

search.addEventListener("input", () => {

    const text = search.value.toLowerCase();

    const matches = notices.filter((n) =>
        n.title.toLowerCase().includes(text)
    );

    render(matches);

});
