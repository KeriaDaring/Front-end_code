"use strict"

function askPassword(ok, fail) {
    let askPassword = prompt("Password?", '');
    if (askPassword == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    
    loginOk() {
        alert('${this.name} logged in');
    },

    loginFail() {
        alert('${this.name} failed to log in');
    },
};
askPassword(user.loginOk, user.loginFail);
//这里的askPassword参数是传递闭包，也就是把user中的函数属性给抽离出来
//作为实参进行传递，此时这两个闭包没有访问user中其他属性的权限