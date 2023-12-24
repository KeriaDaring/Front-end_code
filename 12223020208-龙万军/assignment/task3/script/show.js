class ProcessPart {
    pages = 1;
    currentPage = 1;
    elem = [];

    //让elem中的元素预备渐出
    keepStage() {
        $(this.elem).each(function () {
            $(this).css('display', 'none');
        })
    }

    //换页 or 界面刷新
    swicthPage(page, num) {
        if (page < 1 && num !== 0) {
            alert("到顶了骚年");
            return;
        }
        if (page > this.pages && num !== 0) {
            alert("已抵达最后一页");
            return;
        }
        let table = $("table");

        //表头
        $(table).html("<tr class=\"no\" style=\"height: 60px; font-weight: 900;background-color: #dadee1\">\n" +
            "                    <td><label for=\"selectAll\"></label><input id=\"selectAll\" type=\"checkbox\"></td>\n" +
            "                    <td>序号</td>\n" +
            "                    <td>学号</td>\n" +
            "                    <td>姓名</td>\n" +
            "                    <td>学院</td>\n" +
            "                    <td>专业</td>\n" +
            "                    <td>年级</td>\n" +
            "                    <td>班级</td>\n" +
            "                    <td>年龄</td>\n" +
            "                    <td>操作</td>\n" +
            "                </tr>")

        this.pages = Math.ceil((this.elem.length + 1) / 10);
        this.currentPage = page;

        //选取十个进行展示
        if (this.elem[(page - 1) * 10] === undefined) {
            this.swicthPage(page - 1, 0);
            return;
        }

        for (let i = (page - 1) * 10; i <= page * 10 - 1; i++) {
            let tr = this.elem[i];
            if (tr === undefined) {
                break;
            }
            $(tr).find('.num').text(i + 1);
            table.append(tr);
        }


        //checkbox 事件逻辑
        $('#selectAll').click(function () {
            if ($(this).prop('checked')) {
                $("input[name=\"select\"]").prop('checked', true);
                return;
            }
            $("input[name=\"select\"]").prop('checked', false);
        })
        clearCheck();
        $("#msg").text(`第${page}页，共${this.elem.length}条，(每页显示10条)`)
    }

    //渐出
    fadeAllin() {
        let time = 600;
        $("table tr").each(function () {
            $(this).fadeIn(time);
            time += 200;
        })
    }

    addUser(user) {
        //构建一个行
        let td_check = document.createElement("td");
        td_check.className = 'no';
        td_check.innerHTML = "<label><input name=\"select\" type=\"checkbox\"></label>";


        let td_begin = document.createElement("td");
        td_begin.innerHTML = "<td>1</td>";
        td_begin.className = 'num no';


        let td_end = document.createElement("td");
        td_end.innerHTML = "<td><div style=\"display: inline;\"><span class=\"text look\">查看</span> " +
            "<span  class=\"text modify\">修改</span></div></td>";
        td_end.className = 'no';

        let tr = document.createElement('tr');
        tr.append(td_check)
        tr.append(td_begin)

        for (let data of user) {
            let td = document.createElement('td');
            td.innerText = data;
            tr.append(td);
        }
        tr.append(td_end);

        this.elem.push(tr);
        this.pages = Math.ceil((this.elem.length + 1) / 10);
        this.swicthPage(this.currentPage, 0);
        return true;
    }

    removeUser(index) {
        this.elem.splice(index, 1);
    }
}

