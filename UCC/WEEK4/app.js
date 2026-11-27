function double(n) { return n * 2; }
function greet(name) { return "Hello, " + name; }
function isLong(text) { return text.length > 20; }

const double = (n) => n * 2;
const greet = (name) => `Hello, ${name}`;
const isLong = (text) => text.length > 20;

const items = [
  { name: "Coffee sachet", price: 8 },
  { name: "Biscuit", price: 12 },
  { name: "Softdrink", price: 25 },
  { name: "Candy", price: 2 },
];

const names = items.map((item) => item.name);
const cheap = items.filter((item) => item.price < 20);
const total = items.reduce((sum, item) => sum + item.price, 0);

const notice = { id: 1, title: "Library hours", pinned: false };
const { title } = notice;                         // destructuring: pull out one field
const pinnedNotice = { ...notice, pinned: true }; // spread: copy, then override
console.log(notice, pinnedNotice);

export const notices = [
  { id: 1, title: "Library hours extended", message: "Open until 9 PM during midterm week." },
  { id: 2, title: "Enrollment reminder", message: "Last day to add or drop subjects is Friday." },
  { id: 3, title: "Programming contest", message: "Sign up at the CCS office by Monday." },
  { id: 4, title: "Wi-Fi maintenance", message: "The campus network is down Sunday morning." },
];

const list = document.querySelector("#list");

function render(items) {
  list.innerHTML = "";               // clear the old list first
  items.forEach((n) => {
    const li = document.createElement("li");
    li.textContent = `${n.title}: ${n.message}`;
    list.appendChild(li);
  });
}

render(notices);

const search = document.querySelector("#search");

search.addEventListener("input", () => {
  const text = search.value.toLowerCase();
  const matches = notices.filter((n) => n.title.toLowerCase().includes(text));
  render(matches);
});

