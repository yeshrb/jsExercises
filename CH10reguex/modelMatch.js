/**
 * Created by ljj on 2016/10/14.
 * 正则表达式的模式匹配
 */
var str = "Visit www.51js.com!";
console.log(str.search(/51js/));

var str = "230107197501290857";
var pattern = /\d{6}([12]\d{3})([01]\d)([0123]\d)\d{4}/;
var regExp = new RegExp(pattern);
var id = regExp.exec(str);
console.log("id :" + id[0]);
console.log("Birthday: "+id[1]+"-"+id[2]+"-"+id[3]);
