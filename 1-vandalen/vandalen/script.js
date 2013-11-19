"use strict";

var makePerson = function(persArr){


	// Din kod här...
    var personAges,
    personNames,
    totalSum,
    personObj = {};
    
    
    personNames = persArr.map(function(personName){
        return personName.name;
    });

    personObj.names = personNames.sort(function(a, b){
        return a.localeCompare(b)});


    personObj.names = personNames.reduce(function(prevName, name, i, personNames){
        return prevName + ", " + name;
    });

    console.log(personNames);
    

    //personObj.names = personNames;
    
    //Skapar en array som tar ut alla age från persArr arrayen
    personAges = persArr.map(function(person){
        return person.age;
    });
    
    personObj.minAge = personAges.reduce(function(prevAge, age, i, personAges){
        return Math.min(prevAge, age);
    });
    
    personObj.maxAge = personAges.reduce(function(prevAge, age, i, personAges){
        return Math.max(prevAge, age);
    });
    
    totalSum = personAges.reduce(function(prevAge, age, i, personAges) {
        return prevAge + age;
    });
    
    personObj.averageAge = Math.round(totalSum/personAges.length);
    //console.log(personAges); 
    
    return personObj;
    
};

  