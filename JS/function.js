'use strict';

//熟悉js中的函数使用

//写一个 弹出『Hello World』的函数

sayHi(5,"Hello World");
//方式一
function sayHi(i,str){   //function指出这是一个函数定义；  sayHi是函数的名称;  (attr,attr1)括号内列出函数的参数，多个参数以,分隔；
	if (typeof i !== 'number') {
		throw 'Not a number';  //抛出异常  不再继续向下执行
	}
	if (i === 5) {     //{ ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。
		alert(str);
	}
}
//请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。
//如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

//sayHi("5","Hello World");



//方式二    需要在函数体末尾加一个;，表示赋值语句结束。 
var sayHello = function(i,str){ //匿名函数  将函数指向变量  通过变量来访问函数。
	if(i === 10){
		alert(str);
	}
};

sayHello(10,"HaHaHa");

//采用d第二种形式需要注意  调用必须放在声明之后！


/*   arguments参数的使用   */

//JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
//arguments类似Array但它不是一个Array

function getArg(m){
	// alert(m);
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]); //m 1 2
	}
}

getArg("m");
getArg(1);
getArg(2);

//利用arguments，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值：

//arguments最常用于判断传入参数的个数。
// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值

    }
    // ...
}
//要把中间的参数b变为“可选”参数，就只能通过arguments判断，然后重新调整参数并赋值。

foo(1,2);


/*    rest参数  */
//est参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，
//多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
//如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个**空数组**（注意不是undefined）。
function tryRest(a,b,...rest){          
	console.log('a = ' + a);  //a = 3;
    console.log('b = ' + b);  //b = 5;
    console.log(rest);        // ["asd", true, false, 9.001, 25]
}

tryRest(3,5,'asd',true,false,9.001,25);


function sum(...rest) {
   var sumR = 0;
   for(var i = 0;i<= rest.length-1;i++){
      sumR += rest[i];
      // alert(rest[i]);
   }
   return sumR;
}
console.log("和为："+sum(3,4,5,6,7));



//var 声明的是函数内部的作用域变量

//let 声明的是块级作用域的变量

//const声明的是块级作用域的常量


//变量提升
//JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部：
function foo1() {
    var x = 'Hello, ' + y;
    alert(x);           //Hello undefined
    var y = 'Bob';
}

foo1();




