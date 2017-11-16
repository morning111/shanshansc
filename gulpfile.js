const gulp = require("gulp"); 		  //引入gulp
const babel = require("gulp-babel");  //编译ES6
const sass = require("gulp-ruby-sass"); //编译SASS
//const connect = require("gulp-connect"); //刷新页面
const uglify = require("gulp-uglify");  //压缩文件
const concat = require("gulp-concat");  //合并文件
const rename = require("gulp-rename");  //重名命名文件
const webserver = require("gulp-webserver");
const proxy = require("http-proxy-middleware");

//编译ES6并压缩
/*gulp.task("uglify",function(){
	gulp.src("./js/*.js")
		.pipe(babel({
			presets : ["es2015"]
		}))
		.pipe( uglify() )
		.pipe( rename({suffix:'.min'}) )
		.pipe( gulp.dest("./dev/minjs/"));
})
*/
//编译SASS
gulp.task("compilesass",function(){
	sass("./scss/*.scss",{
		style : "expanded"
	})
	.pipe(gulp.dest("./css/"));
})

//反向代理
gulp.task("webserver",function(){
	gulp.src('./')
		.pipe(
			webserver({
				host : "localhost",
				port : 8080,
				livereload : true,
				directoryListing : {
					enable : true,
					path : './'
				}
				/*,
				//跨域AJAX反向代理地址
				middleware : [
					proxy("/api", { //localhost/api这种情况下才会走反向代理
						target : "http://service.ule.com/api",
						changeOrigin : true,
						pathRewrite : {
							"^/api" : ""
						}
					}),
					proxy("/m", {
						target : "https://pic.ule.com",
						changeOrigin : true
					}),
					proxy("/pic",{
						target : "http://m.ule.com",
						changeOrigin : true
					})
				]*/
			})
		)
})

//动态见监听
gulp.task("listening",function(){
	//检测文件的变化，执行相关的任务
	//gulp.watch("./dev/sass/*.scss",["compilesass"]);
	//gulp.watch("./dev/js/**/*.js",["uglify"]);
})
//设置默认执行的任务
gulp.task("default",["webserver"],function(){
	console.log("done.");
});

