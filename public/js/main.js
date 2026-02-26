var form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var firstNameInput = document.querySelector('input[name="firstName"]');
        var lastNameInput = document.querySelector('input[name="lastName"]');
        var emailInput = document.querySelector('input[name="email"]');
        var commentsInput = document.querySelector('textarea[name="comments"]');

        var oldErrors = document.querySelectorAll('.error-msg');
        for (var i = 0; i < oldErrors.length; i++) {
            oldErrors[i].remove();
        }

        var hasError = false;

        if (firstNameInput.value === '') {
            showError(firstNameInput, 'First name is required');
            hasError = true;
        }

        if (lastNameInput.value === '') {
            showError(lastNameInput, 'Last name is required');
            hasError = true;
        }

        if (emailInput.value === '') {
            showError(emailInput, 'Email is required');
            hasError = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            hasError = true;
        }

        if (commentsInput.value === '') {
            showError(commentsInput, 'Comments are required');
            hasError = true;
        }

        if (hasError === false) {
            this.submit();
        }
    });
}

var hamburgerBtn = document.getElementById('hamburger-btn');
if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
        var navLinks = document.getElementById('nav-links');
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        } else {
            navLinks.classList.add('open');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
        }
    });
}

function showError(input, message) {
    var error = document.createElement('p');
    error.textContent = message;
    error.className = 'error-msg';
    error.style.color = 'red';
    error.style.fontSize = '0.85rem';
    error.style.marginTop = '4px';
    input.parentNode.insertBefore(error, input.nextSibling);
}