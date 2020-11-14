/*  
配置要引入的模块的路径， jQuery也要遵从AMS规范
*/
require.config({
    paths:{  //引入js中需要的外部文件（分不同的js文件分模块处理）
        jquery:'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        move:'startMove',
        index: "index",  //首页的js文件
    },
    //jquery-cookie 是依赖于jquery开发
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
    },
});

/*
  好处：模块和模块之间的关系清晰，所以的代码的，其中一个模块有问题，其他代码不受影响。
*/
require(['index'], function(index){
    // banPicture.banner()
    index.products1();
    index.products2();
    index.products3();
    index.products4();
    index.products5();
    index.products6();
    index.products7();
    index.products8();
    index.products9();
    index.products10();
    index.products11();
    index.banner();
    index.title1();
    index.title2();
    index.title3();
    index.title4();
    index.title5();
    index.title6();
    index.title7();
    index.title8();
    index.title9();
    index.title10();
    index.title11();
    index.title12();
    index.topic();


  })



  