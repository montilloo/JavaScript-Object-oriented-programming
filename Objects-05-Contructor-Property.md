# Contructor Property

每个Javascript中的对象都有一个叫做构造函数的属性，它是一个用于创建这个对象的构造方法的引用。

```javascript
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		}
	}
}

const circle = createCircle(1);
console.log(another.constructor); // [Function: Object]
```

```javascript
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}

const another = new Circle(1);
console.log(circle.constructor); //[Function: Circle]
```

当我们使用创建对象语法来创造对象的时候，Javascript内部使用了这个构造函数，声明如下一个对象：

```javascript
let x = {}
```

实际上发生的行为是：

```javascript
let x = new Object(); 
```

在内部它是被这个Object对象的构造函数创建的，Javascript当中还有一些其他的构造函数，比如：

```javascript
new String();
new Boolean();
new Number();
```

每个对象都有一个构造函数属性，这个属性引用了用来创建这个对象的构造函数。

