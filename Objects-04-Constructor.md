# 构造函数创建对象

```
    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
   
   const another = new Circle(1);
```

当我们使用new关键字的时候，有些事情在背后发生了，new关键字会创建一个空的对象，然后它会设置this指向这个对象，因为默认情况下this指向全局对象(global object)。在浏览器环境下执行以上代码，this指向Circle，去掉new 操作符调用，this指向window。
