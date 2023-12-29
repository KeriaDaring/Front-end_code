let Person = {
}
let id = Symbol("Id");
Person.id = id;
Person.name = "";
let c = {
    major: "",
    classNumber: "",
}
Person.class = c;

Person.study = function() {
    alert("正在学习");
    console.log("${this.name},${this.class}");
}


