/*   //调用格式
 $ajax({
  //默认get方式，也可以写type='post'
  url: "./showStudents_json.php",
      success: function(result){
        //   console.log(result);
          var arr = JSON.parse(result); //php获取到的数据库数据转json数据结构
          console.log(result)
        //从获取到的json数据中提取有效数据插入到我们动态创建好的html标签以便显示在页面
        var str = ``;
        for(var i = 0; i < arr.length; i++){
          str += `<tr>
              <td>${arr[i].id}</td>
              <td>${arr[i].name}</td>
              <td>${arr[i].english}</td>
              <td>${arr[i].math}</td>
              <td>${arr[i].chinese}</td>
            </tr>`;
        }
        t1.innerHTML = str;
      },
      error: function(msg){
        console.log(msg);
      }
}) */

function $ajax({ type = "get", url, data, success, error }) {
  type = type.toLowerCase();
  var xhr = null;
  try {
    xhr = new XMLHttpRequest();
  } catch (error) {
    xhr = ActiveXObject("Microsoft.XMLHTTP");
  }
  //如果请求是get且有数据，拼接url
  if (type === "get" && data) {
    url += "?" + queryString(data);
  }

  xhr.open(type, url, true);

  if (type === "get") {
    xhr.send();
  } else {
    //设置编码格式  如果是post请求
    xhr.setRequestHeader(
      "content-type",
      "application/x-www-form-urlencoded"
    );
    xhr.send(queryString(data));
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success && success(xhr.responseText);
      } else {
        error && error("Error：" + xhr.status);
      }
    }
  };
}

function queryString(obj) {
  var str = "";
  if (!obj) {
    return str;
  }
  for (var attr in obj) {
    str += `${attr}=${obj[attr]}&`;
  }
  return str.substring(0, str.length - 1);
}
