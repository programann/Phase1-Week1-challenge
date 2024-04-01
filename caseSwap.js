//Create and name a function.
function caseSwap(input) {
    //We declare an empty string.
    let swappedStr = "";
    //Use loop method to iterate over every letter
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        //Conditionals for the letters at uppercase to be changed to lowercase and vice versa
        if (letter === letter.toUpperCase()) {
            swappedStr += letter.toLowerCase();
        } else if (letter === letter.toLowerCase()) {
            swappedStr += letter.toUpperCase();
        } 
    }
    return swappedStr;
}

