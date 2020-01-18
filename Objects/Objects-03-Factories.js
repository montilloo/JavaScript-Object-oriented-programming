/**
 * 将在对象字面量方式创建的对象在函数中返回,将之前硬编码的radius以参数的形式传递
 */
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	}
}

const circle = createCircle(1);
circle.draw();
