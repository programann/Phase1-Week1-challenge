//function that Fiters and returns all prime numbers

function primeInteger(arr){
    let result = [];
    //Using for of loop method
    for(value of arr){
        //All prime numbers are not divisible by 2 and 3 hence should have a remainder
        //Number 1 not prime number 
        if((value % 2) !== 0 && (value % 3) !== 0 && value !== 1 || value === 3 || value === 2){
            result.push(value)
        }
    }
    return result;
}
