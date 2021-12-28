
var pd =function(str){
    var a,b,c,d
    a=String(str)
    b=a.split(" ")
    c=b.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    d=c.join(" ")
    return d;
}
console.log(pd("the quick brown fox "))