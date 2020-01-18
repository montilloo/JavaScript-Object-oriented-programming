/**
 * 以下创建的对象在JavaScript中是动态的，这意味着你可以在创建对象后添加或者删除属性，还有一种设置location属性的方法就是使用方括号[].点操作符写法比方括号简单点，但是方括号写法在实际场景中也是很有用的，比如你想动态的访问一个属性名，在编写代码的时候我们不知道想要访问的属性名称，它是在运行时产生的就可以使用方括号语法。使用方括号的另一个场景就是你使用的属性名称是不符合语法规则的，如果属性名称是'center-location'，我们是不可以使用circle.center-location来访问属性的，如果有特殊字符或者空格，就可以使用方括号语法来访问。删除对象的一个属性，使用delete关键字。
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
circle.location = { x: 1 };
circle['location'] = { x: 1 };
const propertyName = 'location';
circle[propertyName] = { x: 1 };

delete circle.location;
// delete circle['location'];
