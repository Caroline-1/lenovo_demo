//y引入外部封装的js插件
define(["jquery"], function($){
  

  /* 顶部通栏和侧边栏 */
  function topic(){
    var nav = document.querySelector('nav');
    var columns =  $('#columns');
    window.onscroll=function (e){
      var e =e || window.event;
      var tTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(tTop > 120){
        nav.style.position='fixed';
        nav.style.top=0+'px';
        $('#columns').css('display','block')
      }else{
        nav.style.top=50+'px';
        $('nav').css('transition','0.1s')
        $('#columns').css('display','none')
      }
    }

  }
  /* banner轮播图 */
  function banner(){
      //获取操作对象
      // var oUl = $('.pic')
      // var lis=$('pic').find('li')
      var btns = $('.dot').find('span')
      // var timer = null;
      // var nowBtn=0;//当前点击按钮的下标
      var timer = null;
      var iNow = 1; //显示当前显示图片的下标
      var bNow = 0;//当前点击按钮的下标
      btns.click(function(){
        //将当前点击按钮的下标赋值给我们定好的变量接收
        bNow=$(this).index();
        //当前显示图片的下标（按钮0对应图1）
        iNow = $(this).index() + 1;
        //点哪个按钮，哪个就变色，其他的没色
        btns.removeClass('active').eq(bNow).addClass('active');
        move()
      })

      function move(){
        //取消所有按钮样式
        btns.removeClass('active');

         //iNow = 6 的时候，让下标0的按钮被选中
         if (iNow == btns.length + 1) {
          btns[0].className = "active";
        }else if(iNow == 0){
          btns[4].className = 'active';
        } else {
          btns[iNow - 1].className = "active";
        }
        $('.pic').animate( { left: iNow * -1920 }, function () {
          //iNow = 6 最后一张图片动画完成切回第一张
          if (iNow == btns.length + 1) {
            iNow = 1;
            $('.pic').css('left',-1920)
          }else if(iNow == 0){
            iNow = 5;
            $('.pic').css('left',5 * -1920 );
          }
        })
      }

      //自动的轮播
      timer = setInterval(function () {
          iNow++;
          move();
        }, 3000);

      $('.pic').mouseenter(function () {
          clearInterval(timer);
      })

      $('.pic').mouseleave(function () {
          //自动的轮播
          timer = setInterval(function () {
              iNow++;
              move();
          }, 3000);
      })

       //给左右按钮添加点击
      $('.btn1').click(function(){
        iNow--;
        move();
        return false;
      })

      //右
      $('.btn2').click(function(){
        iNow++;
        move();
        return false;
      })

  }



   /* 二级导航栏 */
   function title1(){
      $.ajax({
          type: 'get',
          url: "../data/index3导航栏.json",
          success:function(arr){
                // console.log(arr);
                //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
                var str = '';
                for(var i = 0; i < 6; i++){
                  str += '<li><a href="">'+arr[i]+'</a></li>'; 
                          // console.log(str);
                }    
                $('.title1 ').find('.t1').html(str);
          },
          error:function(msg){
            console.log(msg);
          }
      })
   }
   function title2(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 6; i < 13; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t2').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title3(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 13; i < 14; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t3').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title4(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 14; i < 18; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t4').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title5(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 18; i < 25; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t5').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title6(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 25; i < 28; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t6').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title7(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 29; i < 33; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t7').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
 }
  function title8(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 33; i < 40; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t8').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title9(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 40; i < 43; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title1 ').find('.t9').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
 }
 function title10(){
  $.ajax({
      type: 'get',
      url: "../data/index3导航栏.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = '';
            for(var i = 43; i < 44; i++){
              str += '<li><a href="">'+arr[i]+'</a></li>'; 
                      // console.log(str);
            }    
            $('.title1 ').find('.t10').html(str);

      },
      error:function(msg){
        console.log(msg);
      }
  })
}
  function title11(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 0; i < 4; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title2 ').find('.t1').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function title12(){
    $.ajax({
        type: 'get',
        url: "../data/index3导航栏.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = '';
              for(var i = 11; i < 16; i++){
                str += '<li><a href="">'+arr[i]+'</a></li>'; 
                        // console.log(str);
              }    
              $('.title2 ').find('.t2').html(str);

        },
        error:function(msg){
          console.log(msg);
        }
    })
  }






    /* 秒杀产品 */
    function products1(){
        $.ajax({
            type: 'get',
            url: "../data/index1.json",
            success:function(arr){
                  // console.log(result);
                  //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
                  var str = ``;
                  for(var i = 0; i < arr.length; i++){
                      str += ` <li id="${arr[i].id}">
                                  <a href="">
                                      <img src="${arr[i].img}">
                                      <article>
                                         ${arr[i].name}</aside>
                                          <p><i>${arr[i].description}</i></p>
                                          <div>
                                            <span>${arr[i].price}</span>
                                            <figure>${arr[i].original}</figure>
                                          <div>
                                       </article>
                                  </a>
                              </li>`;
                              
                  }
          
                  $(".m2").html(str);
            },
            error:function(msg){
              console.log(msg);
            }
        })
    }

    /* 主题产品区 */
    function products2(){
      $.ajax({
        type: 'get',
        url: "../data/index2.json",
        success:function(arr){
              // console.log(arr);
              //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
              var str = ``;
              for(var i = 0; i < 8; i++){
                  str += `<li id="${arr[i].id}">
                              <a href="">
                                  <img src="${arr[i].img}">
                                  <article>
                                      <aside>${arr[i].name}</aside>
                                      <p>${arr[i].description}</p>
                                      <span>${arr[i].price}</span>
                                  </article>
                              </a>
                          </li>`;                        
              }
              $(".lastal .lastal1 .content1 .lastalRight").html(str);
        },
        error:function(msg){
          console.log(msg);
        }
    })
  }
  function products3(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 8; i < 16; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
    
            $(".lastal .lastal2 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products4(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 16; i < 24; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal3 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products5(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 24; i < 32; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal4 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products6(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 32; i < 40; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal5 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products7(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 40; i < 48; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal6 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products8(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 48; i < 56; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal7 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products9(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 8; i < 16; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal8 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products10(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 16; i < 24; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal9 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }
  function products11(){
    $.ajax({
      type: 'get',
      url: "../data/index2.json",
      success:function(arr){
            // console.log(arr);
            //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
            var str = ``;
            for(var i = 25; i < 33; i++){
                str += `<li id="${arr[i].id}">
                            <a href="">
                                <img src="${arr[i].img}">
                                <article>
                                    <aside>${arr[i].name}</aside>
                                    <p>${arr[i].description}</p>
                                    <span>${arr[i].price}</span>
                                </article>
                            </a>
                        </li>`;                        
            }
            $(".lastal .lastal10 .content1 .lastalRight").html(str);
      },
      error:function(msg){
        console.log(msg);
      }
    })
  }

 


     
        //对外暴露这个函数方法，以便被main.js调用
  return {
    products1,
    products2,
    products3,
    products4,
    products5,
    products6,
    products7,
    products8,
    products9,
    products10,
    products11,
    banner,
    title1,
    title2,
    title3,
    title4,
    title5,
    title6,
    title7,
    title8,
    title9,
    title10,
    title11,
    title12,
    topic,


  }
  
})