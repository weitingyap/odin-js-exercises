const findTheOldest = function(people) {
    let maxAge = -1;
    let oldestPerson;
    const currYear = new Date().getFullYear();

    for (let person of people){

        let age; 
        if (person.yearOfDeath != undefined) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currYear - person.yearOfBirth;
        }

        if (age > maxAge){
            maxAge = age; 
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
