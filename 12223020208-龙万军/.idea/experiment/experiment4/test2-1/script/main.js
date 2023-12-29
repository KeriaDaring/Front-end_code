
for(let i = 1; i <= 5; i++) {
    for(let j = 5 - i; j > 0; j--) {
        document.write("&nbsp&nbsp");
    }
    for(let j = 2 * i - 1; j > 0; j--) {
        document.write("*");
    }
    document.write("<br>");
}