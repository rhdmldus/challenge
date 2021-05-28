// fech the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
    <li class="item">
        <span class="thumb_nail">${item.image}</span>
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}
// main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
