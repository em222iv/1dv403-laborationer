"use strict";

var makePerson = function(persArr){


	// Din kod här...
    var personAges,
    personNames,
    totalSum,
    personObj = {};
    
    //map skapar en array av namnen i persArr
    personNames = persArr.map(function(personName){
        return personName.name;
    });
    //sortar personames arrayen så att den tar med å ä ö
    personObj.names = personNames.sort(function(a, b){
        return a.localeCompare(b)});

    //konkatinerar en strängen av namnen med ", " emellan
    personObj.names = personNames.reduce(function(prevName, name){
        return prevName + ", " + name;
    });

    //Skapar en array som tar ut alla age från persArr arrayen
    personAges = persArr.map(function(person){
        return person.age;
    });
    //tillderlar minAge i objektet det minsta värdet av åldrarna
    personObj.minAge = personAges.reduce(function(prevAge, age){
        return Math.min(prevAge, age);
    });
    // - : - högsta
    personObj.maxAge = personAges.reduce(function(prevAge, age){
        return Math.max(prevAge, age);
    });
    //tar fram totalen 
    totalSum = personAges.reduce(function(prevAge, age) {
        return prevAge + age;
    });
    //skickar in averageAge i objektet som fått fram medelåldern
    personObj.averageAge = Math.round(totalSum/personAges.length);
    
    return personObj;
    
};

  