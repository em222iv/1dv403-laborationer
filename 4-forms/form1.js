"use strict";

    var Validator = {
 
        Names: function() {
            //var inputCheck = document.getElementsByClassName("emptyName");
            var name = document.forms.formname.name.value;
            var surName = document.forms.formname.surname.value;
            
            if(name === null || name === "") {
                alert('Skriv in ditt namn');
                return false;
            }
            if(surName === null || surName === "") {
                alert('Skriv in ditt efternamn');
                return false;
            }
        },
      
        //var nameCheck = /[\w\-'\s]+/;
        
     /*   postcode: function() {
            var postCode = document.forms.formname.postalcode.value;
            var postcodeCheck =  /^\d{3} \d{2}$/;
            //if(!postcodeCheck.test(postCode)) {
            if(postCode === postcodeCheck){
                alert('hek');
                return false;
            }
        },
            
        email: function() {
            var email = document.forms.formname.email.value;
            var emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
            if (!emailCheck.test(email)) { 
                alert('Please provide a valid email address'); 
            return false;
            }
        }*/
    };//erromessage
    //<small class="error">Ange en giltig e-mail adress</small>
function blurred(){
    var x=document.getElementById("name");
    if(x.value === null || x.value === "") {
        alert('lol');
    }
}
function blurred1(){
    var x=document.getElementById("surname");
    if(x.value === null || x.value === "") {
        alert('lo1');
    }
}
/*Validator.Names.onblur = function() { 
    if (Validator.Names.value === null) 
    {
        alert("test");
    }
};*/
window.onload = function() {
    
    Validator.Names();
    
    //Validator.postcode();
    //Validator.email();
};


   /*nameCheck: function() {
        
    }
        
        var inputCheck = document.getElementsByClassName("emptyName");
        
        for (var i = 0; i < inputCheck.length; i++) {
            inputCheck[i].onblur = function() {
                this.check();
                console.log('hej');
            };
        }*/
        