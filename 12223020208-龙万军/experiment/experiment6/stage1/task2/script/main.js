function selectAll() {
    const box_list = document.getElementsByName('multi_select')
    for (let i = 0; i < box_list.length; i++) {
        box_list[i].checked = true;
    }
}

function selectReverse() {
    const box_list = document.getElementsByName('multi_select');
    for (let i = 0; i < box_list.length; i++) {
        box_list[i].checked = !box_list[i].checked;
    }
}

function selectNone() {
    const box_list = document.getElementsByName('multi_select')
    for (let i = 0; i < box_list.length; i++) {
        box_list[i].checked = false;
    }
}
