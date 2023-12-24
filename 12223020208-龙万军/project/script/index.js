

$(document).ready(
    function () {
        $(this).click(function (e) {
            let target = e.target.closest('.opt');
            if (target===null) return;
            let id = target.id;
            $(".opt").css("background-color", "transparent")
            $(".opt li").css("color", "white");



            $(target).css("background-color", "white").find("li").css("color", "black");
            // target.find("li").css("background-color", "white");


            switch (id) {
                case 'one': {
                    show1();
                    break;
                }
                case 'two': {
                    show2();
                    break;
                }
                case 'three': {
                    show3();
                    break;
                }
                case 'four': {
                    show4();
                    break
                }
                case 'five': {
                    show5();
                    break
                }
            }
        });
        $("#list_on").click(function () {
           show6();
        });
    }
);
let replace = $("#replace");
show1();
Window.onresize = function () {
    let height = document.documentElement.scrollHeight;
    let container = document.querySelector("#container");
    container.style.minHeight = height + "px";
}
$("#one").css("background-color", "white").find("li").css("color", "black")


var mySwiper = new Swiper ('.swiper', {
    // 滚动方向 horizontal/vertical
    direction: 'horizontal',
    // 是否循环播放
    autoplay: true,
    delay: 1000,
    loop: true,
    // 如果需要分页器（小圆点）
    // 是否需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplayDisableOnInteraction:false,
    // virtualTranslate : true,
})


function show1() {
    $("#show_panel").css('margin-bottom', "3%");
    $(replace).html("<div id=\"view\">\n" +
        "    <div id=\"title\">\n" +
        "        <div class=\"hr\">\n" +
        "            <span><hr></span>\n" +
        "        </div>\n" +
        "        <div class=\"spot\">\n" +
        "            <span>·</span>\n" +
        "        </div>\n" +
        "        <div id=\"middle\">\n" +
        "            <span>产品推荐</span>\n" +
        "        </div>\n" +
        "        <div class=\"spot\">\n" +
        "            <span>·</span>\n" +
        "        </div>\n" +
        "        <div class=\"hr\">\n" +
        "            <span><hr></span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "        <div class=\"row\">\n" +
        "            <div style=\"margin-right: 5%\">\n" +
        "                <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/甜甜圈.png\"></div>\n" +
        "                <div class=\"text_square\">\n" +
        "                    <div>\n" +
        "                        <div style='color: #cd7e78' class=\"mini_title\">\n" +
        "                            美味甜甜圈\n" +
        "                        </div>\n" +
        "                        <div class=\"mini_line\" style=\"margin: 0 35%\">\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid #cd7e78;'></span>\n" +
        "                            </div>\n" +
        "                            <div style='color: #cd7e78' class=\"mini_spot\">\n" +
        "                                <span>·</span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid #cd7e78;'></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"intro_one\">\n" +
        "                        <p>\n" +
        "                            甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软 ,外形精致…\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/泡芙.png\"></div>\n" +
        "                <div class=\"text_square\">\n" +
        "                    <div class=\"all_title\">\n" +
        "                        <div style='color: limegreen' class=\"mini_title\">\n" +
        "                            闪电泡芙\n" +
        "                        </div>\n" +
        "                        <div class=\"mini_line\" style=\"margin: 0 34%\">\n" +
        "                            <div  class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid limegreen;'></span>\n" +
        "                            </div>\n" +
        "                            <div style='color: limegreen' class=\"mini_spot\">\n" +
        "                                <span>·</span>\n" +
        "                            </div>\n" +
        "                            <div style='color: limegreen' class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid limegreen;'></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"intro_one\">\n" +
        "                        <p>\n" +
        "                            甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软 ,外形精致…\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div style=\"margin-left: 5%\">\n" +
        "                <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/卡布奇诺.png\"></div>\n" +
        "                <div class=\"text_square\">\n" +
        "                    <div>\n" +
        "                        <div class=\"mini_title\">\n" +
        "                            卡布奇诺\n" +
        "                        </div>\n" +
        "                        <div class=\"mini_line\" style=\"margin: 0 35%\">\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr></span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_spot\">\n" +
        "                                <span>·</span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"intro_one\">\n" +
        "                        <p>\n" +
        "                            甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软 ,外形精致…\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"row\">\n" +
        "            <div style=\"margin-right: 5%\">\n" +
        "                <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/起酥圈.png\"></div>\n" +
        "                <div class=\"text_square\">\n" +
        "                    <div>\n" +
        "                        <div class=\"mini_title\">\n" +
        "                            起酥圈\n" +
        "                        </div>\n" +
        "                        <div class=\"mini_line\" style=\"margin: 0 41%\">\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr></span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_spot\">\n" +
        "                                <span>·</span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"intro_one\">\n" +
        "                        <p>\n" +
        "                            甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软 ,外形精致…\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/马卡龙.png\"></div>\n" +
        "                <div class=\"text_square\">\n" +
        "                    <div>\n" +
        "                        <div style='color: #cd7e78' class=\"mini_title\">\n" +
        "                            马卡龙\n" +
        "                        </div>\n" +
        "                        <div class=\"mini_line\" style=\"margin: 0 41%\">\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid #cd7e78;'></span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_spot\">\n" +
        "                                <span style='color: #cd7e78'>·</span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid #cd7e78;'></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"intro_one\">\n" +
        "                        <p>\n" +
        "                            甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软 ,外形精致…\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div style=\"margin-left: 5%\">\n" +
        "                <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/曲奇饼.png\"></div>\n" +
        "                <div class=\"text_square\">\n" +
        "                    <div>\n" +
        "                        <div style='color: limegreen' class=\"mini_title\">\n" +
        "                            手工曲奇饼\n" +
        "                        </div>\n" +
        "                        <div class=\"mini_line\" style=\"margin: 0 35%\">\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid limegreen;'></span>\n" +
        "                            </div>\n" +
        "                            <div style='color: limegreen' class=\"mini_spot\">\n" +
        "                                <span>·</span>\n" +
        "                            </div>\n" +
        "                            <div class=\"mini_hr\">\n" +
        "                                <span><hr style='border: 0.3px solid limegreen;'></span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"intro_one\">\n" +
        "                        <p>\n" +
        "                            甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软 ,外形精致…\n" +
        "                        </p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>")
    // $("#content").css("height", "calc(110vw)")
}

