//your code here!

let list = document.getElementById("infi-list");

// Add 10 items initially
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
}

// Add 2 more items when we reach the bottom
list.addEventListener("scroll", function () {

    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {

        let currentItems = list.children.length;

        for (let i = 1; i <= 2; i++) {
            let li = document.createElement("li");
            li.innerText = "Item " + (currentItems + i);
            list.appendChild(li);
        }
    }
});