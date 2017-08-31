
//demo1
var foo = function (){
	console.log("from foo");
	return "over";
};
var fun = function (){
	var h = {
		name: "xiaoming",
		age: function(){
			var mAge = "from age";
			//此处的this指的是h对象
			return function(){
				var mInner = "inner";
				return mInner;  //此处的this 指的是window对象
			}
		}
	}
	return h;
}
console.log(fun().age()());