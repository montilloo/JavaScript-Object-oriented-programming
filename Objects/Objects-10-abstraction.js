/**
 * 隐藏细节，只暴露必需.
 * computeOptimumLocation不应该随处都可调用
 * @constructor
 */
function Circle(radius) {
	this.radius = radius;
	this.defaultLocation = { x: 0, y: 0 };
	this.computeOptimumLocation = function(factor) {
		// ...
	};
	this.draw = function () {
		this.computeOptimumLocation();
		console.log('draw');
	}
}

const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();
