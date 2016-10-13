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




