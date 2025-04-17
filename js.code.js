
const noteForm = document.getElementById('noteForm');
const noteIdInput = document.getElementById('noteId');
const titleInput = document.getElementById('title');
const categoryInput = document.getElementById('category');
const contentInput = document.getElementById('content');
const saveNoteBtn = document.getElementById('saveNoteBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const searchBtn = document.getElementById('searchBtn');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const clearAllNotesBtn = document.getElementById('clearAllNotesBtn');
const notesContainer = document.getElementById('notesContainer');

class NoteManager {
    constructor() {
        this.notes = [];
        this.loadNotes();
        this.displayNotes();
        this.updateCategoryFilter();
    }

    loadNotes() {
        const savedNotes = localStorage.getItem('notes');
        this.notes = savedNotes ? JSON.parse(savedNotes) : [];
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    addNote(title, category, content) {
        const newNote = {
            id: Date.now().toString(),
            title,
            category,
            content,
            createdAt: new Date().toISOString()
        };
        this.notes.push(newNote);
        this.saveNotes();
        this.displayNotes();
        this.updateCategoryFilter();
    }

    editNote(id, title, category, content) {
        const noteIndex = this.notes.findIndex(note => note.id === id);
        if (noteIndex !== -1) {
            this.notes[noteIndex] = {
                ...this.notes[noteIndex],
                title,
                category,
                content,
                updatedAt: new Date().toISOString()
            };
            this.saveNotes();
            this.displayNotes();
            this.updateCategoryFilter();
        }
    }

    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
        this.displayNotes();
        this.updateCategoryFilter();
    }

    clearAllNotes() {
        if (confirm('Ви впевнені, що хочете видалити всі нотатки?')) {
            this.notes = [];
            this.saveNotes();
            this.displayNotes();
            this.updateCategoryFilter();
        }
    }

    getNote(id) {
        return this.notes.find(note => note.id === id);
    }

    filterNotes(keyword, category) {
        let filteredNotes = this.notes;
        
        if (keyword) {
            const lowercaseKeyword = keyword.toLowerCase();
            filteredNotes = filteredNotes.filter(note => 
                note.title.toLowerCase().includes(lowercaseKeyword) || 
                note.content.toLowerCase().includes(lowercaseKeyword)
            );
        }
        
        if (category) {
            filteredNotes = filteredNotes.filter(note => 
                note.category.toLowerCase() === category.toLowerCase()
            );
        }
        
        return filteredNotes;
    }

    displayNotes(notesToDisplay = null) {
        const notes = notesToDisplay || this.notes;
        notesContainer.innerHTML = '';
        
        if (notes.length === 0) {
            notesContainer.innerHTML = '<div>Немає нотаток для відображення</div>';
            return;
        }
        
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.innerHTML = `
                <div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc;">
                    <h3>${note.title}</h3>
                    <div><strong>Категорія:</strong> ${note.category}</div>
                    <div>${note.content.replace(/\n/g, '<br>')}</div>
                    <div style="margin-top: 10px;">
                        <button class="edit-btn" data-id="${note.id}">Редагувати</button>
                        <button class="delete-btn" data-id="${note.id}">Видалити</button>
                    </div>
                </div>
            `;
            
            const editBtn = noteElement.querySelector('.edit-btn');
            const deleteBtn = noteElement.querySelector('.delete-btn');
            
            editBtn.addEventListener('click', () => {
                this.startEditing(note.id);
            });
            
            deleteBtn.addEventListener('click', () => {
                this.deleteNote(note.id);
            });
            
            notesContainer.appendChild(noteElement);
        });
    }

    startEditing(id) {
        const note = this.getNote(id);
        if (note) {
            noteIdInput.value = note.id;
            titleInput.value = note.title;
            categoryInput.value = note.category;
            contentInput.value = note.content;
            saveNoteBtn.textContent = 'Оновити нотатку';
            cancelEditBtn.style.display = 'inline-block';
            window.scrollTo(0, 0);
        }
    }

    cancelEditing() {
        noteForm.reset();
        noteIdInput.value = '';
        saveNoteBtn.textContent = 'Зберегти нотатку';
        cancelEditBtn.style.display = 'none';
    }

    searchNotes() {
        const keyword = searchInput.value.trim();
        const category = categoryFilter.value;
        const filteredNotes = this.filterNotes(keyword, category);
        this.displayNotes(filteredNotes);
    }

    resetSearch() {
        searchInput.value = '';
        categoryFilter.value = '';
        this.displayNotes();
    }

    updateCategoryFilter() {
        const categories = [...new Set(this.notes.map(note => note.category))];
        
        const currentValue = categoryFilter.value;
        
        categoryFilter.innerHTML = '<option value="">Всі категорії</option>';
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
        
        if (categories.includes(currentValue)) {
            categoryFilter.value = currentValue;
        }
    }
}

const noteManager = new NoteManager();
noteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = titleInput.value.trim();
    const category = categoryInput.value.trim();
    const content = contentInput.value.trim();
    const noteId = noteIdInput.value;
    
    if (noteId) {
        noteManager.editNote(noteId, title, category, content);
        noteManager.cancelEditing();
    } else {
        noteManager.addNote(title, category, content);
        noteForm.reset();
    }
});

cancelEditBtn.addEventListener('click', function() {
    noteManager.cancelEditing();
});

searchBtn.addEventListener('click', function() {
    noteManager.searchNotes();
});

resetSearchBtn.addEventListener('click', function() {
    noteManager.resetSearch();
});

clearAllNotesBtn.addEventListener('click', function() {
    noteManager.clearAllNotes();
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        noteManager.searchNotes();
    }
});

categoryFilter.addEventListener('change', function() {
    noteManager.searchNotes();
});