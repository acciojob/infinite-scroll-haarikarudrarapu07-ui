//your code here!
const list = document.getElementById('list');
let currentItem = 1;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${currentItem}`;
    list.appendChild(li);
    currentItem++;
  }
}

// 1. Add 25 by default
addItems(25);

// 2. When user reaches end, add more automatically
list.addEventListener('scroll', () => {
  // if scrolled to bottom ( -5px buffer )
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(10);
  }
});