//查看 修改 check 按钮事件委托
function setListener() {
    $('table')
        .click(function (e) {
            let tr = e.target.closest('tr')

            $(tr).find('.look').click(function () {

                let list = [];
                $(tr).find('td').each(function () {
                    list.push($(this).text());
                })
                list.splice(0, 2);
                list.pop();

                $("#mini_nav").text("查看学生信息");
                $(".in")
                    .attr('disabled', 'disabled')
                    .css("background-color", '#ebebe4')
                    .css('cursor', 'inherit')
                    .each(function (index, elem) {
                        $(elem).attr("placeholder", `${list[index]}`);
                    });
                $("#bu_four").hide();

                pane.show();
            })

            $(tr).find('.modify').click(function () {
                stage = 0;
                let list = [];
                target = $(tr).find('td')
                target_first = $(tr).find('td:first');
                target_last = $(tr).find('td:last');
                $(target).each(function () {
                    list.push($(this).text());
                })
                a = list.splice(0, 2);
                b = list.slice(-1);

                $("#mini_nav").text("修改学生信息");
                $(".in")
                    .each(function (index, elem) {
                        $(elem).val(`${list[index]}`);
                    });


                $("#bu_four").show().val("保存");
                $("#bu_four").css("color", "white");

                pane.show();
            })

            $(".in").blur(function (e) { 
                if (check()) {
                    $("#bu_four").css("color", "white");
                } else {
                    $("#bu_four").css("color", "grey");
                }
            });



            $('input[name=\"select\"]')
                .click(function () {
                    let checkBox = document.querySelectorAll('input[name=\"select\"]:checked');
                    let checkBox_wait = document.querySelectorAll('input[type=\"checkbox\"]');
                    if (checkBox.length === checkBox_wait.length - 1) {
                        $("#selectAll").prop("checked", true);
                    } else {
                        $("#selectAll").prop("checked", false);
                    }
                })

            $('#selectAll')
                .click(function () {
                    if ($(this).prop('checked')) {
                        $("input[name=\"select\"]").prop('checked', true);
                        return;
                    }
                    $("input[name=\"select\"]").prop('checked', false);
                })

        })
}



//控制按钮事件委托
$('html .control').click(function (e) {
    button = e.target.closest('input[type="button"]');
    let id = $(button).attr('id');

    switch (id) {
        case 'bu_one': {
            $("#mini_nav").text("新增学生信息");
            clearInput();
            pane.show();
            break;
        }
        case 'bu_two': {
            $("input[name=\"select\"]:checked").each(function () {
                let target = $(this).closest('tr')
                target.fadeOut(500);

                handler
                    .removeUser(
                        target
                            .find('td .num').text());

                setTimeout(remove, 3000);

                function remove() {
                    setTimeout(handler.fadeAllin, 2000);
                    handler.swicthPage(handler.currentPage, 0);
                    handler.keepStage();
                }
            });
            break;
        }
        case 'bu_three':
            clearInput()
            pane.hide();
            break;
        case 'bu_four':
            if (stage) {
                check_all();
            } else {
                modify();
            }
            break;
        case 'bu_five':
            handler.keepStage();
            handler.swicthPage(handler.currentPage - 1, 1);
            handler.fadeAllin();
            break;
        case 'bu_six':
            handler.keepStage();
            handler.swicthPage(handler.currentPage + 1, 1);
            handler.fadeAllin();
            break;
    }
})


function checkNum(listElement) {
    let pattern = new RegExp("^\\d{11}$")
    return pattern.test(listElement);
}


function checkName(listElement) {
    return /[\u4E00-\u9FA5]+/g.test(listElement)
}

function checkDepart(listElement) {
    let list = ['计算机科学与工程学院', '会计学院', '理学院', '两江人工智能学院']
    return checkName(listElement) && list.indexOf(listElement) > -1;
}


//将小窗恢复到初始状态
function clearInput() {
    $('.in')
        .val("")
        .css('background-color', "white")
        .attr('placeholder', "")
        .removeAttr('disabled')
    $('#bu_four').show().val("提交");
}
function clearCheck() {
    $("input[name=\"select\"]").prop('checked', false);
}

function checkMajor(listElement) {
    let majors = ["软件工程", "会计学", "数学", "化学", "人工智能", "大数据科学与技术"]
    return checkName(listElement) && majors.indexOf(listElement) > -1;
}

function checkGrade(listElement) {
    let pattern = new RegExp("([0-9]{4})");
    return pattern.test(listElement);
}

