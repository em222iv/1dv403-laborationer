"use strict";

window.onload = function(){
	
	var myNumber = Math.floor( Math.random() * 99)+1; // Detta tal behöver bytas ut mot ett slumpat tal.
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var tries = 10;
	var guess = function(number)
	{
		/*console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.*/
        //räknar ner dina 10 gissningar
        tries--;
        
        // tar dina försök slut så returnar false
        if(tries <= 0){
            return [false, "Du har inga chanser kvar"];
        }
        /
        if (number < myNumber){
            return [false, "Det hemliga talet är högre! Du har " + tries + ' chanser kvar'];
        }
        if (number > myNumber)
        {
            return [false, "Det hemliga talet är lägre! Du har " + tries + ' chanser kvar'];
        }
        if (number == myNumber)
        {  
            return [true, "Grattis du vann! Det hemliga talet var " + myNumber + " och du hade " + tries + " gissningar kvar för att hitta det."];
        }
        
		// Plats för förändring.


		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du hade Y gissningar kvar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

	var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
    p.innerHTML = answer[1]; // Skriver ut texten från arrayen som skapats i funktionen.	
	input.value="";

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};