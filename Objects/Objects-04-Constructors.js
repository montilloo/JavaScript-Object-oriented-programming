/**
 * constructor function
 * 当我们使用new关键字的时候，有些事情在背后发生了，首先，new关键字会创建一个空的对象，其次它会设置this指向这个对象，因为默认情况下this指向全局对象(global object)。在浏览器环境下执行以上代码，this指向Circle，去掉new 操作符调用，this指向window。最后它从函数返回这个对象，所以留意到这里我们并没有声明return的内容。你不用`return this`，这些在使用new操作符的时候自动发生了。
 * @param radius
 * @constructor
 */
function Circle(radius) {
	// console.log(this, 'this');
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const another = new Circle(1);
another.draw();
