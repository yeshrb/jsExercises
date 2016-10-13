/**
 * Created by ljj on 2016/10/13.
 * 函数作为其他函数的返回值
 */

function add(a,b) {
    b = b || 0;
    var sum = a + b;

    var ret = function (n) {
        return add(n,sum);
    }

    ret.toString = ret.valueOf = function () {
        return sum;
    }

    return ret;
}

var f5 = add(5);
console.log(f5 +1);
console.log(f5(5)+1);
console.log(f5(5)(6)+1);