function show2() {
    $("#show_panel").css('margin-bottom', "3%");
    $(replace).html("<div class=\"view\">\n" +
        "        <div style=\"padding: 0 40%; margin-top: 1%\">\n" +
        "            <div class=\"title_two\">\n" +
        "                <div>\n" +
        "                    全部产品\n" +
        "                </div>\n" +
        "                <div>\n" +
        "                    <div style=\"color: dodgerblue\">\n" +
        "                        百滋百特\n" +
        "                    </div>\n" +
        "                    <div style=\"height: 14px\"><img id=\"triangle\" src=\"../imgs/triangle.png\"></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "        <div id=\"food_nav\" style=\"margin-bottom: 3.0%\">\n" +
        "            <div style=\"color: #ff8d59; padding-left: 10px\">美味甜甜圈</div>\n" +
        "            <div>芝士蛋糕</div>\n" +
        "            <div>闪电泡芙</div>\n" +
        "            <div>慕斯甜甜圈</div>\n" +
        "            <div>软欧圈</div>\n" +
        "            <div>麦芬圈</div>\n" +
        "            <div>起酥圈</div>\n" +
        "            <div>常规蛋糕</div>\n" +
        "            <div>果汁茶饮</div>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <div class=\"row_sec\">\n" +
        "                <div style=\"margin-right: 5%\">\n" +
        "                    <div id=\"hover_show\" style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/甜甜圈.png\"></div>\n" +
        "                    <div id=\"intro_sec\">\n" +
        "                        <div style=\"text-align: center; color: #ff8d59;\">\n" +
        "                            <h2>美味甜甜圈</h2>\n" +
        "                        </div>\n" +
        "                        <div class=\"intro_sec\">\n" +
        "                            <p>\n" +
        "                                甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致。甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致\n" +
        "                            </p>\n" +
        "                            <p>\n" +
        "                                甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致。甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致…甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致。甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致⋯\n" +
        "                            </p>\n" +
        "                            <p>\n" +
        "                                甜甜圈，百滋百特秘制配方，纯手工制作，每一个圈都堪称经典。低糖低油，口感松软，外形精致。\n" +
        "                            </p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div>\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/泡芙.png\"></div>\n" +
        "                </div>\n" +
        "                <div style=\"margin-left: 5%\">\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/卡布奇诺.png\"></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"row_sec\">\n" +
        "                <div style=\"margin-right: 5%\">\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/起酥圈.png\"></div>\n" +
        "                </div>\n" +
        "                <div>\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/马卡龙.png\"></div>\n" +
        "                </div>\n" +
        "                <div style=\"margin-left: 5%\">\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/曲奇饼.png\"></div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"row_sec\" style=\"margin-bottom: 0\">\n" +
        "                <div style=\"margin-right: 5%\">\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/起酥圈.png\"></div>\n" +
        "                </div>\n" +
        "                <div>\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/马卡龙.png\"></div>\n" +
        "                </div>\n" +
        "                <div style=\"margin-left: 5%\">\n" +
        "                    <div style=\"text-align: center\"><img width=\"100%\" src=\"../imgs/food/曲奇饼.png\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    </div>");
    // $("#content").css("min-height", "20rem")
}

