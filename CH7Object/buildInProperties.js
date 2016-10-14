/**
 * Created by ljj on 2016/10/14.
 * JS的对象都是同源的，对象的内置属性指的是它们作为Object实例所具有的属性，
 * 这些属性通常都是不可枚举的，因此无法用反射机制查看它们
 */

function ClassA() {
    this.a = 1;
}
function ClassB() {
    this.b = 5;
}
ClassB.prototype = new ClassA();

var objB = new ClassB();

console.log("a" in objB);
console.log("b" in objB);

//从原型继承来的属性不会被hasOwnProperty识别
console.log(objB.hasOwnProperty("a"));
//非继承属性可以被识别
console.log(objB.hasOwnProperty("b"));