"use strict";

window.onload = function(){
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	// 
	if(str === "")
	{
	throw {message: 'Skriv något i för konvertering'};
	}
	
	var sArray = [],
    sconvert = "";
    //matchar str index med alla stora bokstäver
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/([A-ZÅÄÖ])/g)) {
            //Hittar alla stora bokstäver i strängen och gör om dem till små och placerar dem i en variabel
            sArray[i] = str[i].replace(/([A-ZÅÄÖ])/g, str[i].toLowerCase());
        }
        else{
            //Hittar alla små bokstäver och gör om dem till stora och placerar dem i en variabel
            sArray[i] = str[i].replace(/([a-zåäö])/g, str[i].toUpperCase());
        }
    }
    for (var u = 0; u < sArray.length; u++) {
        //Gör om hela arrayen (sArray) och till en enda sträng
        sconvert += sArray[u];
    }
   //convertedString = sconvert strängen med alla a/A utbytta till #
   var convertedString = sconvert.replace(/A/gi,"#");
   return convertedString;
   
    /*console.log(res);
    
	var upperCase = str.replace(/[A-Z]/g, '');
    console.log(upperCase);
    
    for (var i = 0; i < res.length; i++) {
        upperCase.toLowerCase();
    }
    
*/
    };



	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});

};