define(["jquery"], function($){
  

    /* 顶部通栏和侧边栏 */
    function topic(){
        var nav = document.querySelector('nav');
        window.onscroll=function (e){
            var e =e || window.event;
            var tTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(tTop > 120){
                nav.style.position='fixed';
                nav.style.top=0+'px';
                nav.style.zIndex=1;
                $('#columns').css('display','block')
            }else{
                nav.style.top=50+'px';
                $('nav').css('transition','0.1s')
                $('#columns').css('display','none')
            }
        }
    }
    

/* 橱窗 */

/* 底部缩略图滑动 */
function exhibition(){
     /* 移入哪个小图，哪个小图的样式就发生变化; 
    且对应的大图出现*/
   //获取当前所有的小图（伪数组）
   var small = $('.thumb_img li'); 
   var nowSmall = 0;//设置变量为 当前小图的下标，默认为0

    //设置默认 第一个小图边框红色
   $('.thumb_img li ').eq(0).children().css('border','1px solid  rgb(179, 1, 1)');
    

    $('.thumb_img li img').mouseenter(function(){
        this.style.border='1px solid rgb(179, 1, 1)';
        // nowSmall = $(this).index(); //当前鼠标移入的小图下标
        // nowBig = nowSmall

        //划入的小图边框为红，其他为常规
        var arr = $(this).parent().parent().children().not($(this).parent()).children();
        // console.log(arr);
        for(var i = 0;i < arr.length; i++){
            arr[i].style.border='1px solid  rgb(211, 209, 209)';
        }

        //将此小图对应的大图路径 覆盖再原来的大图上
        $(".details_img img").attr('src',this.src) //变量不加括号

        //右侧放大区的图也用小兔的
        $('.magnify_box img').attr('src',this.src)
       
    })
    var num = 0 ; //设置点击次数
    //给两边按钮添加点击事件
    $('.img_btn').children().click(function(){
        //判断点击的是哪个按钮

        if($(this).attr('class') == 'next'){  //如果点击的是右键
            num ++ ;
            // console.log(num);        
            //设置当前小图边框为红，其他常规
            $('.thumb_img li').eq(num).children().css('border','1px solid  rgb(179, 1, 1)')
            var arr =$('.thumb_img li').not($('.thumb_img li').eq(num)) //获取其他常规Li
            var newArr = Array.from(arr)
            newArr.forEach(element => {
                element.firstChild.style.border = '1px solid  rgb(211, 209, 209)';
            });

            //把当前小图的src路径赋予大图 覆盖
            $('.details_img img').attr('src',$('.thumb_img li').eq(num).children().attr('src'));

            //右侧放大区src路径也用小图的覆盖
            $('.magnify_box img').attr('src',$('.thumb_img li').eq(num).children().attr('src'));

            if(num == 5){
                //整体偏移量
                var oLeft = -100 * 5 + 'px';
                // console.log(oLeft);
                //让图片整体移动
                $('.thumb_img').css('left',oLeft)
            }

            //给num设置边界值，并设置一个变量接收num
            var numMax = Math.min(num,8);
            num = numMax

            if(num == 8){
                $('.thumb_img li').eq(num).children().css('border','1px solid  rgb(179, 1, 1)')
            }                      
        }
    
        if($(this).attr('class') == 'pre'){  //如果点击的是左键
            num -- ;
            $('.thumb_img li').eq(num).children().css('border','1px solid  rgb(179, 1, 1)')
            var arr =$('.thumb_img li').not($('.thumb_img li').eq(num)) //获取其他常规Li
            var newArr = Array.from(arr)
            newArr.forEach(element => {
                element.firstChild.style.border = '1px solid  rgb(211, 209, 209)'
            });

             //把当前小图的src路径赋予大图 覆盖
             $('.details_img img').attr('src',$('.thumb_img li').eq(num).children().attr('src'))

              //右侧放大区src路径也用小图的覆盖
            $('.magnify_box img').attr('src',$('.thumb_img li').eq(num).children().attr('src'));

            if(num ==4){
                var oRight =-100 * 0 + 'px';
                $('.thumb_img').css('left',oRight)
            }

            var numMin = Math.max(0,num)
            num = numMin

            if(num == 0){
                $('.thumb_img li').eq(num).children().css('border','1px solid  rgb(179, 1, 1)')
            }
        }
    })   
}

/* 放大镜 */
function magnify(){
    //获取鼠标移入移出事件
    //鼠标移入左边box，左右图片显示；移出隐藏
    $('.details_img').mouseenter(function(){
        $('.magnify_box').css('display','block');
        $('.mark').css('display','block');
    })
    $('.details_img').mouseleave(function(){
        $('.magnify_box').css('display','none');
        $('.mark').css('display','none');
    })

    //获取鼠标移动事件：
    var box=document.querySelector('.details_img');
    var mark=document.querySelector('.mark');
    var img=document.querySelector('.magnify_box img');

    $('.details_img').mousemove(function(e){
        //获取事件对象，兼容
        var e=e||window.event;
        //获取mark相对于大图的横向纵向移动位置
        var l=e.pageX-box.offsetLeft - mark.offsetWidth/2 ; //大图用this也是一样的
        var t=e.pageY-box.offsetTop - mark.offsetHeight/2;
        //此时mark能移出大图，需设置移动的范围
        l=Math.max(0,l)//括号里的是两个参数，取0和再往左移动的值中的最大值
        l=Math.min(l,260)//取移动的值和最大值260中的最小值
        t=Math.max(0,t)
        t=Math.min(t,260)
        // console.log(l,t);
        //让mark跟随鼠标移动移动
        mark.style.left=l+'px'
        mark.style.top=t+'px' 
        
        //让放大区里的img跟着mark移动而放大移动
        img.style.left=-2*l+'px'
        img.style.top=-2*t+'px'  //给img添加left  top属性，
        //需要css里给img添加position定位
    })           
}

/* 橱窗右侧详情下拉列表 */
function select_service(){
    $('.ul2 ol li').mouseenter(function(){
        $(this).children('.hide').css('display','flex');
    })

    $('.ul2 ol li .hide').mouseleave(function(){
        $(this).css('display','none');
    })

    $('.ul3 ol li').mouseenter(function(){
        $(this).children('.hide').css('display','flex');
    })

    $('.ul3 ol li .hide').mouseleave(function(){
        $(this).css('display','none');
    })

}


    
    
    return{
        topic,
        exhibition,
        magnify,
        select_service,
    }


})