let number = 10;

/**
 * 当调用increse函数并传入number变量的时候，这个值被复制到函数的本地参数number里面，所以这个number变量和外面的number变量是完全无关的，函数里的number被加1，所以它应该是11。但是当这个函数一结束，这个number就不在作用域里了。打印出的number实际是第一个number。这两个number其实是两个独立的变量。
 * @param number
 */
function increse(number) {
	number++;
}

increse(number);
console.log(number); // 10




let obj = { value: 10 };

/**
 * 函数内本地的obj变量通过引用地址，指向了与外面定义的obj同样的对象，我们对这个对象做的任何修改对其他的变量都是可见的。
 * @param obj
 */
function anotherIncrese(obj) {
	obj.value++;
}
anotherIncrese(obj);
console.log(obj.value);
