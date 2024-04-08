document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();


        clearErrors();

        let isValid = true;

        if (!validateUsername(usernameInput.value)) {
            showError(usernameInput, 'O nome de usuário deve ter pelo menos 4 caracteres e só pode conter letras, números e underscores.');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Insira um email válido.');
            isValid = false;
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Senha deve conter no mínimo 6 caracteres, uma letra maíscula, uma minúscula e um número.');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function validateUsername(username) {
        return /^[a-zA-Z0-9_]+$/.test(username) && username.length >= 4;
    }
    

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
    }
    

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.innerText = '';
            error.style.display = 'none';
        });
    }
});
