/*  
配置要引入的模块的路径， jQuery也要遵从AMS规范
*/
require.config({
    paths:{  //引入js中需要的外部文件（分不同的js文件分模块处理）
        jquery:'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        details:'details',       
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
require(['details'], function(details){
    details. topic();
    details. exhibition();
    details.magnify();
    details.select_service();
  })