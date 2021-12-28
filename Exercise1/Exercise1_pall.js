//  Write a Javascript function that check weather a passed string is palindrom or not?

// A Pallindrome is  a word ,phrase , or sequence that reads a same backward as forward,
// e,g :- madam or nurses ,run 


//  Anomoyous Function
// var pal = function(str) {
//     var a,b,c,d;
//     a = String(str)
//     b= a.split("")
//     c= b.reverse()
//     d = c.join("")
//     if (a==d)
//     {
//         console.log("str is pall")
//     }
//     else
//     {
//         console.log(" not pall")
//     }
// }
// console.log(pal("madam"))

// Arrow Function

var pd =(str)=>{
    var a=String(str)
    var b=b=a.split("").reverse().join("")
    if(a==b)
    {
        console.log("str is pd")
    }
    else
    {
        console.log("str not pd")
    }
}
console.log(pd("jenil"))


