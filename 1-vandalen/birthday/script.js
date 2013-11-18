"use strict";

window.onload = function(){
    var birthday = function(date){
        
    //var dateArray = date.split('-');
    var CurrentTime = new Date();

    var dt = new Date(date.replace(/(\d{2})\-(\d{2})\-(\d{4})/));
    
    
    var days = ((dt - CurrentTime.getTime())/(1000*60*60*24));
    
    var rdays = Math.ceil(days);
    if(days <= -1)
    {
        throw {message: 'Du kan inte ange ett datum som redan vart'};
    }
    return rdays;
    
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
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});
    //var month = the day CurrentTime.getMonth;
    //var months = ((theday.getTime() - CurrentTime.getTime())/(1000*60*60*24*30)) % 12;
    //var years = ((theday.getTime() - CurrentTime.getTime())/(1000*60*60*24*30*12));
        /*if(years < 1)
    { 
    console.log('Det är '+ months.toFixed(0) +' månader, och '+ days.toFixed(0) +' dagar kvar');
    }
    else
    {
    console.log('Det är '+ years.toFixed(0) +' år, '+ months.toFixed(0) +' månader, och '+ days.toFixed(0) +' dagar kvar');
    }*/


};