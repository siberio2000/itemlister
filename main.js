var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', deleteItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item

function addItem(e) {
    e.preventDefault()

    // Get input value
    var newItem = document.getElementById('item').value;
   
    // Create new LI element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
   
}


function deleteItem(e) {
    console.log(e);
   if (e.target.classList.contains('delete')) {
       if(confirm('Delete it?')) {
         var li = e.target.parentElement;
         itemList.removeChild(li);
       }
   }
}


function filterItems(e) {
    // Convert to lowercase
    var text = e.target.value.toLowerCase();
    // Get List
    var items = itemList.getElementsByTagName('li');
    // Convert to an Array and go through it
    Array.from(items).forEach (function (item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
           item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}