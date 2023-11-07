



let color_list = ['#999999', '#0033ff', '#ffff67', '#ffff00', '#6600ce', '#0099ff', '#996533', '#ff6501', '#00cd34' ];

for (let i = 1; i <= 9; i++) {
    const elem = document.querySelector('#sq_' + i);
    elem.style.backgroundColor = color_list[i - 1];
}

document.querySelector('#square').addEventListener('click', (event) => {
    let target = event.target.closest('tr');
    if (target) {
        target.style.backgroundColor = 'red';
    }
    
});

