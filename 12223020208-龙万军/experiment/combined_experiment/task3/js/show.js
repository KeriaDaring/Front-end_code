const button = document.querySelector('#bu_one');

button.addEventListener('click', () => {
    const element = document.querySelector('.mini_mask');
    element.style.visibility = 'visible';
});

const button1 = document.querySelector('#bu_three');

button1.addEventListener('click', () => {
    const element = document.querySelector('.mini_mask');
    element.style.visibility = 'hidden';
});