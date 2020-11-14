define(["jquery"], function($){

    /* 导航栏手机滑入显示图片 */
    function show(){
        $('.phonPic').mouseenter(function(){
            $('.codePic').css('display','flex');
        })
        $('#navBox aside').mouseleave(function(){
            $('.codePic').css('display','none');
        })
        
    }

    /* 表单 */
    function inputStyle(){
        //点击获取焦点和自定义框线
        $('.regist_info_person input').focus(function(){
               this.style.border='2px solid black';
            })
        $('.regist_info_person input').blur(function(){
               this.style.border='1px solid #d6d6d6';
            })
        
        //输入内容显示删除按钮    
        $('.regist_phon input').keyup(function(){
            var vals = this.value;
            // console.log(vals);
            if(vals!== null){
                $(' .regist_phon span').css('display','inline-block');
                $('.regist_phon span').click(function(){
                       var a=$('.int1').val('')
                       $(' .regist_phon span').css('display','none');
                })
            }
            if(vals.length==false){
                $(' .regist_phon span').css('display','none');
            }
            
        })

           



    }



    return {
        show,
        inputStyle,
    }

})