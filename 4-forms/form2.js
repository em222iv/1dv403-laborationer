"use strict";

    var Validator = {
 
        validation : function() {
    
        var fails = false;
        
        var nameCheck=document.getElementById("name");
        nameCheck.onblur = function() {
            
            if(nameCheck.value === null || nameCheck.value === "") {
        
                var errormessage=document.getElementById("errormessage");
                var errorMessage=document.createTextNode("FEL! skriv ditt namn");
                errormessage.appendChild(errorMessage);
                return false;
            }
            
           // Validator.blurred.errorMessage.parentNode.removeChild(Validator.blurred.errorMessage);
            
        }
        
        var surNameCheck=document.getElementById("surname");
        surNameCheck.onblur = function(){
            
    
            if(surNameCheck.value === null || surNameCheck.value === "") {
            
                var errormessage1=document.getElementById("errormessage1");
                var errorMessage1=document.createTextNode("FEL! skriv ditt efternamn");
                errormessage1.appendChild(errorMessage1);
                return false;
            }
        }

        
            var postCodeCheck=document.getElementById("postalcode");
            postCodeCheck.onblur = function() {
            
                if(!postCodeCheck.value.match(/^\d{3} \d{2}$/) ||postCodeCheck.value === null || postCodeCheck.value === "") {
                    
                    var errormessage2=document.getElementById("errormessage2");
                    var errorMessage2=document.createTextNode("FEL! skriv din postkod");
                    errormessage2.appendChild(errorMessage2);
                    return false;
                }
        }
        
        
            var emailCheck=document.getElementById("email");
            emailCheck.onblur = function() {
            
                if(!emailCheck.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) || emailCheck.value === "") {

                    var errormessage3=document.getElementById("errormessage3");
                    var errorMessage3=document.createTextNode("FEL! skriv din E-post adress");
                    errormessage3.appendChild(errorMessage3);
                   
                    return false;
                }        
        }
        
        
        var formbutton = document.getElementById("formname");
        formbutton.onsubmit = function(){
    
        }
    }
};

window.onload = function() {
  Validator.validation();
    
};
