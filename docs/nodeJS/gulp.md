- 基于Node的前端自动化构建工具,自动化、强化工作流程
- [官方文档](https://www.gulpjs.com.cn/docs/getting-started/quick-start/)
- demo:gulp-learning/gulpfile.js

## 初始化
1. 本地开发依赖安装
    ```npm install --save-dev gulp```
2. ```package.json``` 中scripts添加：```"gulp":"gulp"```
3.  在项目根目录下创建一个名为 gulpfile.js 的文件（配置文件）：
    ```js
    const gulp=require('gulp')
    //task不推荐使用了，exports替代
	gulp.task('default',(done)=>{
		console.log('hello')
		done()
    })
    ```
4. 执行```npm run gulp```，可以输出```default task```

    - npm run gulp执行default任务

    - npm run gulp taskname 执行taskname

## 常用的API
- src(globs[, options])
- dest(path[, options])
- task([taskName], taskFunction)
- series(...tasks)paraleel(…task)
- watch(globs, [options], [task])



- **gulp.src(globs[, options])**

输出符合所提供的匹配模式（glob）或者匹配模式的数组的文件, 将返回一个 stream 可以被 piped 到别的插件中。

globs的类型：  String 或 Array ——所要读取的 glob 或者包含 globs 的数组。 

- **gulp.dest(path[, options])**

输出传入的所有数据，可以 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。
```js
		const { src, dest } = require('gulp'); 
		function copy() { 
			return src('input/*.js') 
			.pipe(dest('output/'));
			 } 
		exports.default = copy;//导出任务就是注册该任务了
```	
		
- **watch(globs, [options], [task])**
监视代码的变化并自动执行任务
```js
	function watch(done){
		    const watcher = gulp.watch('src/**/*.js');
		    watcher.on('change', function (path, stats) {
		        console.log(`File ${path} was changed`);
		    });
		 
		    watcher.on('add', function (path, stats) {
		        console.log(`File ${path} was added`);
		    });
		 
		    watcher.on('unlink', function (path, stats) {
		        console.log(`File ${path} was removed`);
		    });
		 
		      watcher.close();   
	};
```		 
## 规定任务执行顺序

- series顺序执行
```js
	const { series } = require('gulp');
	 
	function javascript(cb) {
	  // body omitted
	  cb();
	}
	 
	function css(cb) {
	  // body omitted
	  cb();
	}
	 
    exports.build = series(javascript, css);
```
    

- parallel并行执行
```js
	const { parallel } = require('gulp');
	 
	function javascript(cb) {
	  // body omitted
	  cb();
	}
	 
	function css(cb) {
	  // body omitted
	  cb();
	}
	 
	exports.build = parallel(javascript, css);
```	

## 相关包安装
- gulp-less

```npm install  --save-dev gulp-less```    css文件转化成less

- del

```npm install del --save-dev```     del.sync(patterns, [options])删除目标路径的文件

- gulp-clean-css 

```npm install gulp-clean-css --save-dev ``` css文件压缩
