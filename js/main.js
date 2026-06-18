const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        toggleButton.textContent =  'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});