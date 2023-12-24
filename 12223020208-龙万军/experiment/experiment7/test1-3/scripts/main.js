let qq = "235226236"
let result;

result = (new RegExp("^[0-9]*$")).test(qq);
window.alert("使用正则表达式兑现RegExp检测qq号码是否全部为数字，结果为：" + result);