




let selected_target;
let className;

const table = document.getElementById('square');


table.onclick = function(event) {
    let td = event.target.closest('td');

    if (!td) return;
    if (!table.contains(td)) return;


    highlight(td);
};


function highlight(target) {

    if (selected_target)  {
        selected_target.classList.remove('highlight');
    }
    
    selected_target = target;
    target.classList.add('highlight');

}



// let color_list = ['#999999', '#0033ff', '#ffff67', '#ffff00', '#6600ce', '#0099ff', '#996533', '#ff6501', '#00cd34' ];

// for (let i = 1; i <= 9; i++) {
//     const elem = document.querySelector('#sq_' + i);
//     elem.style.backgroundColor = color_list[i - 1];
// }

