const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        toggleButton.textContent =  'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});


// ── CONTACT FORM VALIDATION ──
function validateForm() {
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    //Hide all errors first
    document.getElementById('nameError').classList.add('d-none');
    document.getElementById('emailError').classList.add('d-none');
    document.getElementById('messageError').classList.add('d-none');

    //Check name
    if (name === '') {
        document.getElementById('nameError').classList.remove('d-none');
        valid = false;
    }

    //Check email
    if (email === '') {
        document.getElementById('emailError').classList.remove('d-none');
        valid = false;
    }

    //Check message
    if (message === '') {
        document.getElementById('messageError').classList.remove('d-none');
        valid = false;
    }

    //If all fields are valid, show success message
    if (valid) {
        document.getElementById('successMessage').classList.remove('d-none');
    }
}
