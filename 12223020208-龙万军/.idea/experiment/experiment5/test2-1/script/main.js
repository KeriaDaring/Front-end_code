function Calculator() {
    this.sum = function () {return this.a + this.b;};

    this.sub = function () {return this.a - this.b;};

    this.mul = function () {return this.a * this.b;};

    this.div = function () {
        if (this.b === 0) {
            alert("被除数不能为0");
            return null;
        } else {
            return this.a / this.b;
        }
    };

    this.read = function () {
        while (this.a == null || this.b == null) {
            this.a = this.a == null ? prompt('a?', 0) : this.a;
            this.b = this.b == null ? prompt('b?', 0) : this.a;
        }

        this.a = Number.parseInt(this.a);
        this.b = Number.parseInt(this.b);
     };
}

let calculator = new Calculator();

calculator.read();
let operatorSymbol = prompt("运算符号为", "+");

switch (operatorSymbol) {
    case "+" : alert("相加结果为" + calculator.sum()); break;
    case "-" : alert("相减结果为" + calculator.sub()); break;
    case "*" : alert("相乘结果为" + calculator.mul()); break;
    case "/" : {
        if (calculator.div() != null) {
            alert("相除结果为" + calculator.div()); break;
        }
    } break;
    default:   alert("请输入正确的运算符");
}


