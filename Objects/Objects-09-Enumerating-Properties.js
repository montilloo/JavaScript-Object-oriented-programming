/**
 * 有时候你需要遍历或者枚举对象的属性
 * @param radius
 * @constructor
 */
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const circle = new Circle(10);

// 使用for...in循环遍历对象属性，不管是属性还是方法都返回了。
for (let key in circle) {
	console.log(key);
}
// 如果指向遍历属性呢？
for (let key in circle) {
	if (typeof circle[key] !== 'function')
		console.log(key);
}

// 另外一种遍历对象的方法，Object.keys()，以这种方式我们没法区分属性和方法
const keys = Object.keys(circle);
console.log(keys);

// 想知道一个对象有没有给定的属性？我们可以使用in操作符
if ('radius' in circle)
	console.log('Circle has a radius');
