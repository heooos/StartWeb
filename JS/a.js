'use strict';
// alert("独立的js文件");
// var a = "这是一个声明过的变量";
// alert(a);

/********** 变量声明  **************/
var name = '小明';
var eName = 'Hello, world!';
var age = 23;
// var message = '你好'+ name + '，' + '你今年'+age+'岁了！！！';
// var message = `你好, ${name}, 你今年${age}岁了!`;
var l = name.length;
var el = eName.length;
// alert(eName[eName.length]);


var xiaoming = {
	name:'小明',
	age:25
};

// alert(`${xiaoming.name}同学，你今年${xiaoming.age}岁了！！！！！`);


/********** 数组  **************/

var arr= [12,0,'23',true];


//如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
var newArr = arr.slice(0,1);  //截取数组
newArr.push('张三','赵四','王麻子');  //给原数组结尾添加元素
console.log(newArr); 

newArr.pop();  //将原数组中最后一个元素删除
console.log(newArr); 
newArr.unshift("路人甲","路人乙");   //给原数组开头添加元素
console.log(newArr); 
newArr.shift();   //将原数组第一个元素删除
console.log(newArr); 
newArr.sort();  //数组排序
console.log(newArr);

newArr.reverse(); //数组翻转
console.log(newArr);

/*   splice 方法的使用 */

//splice(a,b,...)   a代表从第几位开始删除，包含该位(数组索引从0开始)  b代表删除多少位  当b为0的时候表示不删除，只添加。
//splice() 返回值为截取出来的数组

var company = ["百度","阿里巴巴","腾讯","滴滴","网易"];
var s = company.splice(2,2,"未知的公司");
console.log("截取出来的公司是"+ s);     //截取出来的公司是腾讯,滴滴
console.log(`截取完成后的新列表为${company}`);  //截取完成后的新列表为百度,阿里巴巴,未知的公司,网易

/*  concat 方法的使用 */

//arr.concat(arrN)  将数组arr和arrN拼接起来并返回新的数组
var cArr = ['a','b','c'];
var cNArr = ['q','w','e','r'];
var rArr = cArr.concat(cNArr);
console.log(rArr); //["a", "b", "c", "q", "w", "e", "r"]

/*   join 方法的使用 */

//arr.join(a)  将arr数组中的所有元素使用指定的a字符串拼接起来
var jArr = ["h","e","l","l","o"];
console.log(jArr.join("**"));  //h**e**l**l**o

//如果Array的元素不是字符串，将自动转换为字符串后再连接。
var j1Arr = [1,2,3,"a","b","c",true,false];
console.log(j1Arr.join("-")); //1-2-3-a-b-c-true-false

var mArr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(mArr[1][1]);


var oArr = ['小明', '小红', '大军', '阿黄'];
oArr.sort();
alert(`欢迎${oArr[0]}、${oArr[1]}、${oArr[2]}和${oArr[3]}同学`);