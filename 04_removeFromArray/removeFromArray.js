const removeFromArray = function(origArray, ...toBeRemoved) {
    revisedArray = [];
    for (const element of origArray){
        if (!toBeRemoved.includes(element)) {
            revisedArray.push(element);
        }
    }
    return revisedArray;
};

// Do not edit below this line
module.exports = removeFromArray;