"use strict";

    var Validator = {
        exist: null,
        
        validation : function() {
        
        var nameCheck=document.getElementById("name");
        nameCheck.onblur = function() {
            
            if(nameCheck.value === null || nameCheck.value === "") {
                var errormessage=document.getElementById("errormessage");
                
                if(!this.exist){
                    var p = document.createElement("p");
                    
                    var errorMessage=document.createTextNode("FEL! skriv ditt namn");
                    p.id = "error";
                    p.appendChild(errorMessage);
                    errormessage.appendChild(p);
                    this.exist = true;
                }
                }
                else{
    
                    var getErrorMsg = document.getElementById("error");
                    getErrorMsg.parentNode.removeChild(getErrorMsg);  
                    this.exist = null;
                }
            };
        
            
        var surNameCheck=document.getElementById("surname");
        surNameCheck.onblur = function(){
            
    
            if(surNameCheck.value === null || surNameCheck.value === "") {
            var errormessage1=document.getElementById("errormessage1");
                
                if(!this.exist){
                    var p = document.createElement("p");
                    
                    var errorMessage1=document.createTextNode("FEL! skriv ditt efternamn");
                    p.id = "error1";
                    p.appendChild(errorMessage1);
                    errormessage1.appendChild(p);
                    this.exist = true;
                }
                }
                else{
    
                    var getErrorMsg = document.getElementById("error1");
                    getErrorMsg.parentNode.removeChild(getErrorMsg);  
                    this.exist = null;
                }
        };

        var postCodeCheck=document.getElementById("postalcode");
        postCodeCheck.onblur = function() {
            
        var post = postCodeCheck.value.replace(/[^0-9]/g,"");
        var reg = /^\d{5}$/;
            
        if(reg.test(post) === true) {
            postCodeCheck.value = post;
            var getErrorMsg = document.getElementById("error2");
            getErrorMsg.parentNode.removeChild(getErrorMsg);  
            this.exist = null;
        }
        else if(reg.test(post) === false) {
    
        console.log(reg.test(post));
               // post = postCodeCheck.replace("SE","");
                //postCodeCheck = postCodeCheck.replace(" ", "");
                
                //(/^\d{3}\d{2}$/) || postCodeCheck.value.match(/^[SE]+\d{5}$/)|| postCodeCheck.value.match(/^[SE]+\d{5}$/)
        
        var errormessage2=document.getElementById("errormessage2");
                
        if(!this.exist){
            var p = document.createElement("p");
                    
                var errorMessage2=document.createTextNode("FEL! skriv ditt postnummer");
                p.id = "error2";
                p.appendChild(errorMessage2);
                errormessage2.appendChild(p);
                this.exist = true;
            }
        }
    /*else{

            var getErrorMsg = document.getElementById("error2");
            getErrorMsg.parentNode.removeChild(getErrorMsg);  
            this.exist = null;
            }*/
        };
            var emailCheck=document.getElementById("email");
            emailCheck.onblur = function() {
            
                if(!emailCheck.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) || emailCheck.value === "") {
                    var errormessage3=document.getElementById("errormessage3");
                
                if(!this.exist){
                    var p = document.createElement("p");
                    
                    var errorMessage3=document.createTextNode("FEL! skriv ditt postnummer");
                    p.id = "error3";
                    p.appendChild(errorMessage3);
                    errormessage3.appendChild(p);
                    this.exist = true;
                    }
                }
                else{
                    var getErrorMsg = document.getElementById("error3");
                    getErrorMsg.parentNode.removeChild(getErrorMsg);  
                    this.exist = null;
                } 
            };
        },
    };

window.onload = function() {
  Validator.validation();
    
};