function checkCourse(listElement) {
    let pattern = new RegExp("([1-4]{1})");
    return pattern.test(listElement);
}

function checkAge(listElement) {
    let pattern = new RegExp("([0-9]{2})");
    return pattern.test(listElement) && parseInt(listElement) > 0;
}

function modify() {
    list = [];
    $(".in").each(function () {
        // alert($(this).val());
        list.push($(this).val());
    })
    if (check()) {
        list = [...a, ...list, ...b];
        $(target).each(function () {
            let text = list.shift();
            $(this).text(text);
        })
        $(target_first).html("<label><input name=\"select\" type=\"checkbox\"></label>");
        $(target_last).html("<div style=\"display: inline;\"><span  class=\"text look\">查看</span> <span  class=\"text modify\">修改</span></div>")
        alert("操作成功")
        stage = 1;
        pane.hide();
        return;
    }
    alert("操作失败");
}

function check() {
    let list = [];
    $(".in").each(function () {
        list.push($(this).val());
    })
    // for (let i of list) {
    //     alert(i);
    // }
    //检查链
    return checkNum(list[0]) &&
        checkName(list[1]) &&
        checkDepart(list[2]) &&
        checkMajor(list[3]) &&
        checkGrade(list[4]) &&
        checkCourse(list[5]) &&
        checkAge(list[6]);
}

function check_all() {
    let list = [];
    $(".in").each(function () {
        list.push($(this).val());
    })
    //检查链
    checkNum(list[0]) &&
        checkName(list[1]) &&
        checkDepart(list[2]) &&
        checkMajor(list[3]) &&
        checkGrade(list[4]) &&
        checkCourse(list[5]) &&
        checkAge(list[6]) ? handler.addUser(list) && alert("操作成功") && pane.hide() : alert("输入信息不符合要求");
}


//初始化代码

let pane = $(".mini_mask");
stage = 1;
pane.hide();
pane.css("visibility", 'visible');
let handler = new ProcessPart();


// let test_data1 = [123425, 2, 3, 4, 5, 6, 7]
// let test_data2 = [-132526, 1, 3, 4, 5, 6, 7]
// handler.addUser(test_data1)
let data = [["11503080201", "张三", "计算机科学与工程学院", "软件工程", "2015", "2", "21"],
["11502070102", "李四", "会计学院", "会计学", "2015", "1", "19"],
["11506080403", "王二麻子", "理学院", "数学", "2015", "4", "20"],
["11503080201", "张三", "计算机科学与工程学院", "软件工程", "2015", "2", "21"],
["11502070102", "李四", "会计学院", "会计学", "2015", "1", "19"],
["11506080403", "王二麻子", "理学院", "数学", "2015", "4", "20"],
["11503080201", "张三", "计算机科学与工程学院", "软件工程", "2015", "2", "21"],
["11502070102", "李四", "会计学院", "会计学", "2015", "1", "19"],
["11506080403", "王二麻子", "理学院", "数学", "2015", "4", "20"],
["11503080201", "张三", "计算机科学与工程学院", "软件工程", "2015", "2", "21"],
["12223020208", "龙万军", "两江人工智能学院", "软件工程", "2022", "2", "18"]];

let b = document.createElement("td");

for (let i of data) {
    handler.addUser(i);
}
$('#selectAll').prop('checked', true);
handler.swicthPage(handler.currentPage, 0);
handler.keepStage();
handler.fadeAllin();
setListener();


function test() {
    let list = ["11503080201", "张三",
        "计算机科学与工程学院", "软件工程", "2022", "2", "18"];
    checkNum(list[0]) &&
        checkName(list[1]) &&
        checkDepart(list[2]) &&
        checkMajor(list[3]) &&
        checkGrade(list[4]) &&
        checkCourse(list[5]) &&
        checkAge(list[6]) ? handler.addUser(list) && !alert("操作成功") && pane.hide() : alert("输入信息不符合要求");
}

