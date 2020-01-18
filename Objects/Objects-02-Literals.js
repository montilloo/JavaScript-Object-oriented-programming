/**
 * 使用对象字面法创建一个对象。一个JavaScript对象实际上是一组键值对的集合。这个circle对象有3个成员，如果一个成员是函数我们就称它为方法(method)，其他的成员我们称之为属性，在有些JavaScript培训中把它们都称之为属性，但是技术上在OOP对象当中属性和方法从基础层面上都是不同的，因为属性是用来保存值的，函数或者方法是用来定义一些逻辑的。
 */
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
	draw: function() {
		console.log('draw');
	}
};

// 同时我们也可以使用工厂函数和构造函数创建对象，这就是下一节的内容。