require.config({
    paths:{  //引入js中需要的外部文件（分不同的js文件分模块处理）
        jquery:'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        move:'startMove',
        shopping:'shopping'
    },
    //jquery-cookie 是依赖于jquery开发
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
    },
});



require(['shopping'], function(shopping){
    shopping.sc_msg();
})