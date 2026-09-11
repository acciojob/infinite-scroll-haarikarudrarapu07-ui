//your code here!
const listContainer = document.getElementById('infi-list');

// 1. Function to add a specific number of items to the list
function addItems(count) {
    // Get the current number of items already in the list
    const currentItemCount = listContainer.children.length;
    
    for (let i = 1; i <= count; i++) {
        // Create a new list item element
        const listItem = document.createElement('li');
        
        // Calculate the next item number dynamically
        listItem.textContent = Item ${currentItemCount + i};
        
        // Append the new item to the container
        listContainer.appendChild(listItem);
    }
}

// 2. Add the initial 10 list items by default when the page loads
addItems(10);

// 3. Event listener to detect when the user scrolls near the bottom of the container
listContainer.addEventListener('scroll', () => {
    // scrollTop: how much the user has scrolled from the top
    // clientHeight: the visible height of the container
    // scrollHeight: the total height of the content inside the container
    if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight - 5) {
        // Add 2 more items automatically when the end is reached
        addItems(2);
    }
});