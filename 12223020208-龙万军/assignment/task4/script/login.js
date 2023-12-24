$(document).ready(function () {
    $("#pane>div>input").focusout(function () {
        $(this).each(function check() {
            let stage = true;
            stage = $(this).attr('type') === 'text';
            let div = $(this).siblings('.prompt');
            div.css('visibility', 'visible');
            if ($(this).is(':valid', true) && $(this).val() !== "") {

                div.css('background-color', "#e9fbeb");

                let icon = div.find('.ban');
                icon
                    .addClass('right')
                    .removeClass('ban');

                let char = icon.find('.hr');
                char.text("✓")
                let content = div.find('.content');
                content.text("输入正确.")
                if (!stage && $(this).prop('type', 'email')) {
                    $(this).css('background-color', "#faffbd")
                }
            } else {

                div.css('background-color', "#ffe0e9");

                let icon = div.find('.right');
                icon
                    .addClass('ban')
                    .removeClass('right');

                let char = icon.find('.hr');
                let hr = document.createElement('hr');
                char.html(hr);
                let content = div.find('.content');
                if (stage) {
                    content.text("请输入正确的用户名.")
                } else {
                    $(this).css('background-color', '#ffe0e9')
                    content
                        .text("请输入正确的E-Mail地址.")
                }
            }
        });

    })
    $('form').submit(() => {
       if ($(`#pane>div>#mail`).is(':valid', true) && $("#pane>div>#mail").val() !== "" && $("#pane>div>#user").val() !== ""
       && $(`#pane>div>#user`).is(':valid', true)) {alert("注册成功，密码已发到你的邮箱，请查收.")}
       location.reload();
       return false;
    })
    $('input[value=\"重置\"]').click(() => {
        $("#pane>div>input")
            .val("")
            .prop(':valid', false)
            .css('background-color', 'white');
        $('.prompt')
            .css('visibility', 'hidden');
    })

})


'use strict'