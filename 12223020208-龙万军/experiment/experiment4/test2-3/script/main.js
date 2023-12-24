let array1 = ["SQL", "C# OOP"];
let array2 = ["WEB FORM", "HTML/CSS/JAVASCRIPR", "ORACLE"];
let array3 = ["ASP.NET MVC", "LINQ"];
let subject = {
    ele1: array1,
    ele2: array2,
    ele3: array3
};

let length = 0;
document.write("subject数组长度为：" + Object.keys(subject).length + "<br>");
length = 0;

for (let i in subject) {
    let value = subject[i];
    document.write("subject数组对象的第" + length + "个元素是另一个数组，\
    这个小数组的长度：" + value.length + "<br>");
    let size = 0;
    for (let item in value) {
        document.write("第" + size + "个元素：" + value[item] + "<br>");
        size++;
    }
    document.write("<hr>");
    length++;
}
