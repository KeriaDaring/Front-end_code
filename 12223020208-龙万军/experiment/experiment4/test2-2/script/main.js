let times = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 != 0) {
        document.write("&nbsp" + i);
        times++;
    }
    if (times % 10 == 0 && i % 7 != 0) {
        document.write("<br>");
    }

}