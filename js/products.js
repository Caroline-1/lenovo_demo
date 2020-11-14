//y引入外部封装的js插件
define(["jquery","jquery-cookie"], function($){
  

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

    /* 产品区 */
    function products(){
        $.ajax({
            type: 'get',
            url: "../data/index2.json",
            success:function(arr){
                console.log(arr);
                //可以通过字符串拼接方式innerHTML插入到自己创建的DOM节点
                var str = ``;
                for(var i = 0; i < 20; i++){
                    str += `<li class="goods_item" >
                                <div class="goods_pic">
                                    <div class="pic">
                                        <a href="">
                                            <img src="${arr[i].img}">
                                        </a>
                                        <div class="check">
                                            <input type="checkbox">
                                            <i>对比</i>
                                        </div>
                                    </div>
                                    <div class="change">
                                        <a href=""><i>换新</i></a>
                                    </div>
                                </div>
                                <div class="goods_title">
                                    <div class="title">
                                        <a href="">${arr[i].name}</a>
                                    </div>
                                    <div class="description">
                                        <a href="">${arr[i].description}</a>
                                    </div>
                                    <div class="price">
                                            <i>￥${arr[i].price}</i>
                                    </div>
                                    <div class="sc_btn"  id="${arr[i].id}" >加入购物车</div>
                                </div>
                            </li> `;                        
                }
                // console.log(str);
                $(".lastal .lastal1 .content").html(str);
            },
            error:function(msg){
                console.log(msg);
            }

        })

        /* 存cookie */

        //给后添加的li节点（商品）添加点击事件,需要用事件委托
        //点击后图片的id和img直接存储在cookie里
        $('.lastal1 .content').on('click','.sc_btn',function(){
            //如果cookie为空，则直接创建；如果不为空:1可能之前创建过这个商品数据，数量+1即可。2.有其他的未有此种商品，需重创建添加一个商品数据
            //判断第一次添加购物车，cookie是否为空（通过判断name的值是否为空，这里用goods代替name）
            var first=$.cookie('goods')==null ? true : false;
            // console.log(first);
            //获取一下当前点击图片按钮的id值
            var id = this.id;
            // console.log(id);
            if(first){
                //cookie为空，则是第一次添加购物车，创建变量放要存入cookie的数据
                var cookieArr = [{id:id,num:1}];
                $.cookie('goods',JSON.stringify(cookieArr),{expires:7,raw:true})
            }else{
                //查找之前cookie中已有商品1.是这个商品 2.是其他商品
                //获取cookie中现有的数据，由字符串转为常见数据结构
                var cookieArr = JSON.parse($.cookie('goods'));
                //假设没创建过这个商品，而且其他的
                var same = false;
                //遍历cookieArr中的数据，看cookie中是否能找到和当前加购商品id一样的数据
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        //那么就是添加过这个商品
                        same = true;
                        break;
                    }	
                }
                if(same){  //数量+1
                    cookieArr[i].num++;
                }else{ //没有加购过此商品,给获取到的cookie再添加数据
                    cookieArr.push({id:id,num:1})
                }
                //将设置好的数据转json字符串后存放回cookie中(raw: true设置cookie里的value是否为编码)
                $.cookie('goods',JSON.stringify(cookieArr),{expires:7,raw: true});
            }
            // console.log(cookieArr);//可以看创建的id和num
            // console.log(JSON.parse($.cookie('goods')))
        })
    }

    return{
        topic,
        products
    }
})