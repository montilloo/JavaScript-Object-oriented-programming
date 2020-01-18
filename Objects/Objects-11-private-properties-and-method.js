/**
 * Javascript中的必包概念：在Circle函数内还有一个draw函数，在draw函数中我们声明本地变量x和y，它们只能在draw函数中使用，它们的作用域被限制在draw函数。当这个函数结束，x和y就被♻️。闭包定义了某些变量可以被其内部函数访问。我们在Circle函数内定义的defaultLocation和computeOptimumLocation都可以被draw函数访问。它俩都是父级函数定义的变量，他们都在这个函数的作用域内。不要和作用域混淆，因为作用域是临时的，使用完就销毁的。每次我们调用draw方法，这两个变量都会重新创建和声明，但闭包是常驻的。我们调用完draw函数之后，defaultLocation和computeOptimumLocation变量仍然留在内存中。
 *
 * 如果想要访问circle的成员，就需要使用this修饰符
 * @param radius
 * @constructor
 */
function Circle(radius) {
	this.radius = radius;
	let defaultLocation = { x: 0, y: 0 };
	let computeOptimumLocation = function(factor) {
		// ...
	};
	this.draw = function () {
		let x, y;
		computeOptimumLocation();
		console.log('draw');
		// defaultLocation
	}
}

const circle = new Circle(10);
circle.draw();
