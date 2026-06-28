const toggleButton = document.getElementById('toggleMode');
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

// ── ORDER FORM VALIDATION ──
function validateOrder() {
    let valid = true;

    const name = document.getElementById('orderName').value.trim();
    const email = document.getElementById('orderEmail').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const item = document.getElementById('orderItem').value;
    const qty = document.getElementById('orderQty').value;
    const address = document.getElementById('orderAddress').value.trim();
    const date = document.getElementById('orderDate').value;

    //Hide all errors first
    document.getElementById('orderNameError').classList.add('d-none');
    document.getElementById('orderEmailError').classList.add('d-none');
    document.getElementById('orderPhoneError').classList.add('d-none');
    document.getElementById('orderItemError').classList.add('d-none');
    document.getElementById('orderQtyError').classList.add('d-none');
    document.getElementById('orderAddressError').classList.add('d-none');
    document.getElementById('orderDateError').classList.add('d-none');

     if (name === '') { document.getElementById('orderNameError').classList.remove('d-none'); valid = false; }
    if (email === '' || !email.includes('@')) { document.getElementById('orderEmailError').classList.remove('d-none'); valid = false; }
    if (phone === '') { document.getElementById('orderPhoneError').classList.remove('d-none'); valid = false; }
    if (item === '') { document.getElementById('orderItemError').classList.remove('d-none'); valid = false; }
    if (qty === '' || qty < 1) { document.getElementById('orderQtyError').classList.remove('d-none'); valid = false; }
    if (address === '') { document.getElementById('orderAddressError').classList.remove('d-none'); valid = false; }
    if (date === '') { document.getElementById('orderDateError').classList.remove('d-none'); valid = false; }

    if (valid) {
        document.getElementById('orderSuccess').classList.remove('d-none');
    }
}