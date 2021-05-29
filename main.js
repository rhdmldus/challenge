// data불러오기
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}
// 아이템 뿌리기
function addItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createElement(item)).join("");
  console.log(items.map((item) => createElement(item)).join(""));
  console.log(items);
}
// 아이템생성하기
function createElement(item) {
  return `
  <li class="item">${item.face}</li>
  `;
}
// 클릭함수
function onbtnClick(event, items) {
  const dataset = event.target.dataset;
  console.log(dataset);
  const key = dataset.key;
  const value = dataset.value;
  const btns = document.querySelectorAll(".btn_wrap .btn");

  if (key == null || value == null) {
    return;
  }
  addItems(items.filter((item) => item[key] === value));
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("on");
  }
  event.target.classList.add("on");
}
// 이벤트리스너
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const btns = document.querySelector(".btn_wrap");
  const itemCopy = document.querySelector(".items");
  logo.addEventListener("click", () => addItems(items));
  btns.addEventListener("click", () => onbtnClick(event, items));
  itemCopy.addEventListener("click", () => copyText(event, items));
}

function copyText(event) {
  const imoji = event.target.innerHTML;
  const copyed = document.createElement("input");
  document.body.appendChild(copyed);
  copyed.value = imoji;
  copyed.select();
  document.execCommand("copy");
  copyed.remove();
  showMsg(event);
}
function showMsg(event) {
  const target = event.target;
  target.classList.add("copied");
  setTimeout(() => {
    target.classList.remove("copied");
  }, 500);
}
// 최종
loadItems().then((items) => {
  addItems(items);
  setEventListeners(items);
});
