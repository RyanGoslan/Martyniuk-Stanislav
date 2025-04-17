
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const responseMessage = document.getElementById('responseMessage');
    const restoreBtn = document.getElementById('restoreBtn');

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Поле імені не може бути порожнім';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Поле email не може бути порожнім';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Введіть коректний email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        return isValid;
    }

    function saveToLocalStorage(data) {
        localStorage.setItem('lah', JSON.stringify(data));
    }

    function sendDataToServer(data) {
        responseMessage.textContent = 'Відправка даних...';
        responseMessage.className = 'response-message loading';
        
        fetch('https://reqres.in/api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Помилка: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData => {
            responseMessage.textContent = `Успішно відправлено! Відповідь сервера: ${JSON.stringify(responseData)}`;
            responseMessage.className = 'response-message success';
            form.reset();
        })
        .catch(error => {
            responseMessage.textContent = `Помилка: ${error.message}`;
            responseMessage.className = 'response-message error';
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            const userData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim()
            };

            saveToLocalStorage(userData);

            sendDataToServer(userData);
        }
    });

    restoreBtn.addEventListener('click', function() {
        const savedData = localStorage.getItem('lah');
        
        if (savedData) {
            const userData = JSON.parse(savedData);
            nameInput.value = userData.name || '';
            emailInput.value = userData.email || '';
            responseMessage.textContent = 'Дані відновлено з кешу';
            responseMessage.className = 'response-message info';
        } else {
            responseMessage.textContent = 'У кеші немає збережених даних';
            responseMessage.className = 'response-message warning';
        }
    });
});