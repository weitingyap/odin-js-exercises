const repeatString = function(string, numRepeats) {
    console.log(typeof numRepeats);

    if (typeof numRepeats != 'number' || numRepeats < 0) return "ERROR";

    let repeatString = "";
    for (let i = 0; i < numRepeats; i++){
        repeatString += string;
    }
    
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
