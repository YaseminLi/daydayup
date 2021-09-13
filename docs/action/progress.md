### 图片、文件的上传速率、大小，以显示进度条
```js

var xhr = new window.XMLHttpRequest();
    var url =
      'https://imgservices-1252317822.image.myqcloud.com/image/20191017/llpf9axb5z.png';
    xhr.open('GET', url);
    xhr.onprogress = function(event) {
        // 只会触发两次
      console.log('🚀 ~ file: test.html ~ line 15 ~ event', event);
      // event.loaded是已经加载的
      // event.total是总大小
    };
    xhr.onload = function() {
      // 加载成功
    };
    xhr.onloadend = function() {
      // 无论成功还是失败
    };
    xhr.send();
```