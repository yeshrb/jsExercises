function Fib(n,x,y) {
    var a = x|| 1;
    var b = y || 1;
    if(n===0) b=a;

    var t;
    for(let i = 2;i <= n+1; i++){
        t =b;
        b = a + b;
        a = t;
    }

    var ret = function (n,x,y) {
        x = x || a;
        y = y || b;
        return Fib(n,x,y);
    }

    ret.toString = ret.valueOf = function () {
        return a;
    }
    return ret;
}

var f6 = Fib(6);
console.log(f6);
console.log(f6(2));
