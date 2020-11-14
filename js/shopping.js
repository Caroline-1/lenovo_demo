 //y引入外部封装的js插件
define(["jquery","jquery-cookie"], function($){
 
    //cookie里的数据计算完了，同步将cookie里的数据同步到购物车
    //加载购物车中的商品，cookie中存放着id 和 num
    //商品图片等详细信息存放再数据源中
    function sc_msg(){
        //通过Ajax获取数据源数据
        $.ajax({
            type:'get',
            url:'../data/index2.json',
            //通过JSON数据格式话判断获取的数据是数组结构,每个元素都是对象
            //[{id:0,img:'http:'},{},{}]
            success:function(arr){
                //获取的是数据源中的全部数据，需要筛选出cookie中存放的数据加购物车
                var cookieStr = $.cookie('goods');
                var newArr = [];  //存储最后得到的购物车数据
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    //遍历数据源中的数据
                    for(var i = 0; i < arr.length; i++){
                        //遍历cookie中的数据
                        for(var j = 0; j < cookieArr.length; j++){
                            if(arr[i].id==cookieArr[j].id){
                                //得到数据源中和cookie一样的id，把cookie的商品数量赋值给arr
                                arr[i].num = cookieArr[j].num;
                                //把挑选出来的数据源中的数据（id img num）添加给存放数组
                                newArr.push(arr[i])
                                break;
                            }
                        }
                    }
                    var node = "";
                        for(var i = 0; i < newArr.length; i++){
                            node =  $(`<tr id="${newArr[i].id}">
                                        <td>
                                            <input type="checkbox" name="xuan" />
                                            <a href=""><img src="${newArr[i].img}"></a>
                                            <article>
                                                <span><a href="">${newArr[i].name}</a></span>   
                                                <aside><a href="">购买联想服务</a></aside>
                                            </article>
                                        </td>
                                        <td></td>
                                        <td class='goods_price'>
                                        ￥<span>${newArr[i].price}</span>
                                        </td>
                                        <td class='goods_btn'>
                                            <button >-</button>
                                            <input class="num" type="text" value="${newArr[i].num}" >
                                            <button>+</button>
                                        </td>
                                        <td>
                                            ￥<span>${newArr[i].price*newArr[i].num}</span>
                                        </td>
                                        <td>
                                            <span class='remove_good'>删除</span>
                                            <aside>移入收藏夹</aside>
                                        </td>
                                </tr>`)
                                

                            node.appendTo($(".contentBox"))
                            // console.log(str);
                        }
                    }
                },
                error:function(msg){
                    console.log(msg)
                }
            })
        }

    //再把数量总计添加到购物车(后面购物车数量加减以现在数量为基数去做加减)
        function goods_num(){
            //获取cookie数据的name为goods的值(还是字符串格式)
            var cookieStr = $.cookie('goods');
            var sum = 0;
            //判断现在cookie里是否有数据
            if(cookieStr){ //有数据把字符串则转为常见数据结构
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                }
            }
            //把获取到的cookie里的num值的和 追加到购物车数量总计
            $(this).siblings("input").val(sum);
        }

//做购物车 商品的删除和加减法
        /* 事件委托做加减按钮，并计算单品小计 */
        $('.contentBox').on('click','.goods_btn button',function(){
            goods_num();
            //获取点击按钮所在的tr的id值
            var id = $(this).parent().parent().attr('id');
            //获取cookie中现有的数据，筛选和点击id一样的数据好修改他的num值
            var cookieArr = JSON.parse($.cookie("goods"));				// var index = cookieArr.findIndex(function(item){ })
            var index = cookieArr.findIndex(item => item.id == id);
            // console.log(this.innerHTML);
            if(this.innerHTML == "+"){
                    cookieArr[index].num++;
            }else{   //如果数量为1了，就不能再点减号，只能点删除按钮
                cookieArr[index].num == 1 ? alert("数量最小为1") : cookieArr[index].num--;
            }
            //显示在页面
            $(this).siblings("input").val(`${cookieArr[index].num}`);
            //从新存回数据库
            $.cookie("goods", JSON.stringify(cookieArr), {expires: 7})
            //单品小计
            //获取现在商品的价格
            // console.log($(this).parent().prev().children().html()); //单价  行不通
            // console.log( $(this).parent().children().siblings('.num').val()); //数量
            var a =$(this).parent().prev().children().html();//页面显示的单价
            var b =$(this).parent().children().siblings('.num').val()  //数量
            $(this).parent().next().children().html(parseInt(a)*parseInt(b))

            
        })

        /* 事件委托删除一行 */
			//按钮是动态创建的，通过事件委托给两个按钮添加点击事件
        //用事件监听 (jquery自带监听功能)
        $('.contentBox').on('click','.remove_good',function(ev){
            var e=ev||window.event
            var target=e.target||e.srcElement
            if(target.innerHTML == '删除')
            // console.log('shan');
            // console.log(this);//span
            // console.log($(target));//span
            $(target).parent().parent().remove()
            //删除完页面行后 再从cookie中删除数据
            var cookieArr = JSON.parse($.cookie('goods')); //先获取现在cookie中的数据
            // console.log(cookieArr);
            var id = $(this).parent().parent().attr('id')
            console.log(id);
            for(var i=0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    cookieArr.splice(i,1) //开始元素，截图个数，无替换元素则为删除
                    break;
                }
            }
             //如果cookie中数据长度为1或其他的23456，则为真，说明有数据，
            //否则是没有数据.   空数组删除，有数据的再存回cookie
            if(cookieArr.length){
                //从新上传cookie
                $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
                })
            }else{
                $.cookie("goods", null);
            }
        })
        /* 删除选中 */
        $('.contentBox').on('click','.remove_good',function(){
        
        })



       






    return{
        sc_msg,
    }
})