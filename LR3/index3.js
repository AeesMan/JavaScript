function isPrime(n) 
{
    let sum = 0
    if(n > 0)
    {
        for (let i = 1; i < n; i++) 
            { 
                
                sum = sum + sum+1
                console.log(sum)
            }
    }
    else if(n < 0)
    {
        for (let i = 1; i < -n; i++) 
        { 
            sum = sum + sum -1
            console.log(sum)
        }
    
    }
}
let n = prompt('Введіть число');
console.log( isPrime(n))