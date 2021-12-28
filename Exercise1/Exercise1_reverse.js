// Write a JavaScript Function  that reverse a number 

// const reverse = (num) => parseInt(String(num)
// .split("")
// .reverse()
// .join(""));
// console.log(reverse(12345));


// Anomoyous Function

// const reverse = (num) => (String(num).split("").reverse().join(""));
// console.log(reverse(12345));

var reverse = function(num)
{
    var a,b,c;
    a= String(num)
    b=a.split("")
    c= b.reverse();
    d= c.join("")
    return d;
}
console.log(reverse(12345))