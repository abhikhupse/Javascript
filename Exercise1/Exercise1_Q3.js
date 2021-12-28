//  Write a Javascript function that generates all combinations of the strings
// Example :- 'dog'
// Expected output :- d,do,dog,o,og,g


var test = function(str)
{
    a=(str.length)
    for(i=0;i<a;i++)
    {
        for(j=i+1;j<a+1 ;j++)
        {
            console.log(str.substring(i,j))
        }

    }

}

console.log(test('dog'))
