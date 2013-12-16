"use strict";

    var Validator = {
    
     nameCheck: function() {
        
        var inputCheck = document.getElementsByClassName("emptyName");
        
        for (var i = 0; i < inputCheck.length; i++) {
            inputCheck[i].onblur = function() {
                this.check();
                console.log('hej');
            };
        }
     },
    
    
    check: function() {
        var inputCheck = document.getElementsByClassName("emptyName");
        var name = document.forms.formname.name.value;
        var surName = document.forms.formname.surname.value;
        var nameCheck = /[\w\-'\s]+/;
        var postCode = document.forms.formname.postalcode.value;
        var email = document.forms.formname.email.value;
        var error = 'error'
    
        /*REGEXVALIDERNG FÖR NAMN
         var nameCheck = /[\w\-'\s]+/;
         if(name !== nameCheck || surName !== nameCheck) {
            alert('Skriv in ditt namn');
            return false;
        }*/
        //namn och förnamn
        if(name === null || name === ""){
            alert('Skriv in ditt namn');
            return false;
        }
        if(surName === null || surName === "") {
            alert('Skriv in ditt efternamn');
            return false;
        }
        //postkod OLIKA FORMAT?
        var postcodeCheck =  /^\d{3} \d{2}$/;
        if(postcodeCheck.test(postCode)) {
            alert('hek');
            return false;
        }
        //email, FUNKAR
        var emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if (!emailCheck.test(email)) { 
            alert('Please provide a valid email address'); 
            return false;
        }
    }
    
    
    //<small class="error">Ange en giltig e-mail adress.</small>
    };
window.onload = function() {
    Validator.nameCheck();
};