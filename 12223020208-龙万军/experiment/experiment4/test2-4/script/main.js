let current_date = new Date();
let day = "hello"

switch (current_date.getDay()) {
    case 0: day = "星期一"; break;
    case 1: day = "星期二"; break;
    case 2: day = "星期三"; break;
    case 3: day = "星期四"; break;
    case 4: day = "星期五"; break;
    case 5: day = "星期六"; break;
    case 6: day = "星期天"; break;

}
document.write("今天日期是：" + current_date.getFullYear() + 
                "年" + current_date.getMonth() + "月" + current_date.getDate() +
                "日&nbsp&nbsp" + day + "&nbsp&nbsp现在时间是：" + current_date.getHours()
                + "时" + current_date.getMinutes() + "分" + current_date.getSeconds() + "秒");