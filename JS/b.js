'use strict'

/**     循环   **/
var result = 1;
for (var i = 1; i <= 10; i++) {
	result*=i;
}
console.log(result);

//遍历数组
var arr = ['hello','my','name','is','Heii',89];
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

//循环判断条件为空  则为无限循环 许需要使用break跳出循环
var h = 0;
for (;;) {
	console.log(`循环中${h}`);
	h++;
	if (h>10) {
		alert("循环结束");
		break;
	}
}

//for循环变体
// for...in  可以把一个对象的属性依次遍历出来
var xiaoming = {
	birth:'930620',
	age:24,
	company:null
}

for(var prop in xiaoming){
	console.log(`${prop}:${xiaoming[`${prop}`]}`);
}


