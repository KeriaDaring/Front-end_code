function setCurrent(index) {
    for (let i = 1; i <= 8; i++) {
        if (index == i) {
            document.getElementById('slide_' + i).className = 'current';
            document.getElementById('tab_' + i).style.display = 'block';
        } else {
            document.getElementById('slide_' + i).className = '';
            document.getElementById('tab_' + i).style.display = 'none';
        }
    }
}