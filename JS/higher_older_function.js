'use strict';

//高阶函数


/*
 JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，
 那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
*/

/* A simple Higher-older-function demo*/

function add(x, y, f) {
    return f(x) + f(y);
}

var custom = function(m){
    return m * m;
}

function cus2(f){
   return f*f
}

// console.log(add(-3,6,cus2));  //第三个参数传入函数  

//===================Array的map方法=======================//
//map()作为高阶函数，事实上它把运算规则抽象. 把f(x)作用在Array的每一个元素并把结果生成一个新的Array

function pow(x){
    return x*x;
}

var arr = [3,5,7,9];
console.log(arr);
var arr2 = arr.map(pow);

console.log(arr2); //[9, 25, 49, 81]

//===================Array的reduce()方法=======================//
//Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，
//reduce()把结果继续和序列的下一个元素做累积计算，其效果就是：

//[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4);
//比方说对一个Array求和，就可以用reduce实现
var sumArr = [1, 3, 5, 7, 9];
var total = sumArr.reduce(function (x, y) {
    return x + y;
}); // 25
console.log(`和为${total}`);

//练习：将String转为Int   输入非数字 抛出异常
function string2int(str){

    return str.split('').map(function (x){
    	if (x.charCodeAt(0)>=48 && x.charCodeAt(0)<=57) {
    		return x * 1;    //类型转换   js为弱类型语言   直接给'2'*1  可以将字符转化为Number
    	}else{
    		throw "输入错误！" ;
    	}
    	
    }).reduce(function (m,n){
    	return m * 10 + n;
    }); 

   
}

console.log(string2int('2312')+1);


// var strl = 'transalte';
// console.log(strl.split('')); 

//===================filter()方法=======================//
//用于把Array的某些元素过滤掉，然后返回剩下的元素。
//和map()类似，Array的filter()也接收一个函数。和map()不同的是，
//filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。

//过滤掉Array中非字符串类型的元素
var cArr = [12,'hello',true,0.98,'world!','come',10,'on'];

var nArr = cArr.filter(function(x){
	return (typeof x) === 'string';
})

console.log(nArr);

//把一个Array中的空字符串删掉，可以这么写：
var nullArr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = nullArr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
console.log(r); // ['A', 'B', 'C']







