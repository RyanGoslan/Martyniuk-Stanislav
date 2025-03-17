document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const sortButton = document.getElementById('sortButton');
    const itemsList = document.getElementById('itemsList');
    
    
    let items = JSON.parse(localStorage.getItem('items') || '[]');
    renderList();
    
    
    addButton.addEventListener('click', () => {
        addItem();
    });
    
    
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    });
    
    
    sortButton.addEventListener('click', () => {
        items.sort((a, b) => a.localeCompare(b, 'uk'));
        saveItems();
        renderList();
    });
    
    function addItem() {
        const newItem = itemInput.value.trim();
        if (newItem) {
            items.push(newItem);
            saveItems();
            renderList();
            itemInput.value = '';
        }
        itemInput.focus();
    }
    
    function renderList() {
        itemsList.innerHTML = '';
        
        if (items.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Список порожній. Додайте елементи вище.';
            emptyMessage.className = 'empty-list';
            itemsList.appendChild(emptyMessage);
            return;
        }
        
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
                items.splice(index, 1);
                saveItems();
                renderList();
            });
            itemsList.appendChild(li);
        });
    }
    
    function saveItems() {
        localStorage.setItem('items', JSON.stringify(items));
    }
});