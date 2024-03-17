 // 单击事件
    var i =0;

    $(".outer .btn .right_btn").click(go_right);

    function go_right() {

        if(i===4){
            i=-1;
        }
        i++;
        $(".outer .img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        $(".outer .num li").eq(i).addClass("current").siblings().removeClass("current");

    }

    $(".outer .btn .left_btn").click(go_left);

    function go_left() {
        if(i===0){
            i= 5;
        }
        i--;
        $(".outer .img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        $(".outer .num li").eq(i).addClass("current").siblings().removeClass("current");

    }

    // 自动轮播

    var ID = setInterval(go_right,2000);

    $(".outer").hover(function () {
        // 悬浮到outer区域
        clearInterval(ID);
    },function () {
        ID = setInterval(go_right,2000);
    });

    // 悬浮事件

    $(".num li").mouseover(function () {

        i = $(this).index();
        $(".outer .img li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        $(".outer .num li").eq(i).addClass("current").siblings().removeClass("current")


    })


