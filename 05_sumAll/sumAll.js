const sumAll = function(startInt, endInt) {
    // Use Gauss summation: sum of n consecutive numbers can be calculated by
    // n/2 * (starting number + ending number)

    if (typeof endInt != 'number' || typeof startInt != 'number'){
        return 'ERROR';
    }

    if (startInt < 0 || endInt < 0){
        return 'ERROR';
    }

    if (startInt != Math.floor(startInt) || endInt != Math.floor(endInt)){
        return 'ERROR';
    }

    if (endInt < startInt){
        let _ = endInt;
        endInt = startInt;
        startInt = _;
    }

    let numAddends = endInt - startInt + 1;
    return numAddends/2 * (startInt + endInt);
};

// Do not edit below this line
module.exports = sumAll;
