/**
 * Created by ljj on 2016/10/13.
 * 将函数赋值给某一对象的属性，可为函数指定所有者
 */
'use strict';
function Point(x,y) {
    this.x = x;
    this.y = y;
}
function Vector(x,y) {
    this.x = x;
    this.y = y;
}
function f() {
    console.log(this.constructor);
}

var p = new Point(1,2);
p.f = f;
p.f();
var v = new Vector(1,2);
v.f = f;
v.f();

