'use strict'

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