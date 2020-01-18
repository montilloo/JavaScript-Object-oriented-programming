/**
 * 函数内部变量defaultLocation从外部不可以访问，但是如果想要在应用程序某处显示这个defaultLocation怎么办？一种方式： 定义一个方法getDefaultLocation。第二种使用Object.defineProperty(),在set函数中还可以对即将设置的值进行验证
 * @param radius
 * @constructor
 */
function Circle(radius) {
	this.radius = radius;
	let defaultLocation = { x: 0, y: 0 };
	this.getDefaultLocation = function () {
		return defaultLocation;
	};
	this.draw = function () {
		let x, y;
		console.log('draw');
		// defaultLocation
	};

	Object.defineProperty(this, 'defaultLocation', {
		get() {
			return defaultLocation;
		},
		set(v) {
			if (!v.x || !v.y)
				throw new Error('Invalid location');
			defaultLocation = v;
		}
	})
}

const circle = new Circle(10);
circle.draw();
circle.getDefaultLocation();
console.log(circle.defaultLocation);