function show3() {
    $("#show_panel").css('margin-bottom', "3%");
    $(replace).html("<div style=\"text-align: center;margin-top='80%'\">\n" +
        "        <img width=40%' src=\"../imgs/敬请期待.png\">\n" +
        "    </div>")
    // $("#content").css("min-height", "16rem")
}

function show4() {
    $(replace).html("<div id=\"col_forth\">\n" +
        "    <div class=\"row_thr\">\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/left_tangle_row.png\">\n" +
        "        </div>\n" +
        "        <div class=\"intro_thr\">\n" +
        "            <p>\n" +
        "                百滋百特秘制配方，纯手工制作，每一个圈堪称经典；低糖低油，口感松软，外形精致。\n" +
        "            </p>\n" +
        "            <p>\n" +
        "                精选进口食材，不含防腐剂，纯手工制作，超级酥脆，入口即化的美妙口感。\n" +
        "            </p>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/配送1.png\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"row_thr\">\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/配送2.png\">\n" +
        "        </div>\n" +
        "        <div class=\"intro_thr\">\n" +
        "            <p>\n" +
        "                我们手牵手，用热饮架起彼此之间的友谊桥梁，用真诚交换不 同世界的美丽视野，用真心打造人脉资源最灿烂的舞台。\n" +
        "            </p>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/right_tangle_row.png\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"row_thr\">\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/left_tangle_row.png\">\n" +
        "        </div>\n" +
        "        <div class=\"intro_thr\">\n" +
        "            <p>\n" +
        "                我们手牵手，用热饮架起彼此之间的友谊桥梁，用真诚交换不 同世界的美丽视野，用真心打造人脉资源最灿烂的舞台。\n" +
        "            </p>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/配送3.png\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"row_thr\">\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/配送4.png\">\n" +
        "        </div>\n" +
        "        <div class=\"intro_thr\">\n" +
        "            <p>\n" +
        "                清晨，一杯浓浓的咖啡，一块酥软的曲奇饼，立刻驱散了我们 朦胧的睡意，美好的一天就此开始。\n" +
        "            </p>\n" +
        "        </div>\n" +
        "        <div>\n" +
        "            <img src=\"../imgs/right_tangle_row.png\">\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>")
    $("#show_panel").css('margin-bottom', 0);
    // $("#content").css("height", "calc(140vw)")
}
function show5() {
    $(replace).html(" \n" +
        "    <div id=\"col_fifth\">\n" +
        "        <div class=\"grid\" id=\"p_left\">\n" +
        "            <div>\n" +
        "            <p>重庆/龙湖时代天街店一重庆市渝中区龙湖时代天街购物广场C馆L1-55B</p>\n" +
        "            <p><img class=\"img1\" width=\"404px\" src=\"../imgs/矩形.png\"></p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 60px'>浙江省</p>\n" +
        "            <p>杭州/吴山总店&mdash;杭州市延安南路10号（吴山广场）</p>\n" +
        "            <p>杭州/文三店—杭州市文三路463号（东方通信大厦对面）</p>\n" +
        "            <p>宁波/北仑店—宁波市北仑区新契银泰城（泰山路中河路交叉口）</p>\n" +
        "            <p>宁波/天一广场店—宁波市天一广场右营巷43号</p>\n" +
        "            <p>湖州/人民广场店—苕溪西路57号（人民广场公交站）</p>\n" +
        "            <p>绍兴/诸暨店——暨阳路212号（浣江路中学对面）</p>\n" +
        "            <p>绍兴/诸暨店——诸暨市东兴路117号（大润发对面）</p>\n" +
        "            <p>嘉兴/嘉兴店————中港城沃尔玛出口处南</p>\n" +
        "            <p>义务/以乌店—绣湖西路11号</p>\n" +
        "            <p>金华/金华店金华解放东路450号</p>\n" +
        "            <p>金华/金华二店，一金华市兰溪街111号</p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 20px'>广东省</p>\n" +
        "            <p>潮州/潮州店——潮州市环城西路新桥花园1号</p>\n" +
        "            <p>潮州/潮州2店——潮州市枫溪瓷兴路路头（怀德市场斜对面）</p>\n" +
        "            <p>潮州/奎元店——潮州市奎元实验学校斜对面</p>\n" +
        "            \n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 60px'>河南省</p>\n" +
        "            <p>开封/御街口店——开封市西大街1号（宋都御街口/大商斜对面）</p>\n" +
        "            \n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 100px'>福建省</p>\n" +
        "            <p>厦门/集美万达店——厦门市集美区银江路137号集美万达金街56号</p>\n" +
        "            <p>泉州/晋江店——晋江市青阳湖光；西路东岩苑1幢90-92号</p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 85px'>内蒙古</p>\n" +
        "            <p>集宁/内蒙古集宁店一内蒙古乌兰察布市集中区奥威购物广场5楼</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div id=\"middle\">\n" +
        "            <div style=\"width: 100%; text-align: center; color: dodgerblue; font-weight: 900;margin-bottom: 10px\">百滋百特</div>\n" +
        "            <img src=\"../imgs/middle_line.png\">\n" +
        "        </div>\n" +
        "        <div class=\"grid\" id=\"p_right\">\n" +
        "            <div>\n" +
        "            <p style='white-space: nowrap' >重庆/协信星光天地店——車庆市渝中区大坪协信星光天地商场L4-017/018</p>\n" +
        "            <p><img class=\"img1\" width=\"404px\" src=\"../imgs/矩形1.png\"></p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 57px'>山西省</p>\n" +
        "            <p>太原/北美新天地店——太原市长风街长治路口北美新天地4楼F443</p>\n" +
        "            <p>太原/美都汇店——太原市小店区康宁街美都汇二层</p>\n" +
        "            <p>太京/富百家店——太原市富百家购物中心北门江苏省</p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 125px'>江苏省</p>\n" +
        "            <p>常州/常州店——常州市钟楼区莱蒙都会商业街5-106/107号</p>\n" +
        "            <p>张家港/购物公园店—张家港市购物公园沃尔玛一楼南门口处</p>\n" +
        "            <p>武又/光谷天地店——武汉市东湖高新区关山大道光谷天地029号</p>\n" +
        "            <p>赤壁/赤壁店——赤壁市家联超市后门旁右侧</p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 20px'>湖北省</p>\n" +
        "            <p>武汉/光谷天地店—武汉市东湖高新区关山大道光谷天地029号</p>\n" +
        "            <p>赤壁/赤壁店—赤壁市家联超市后门旁右侧</p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 85px'>甘肃省</p>\n" +
        "            <p>兰州/兰州店——兰州市安宁区金牛街（西北师范大学斜对面）</p>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "            <p class=\"p_title\" style='margin-top: 105px'>沙特阿拉伯</p>\n" +
        "            <p>沙特阿拉伯/利雅得——名品街店</p>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\n" +
        "    </div>\n" +
        "    <div id=\"mini_mask\">\n" +
        "        <div id=\"mini_window\">\n" +
        "            <div id=\"mini_img\">\n" +
        "                <img width=\"404px\" src=\"../imgs/矩形1.png\">\n" +
        "            </div>\n" +
        "\n" +
        "        </div>\n" +
        "        <div id=\"arrow_left\" class=\"arrow \">\n" +
        "            <img  src=\"../imgs/left.png\" alt=\"\" >\n" +
        "        </div>\n" +
        "        <div id=\"arrow_right\" class=\"arrow\">\n" +
        "            <img src=\"../imgs/right.png\" alt=\"\" >\n" +
        "        </div>\n" +
        "        <div id=\"cancel\">╳</div>\n" +
        "    </div>");
    $("#content").css("min-height", "50rem")
    $("#cancel").click(function () {
        $("#mini_mask").fadeOut(500);
    })
    $(".img1").click(function () {
        $("#mini_mask").closest('div').fadeIn(500);
    })
}
function show6() {
    let stage = $("#list").css("visibility");
    if (stage==="visible") {
        $("#list").css("visibility", "hidden");
        return;
    }

    $("#list").css("visibility", "visible");

}