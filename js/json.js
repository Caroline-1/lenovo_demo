//用js书写数据库，转json字符串后，用打印的方式输出json字符串
//再复制字符串内容到data.json文件，以便Ajax引用

var data = [

    {
        id:1,
        name:'联想小新U盘 X1 时尚休闲办公U盘(32GB)',
        description:'1元秒',
        price:'￥1',
        img:'../images/ia_10143.jpg'
    },
    {   
        id:2,
        name:'ThinkPad P14s 英特尔酷睿i5 笔记本电脑20S4A000CD',
        description:'9.5折',
        price:'￥8999',
        img:'../images/ia_10092.jpg'
    },
    {   
        id:3,
        name:'英菲克inphic有线游戏专用电竞鼠标PW1通用 3键版 黑色',
        description:'1元秒',
        price:'￥1',
        img:'../images/ia_10148.jpg'
    },
    {   
        id:4,
        name:'拯救者电竞手机 Pro 16GB+512GB 炫蓝冰刃 TS战队同款',
        description:'9.9折',
        price:'￥5699',
        img:'../images/ia_10128.jpg'
    }
]

var data1 =JSON.stringify(data)
console.log(data1);
