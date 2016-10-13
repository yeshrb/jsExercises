/**
 * Created by ljj on 2016/10/13.
 * 函数可以作为参数，传入其他函数
 */
function trans(list,op) {
    for(let i = 0; i < list.length; i++) {
        list[i] = op(list[i]);
    }

}
var list = [1,2,3,4];
trans(list,function (x) {
    return x + 1;
});
console.log(list);
trans(list,function (x) {
    return x * x;
});
console.log(list);