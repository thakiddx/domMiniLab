const firstHeading = document.querySelector('h1');
firstHeading.textContent = 'Some text';


const buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', function() {
    firstHeading.style.display = 'none';
});

const buttonClick2 = document.querySelector('#unhide');
buttonClick2.addEventListener('click', function() {
    firstHeading.style.display = 'block';
});