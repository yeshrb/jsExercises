function f() {
    return this;
}

var a = new String("a");
var b = new String("b");

a.f = f;
b.f = f;

console.log(a.f());
console.log(b.f());