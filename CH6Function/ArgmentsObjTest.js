/**
 * Created by ljj on 2016/10/13.
 * 函数f的f.length能够得到函数参数的个数。arguments对象是传入函数参数的集合，可基于下标访问
 */
'use strict';
function f(x,y,z) {
    if(f.length !== arguments.length) {
        throw new Error("function f called with "+arguments.length
            + "arguments,but it expects "+f.length +" arguments.");
    }
    else
        console.log("f( "+[x,y,z]+")");
};
let a = function () {
    try {
        f(1,2,3);
        f(2,4);
        f(4);
    } catch(ex) {
        console.log("Error: "+ ex.message);
    }
}();




