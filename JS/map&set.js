'use strict';

var map = new Map();
var set = new Set();

// alert('浏览器支持Map Set');


//Map存储键值对   Set存储键  Set不能重复 会自动过滤重复的值

//Map的方法

//map.set(key,value); 给map中添加新的键值对  如果多次对一个key放入value，后面的值会把前面的值冲掉：
//map.get(key);  通过key去取value；
//map.has(key);   是否存在key 
//map.delete(key);   删除key 

map.set(23,"二十三");
console.log(map.get(23));
map.set(true,"真的");
console.log(map.get(true));
map.delete(23);
console.log(map.get(23));  //undefined


//Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

//Set的方法
//set.add(key)  通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果
//s.delete(key);  删除


set.add(3);
set.add(7);
set.add(0);

console.log(set);

set.delete(7);
console.log(set);


//Map和Set是ES6标准新增的数据类型，请根据浏览器的支持情况决定是否要使用。


//iterable类型

//Array、Map和Set都属于iterable类型。
var newA = ["23",233,true];
newA.name = "hhh";
for(var x in newA){
	console.log(`forin结果为：${x}`);  //forin结果为：0 forin结果为：1 forin结果为：2  forin结果为：name
}

for(var x of newA){
	console.log(`forof结果为：${x}`);  //forof结果为：23 forin结果为：233 forin结果为：true
}

var newB = ["23",233,true];
//iterable内置的forEach方法--Array
newB.forEach(function(E,I,A){
	// E: 指向当前元素的值
    // I: 指向当前索引
    // A: 指向Array对象本身
    console.log(`元素：${E},索引：${I},对象：${A}`);
});


var newS = new Set([1,2,3,4,5,"a",false]);
//iterable内置的forEach方法--Set  Set没有索引，因此回调函数的前两个参数都是元素本身
newS.forEach(function(E,I,A){
	// E: 指向当前元素的值
    // I: 指向当前元素的值
    // A: 指向Set对象本身
    console.log(`元素：${E},索引：${I},对象：${A}`);
});


var newM = new Map([[1,2],[3,4],[5,"a"],["boolean",false]]);
//iterable内置的forEach方法--Map  Map的回调函数参数依次为value、key和map本身：
newM.forEach(function(E,I,A){
	// E: value
    // I: key
    // A: 指向Map对象本身
    console.log(`value：${E},key：${I},对象：${A}`);
});







