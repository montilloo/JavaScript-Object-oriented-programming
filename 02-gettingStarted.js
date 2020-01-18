/**
 * 面向过程的方式计算员工薪水
 */
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
	return baseSalary + (overtime * rate);
}


/**
 * 面向对象的思想计算员工薪水
 * @type {{rate: number, baseSalary: number, getWage(): *, overtime: number}}
 */
let employee = {
	baseSalary: 30_000,
	overtime: 10,
	rate: 20,
	getWage() {
		return this.baseSalary + (this.overtime * this.rate);
	}
};

employee.getWage();

// 在面向过程的代码中，函数调用需要带有参数，而在面向对象的代码中，不需要参数即可调用。这是因为所有这些参数实际上都被建模为这个对象的属性。所有这些属性和计算工资的方法，它们是高度相关的，因此它们是一个单元的一部分。


