function change() {
    const img = document.querySelector('#image');
    
    if (img.getAttribute('src') === './imgs/1.jpg') {
        img.setAttribute('src', './imgs/2.jpg')
    } else {
        img.setAttribute('src', './imgs/1.jpg')
    }
}

function clock() {
    const stage = document.querySelector('#stage');
    if (stage.getAttribute('src') == "./imgs/播放.png") {
        change();
    }
}

function change_stage() {
    const stage = document.querySelector('#stage');
    if (stage.getAttribute('src') == "./imgs/播放.png") {
        stage.setAttribute('src', "./imgs/暂停.png");
    } else {
        stage.setAttribute('src', "./imgs/播放.png");
    }
}

window.setInterval('clock()', 3500);