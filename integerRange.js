//Creating a function 
function integerRange(startValue,endValue){
    //startVaue and endValue are the parameters of the range of numbers in the array.
    let array = [];
    //Use loop method to recursively repeat value of i while incrementng its value.
    for(let i = startValue;i <= endValue ;i++){
        array.push(i)
    }
    return array;
}