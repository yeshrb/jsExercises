/**
 * Created by ljj on 2016/10/13.
 * 函数的call方法和apply的方法：第一个参数是函数的所有者对象，call的后继参数是传入函数的实参，apply是需要传入一个数组
 */

function Point(x,y) {
    this.x = x;
    this.y = y;
    this.toString = function () {
        return "( "+[x,y]+" )";
    };
}

function Vector(x,y) {
    this.x = x;
    this.y = y;
    this.toString = function () {
        return "[ "+[x,y]+" ]";
    };
}
function add(x,y) {
    return new this.constructor(this.x +x,this.y+y);
}
var p = new Point(2,3);
var v = new Vector(1,2);
console.log("p: " + p);
console.log("v: " + v);

var p1 = add.call(p,p.x,p.y);
var v1 = add.apply(v,[p.x,p.y]);

console.log("p1: " + p1);
console.log("v1: " + v1);