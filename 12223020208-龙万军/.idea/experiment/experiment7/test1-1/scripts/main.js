function chkEmail(email) {
    return email != ""
        && email.indexOf("@") == email.lastIndexOf("@")
        && email.indexOf("@") > 0
        && email.lastIndexOf(".") > email.indexOf("@") + 1
        && email.indexOf(".") != email.indexOf("@") + 1
        && email.lastIndexOf(".") != email.length - 1;
}

let obj = {
    my_email1: "hellonihao@163.com",
    my_email2: "hellonihao@163.stu.",
    my_email3: "hellon@ihao@163.com",
    my_email4: "hellon.ihao@163.com",
    my_email5: "hellonihao@.163.com",
    my_email6: "hellonihao@163com",
}

// document.writeln(chkEmail(my_email));
// document.writeln(chkEmail(my_email2));
// document.writeln(chkEmail(my_email3));
// document.writeln(chkEmail(my_email4));
// document.writeln(chkEmail(my_email5));
// document.writeln(chkEmail(my_email6));


for (let i in obj) {
    document.writeln(i + ": "  + "key:  " + obj[i] + "&nbsp&nbsp&nbsp&nbsp" + "value:  " + chkEmail(obj[i]) + "<br>");
}