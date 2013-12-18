"use strict";

    var Validator = {
        exist: null,
        errorArray:  null,
     
        validation : function() {
        
        var nameCheck=document.getElementById("name");
        nameCheck.onblur = function() {
            
            if(nameCheck.value === null || nameCheck.value === "") {
                var errormessage=document.getElementById("errormessage");
                
                if(!this.exist){
                    var p = document.createElement("p");
                    var errorMessage=document.createTextNode("FEL! skriv ditt namn");
                    p.id = "error";
                    p.className = "empty"
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
                    p.className = "empty"
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
                p.className = "empty"
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
                    p.className = "empty"
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
        onbutton: function() {
            var main = document.getElementById("main");
            var divbutton = document.createElement("div");
            var dim = document.createElement("div");
            var popupButton = document.createElement("button");
            var popupCancelButton = document.createElement("button");
            var buttonText = document.createTextNode("Bekräfta köp");
            var buttonCancelText = document.createTextNode("Avbryt köp");
            
            
            var form = document.getElementById("formname");
            var fname = document.createTextNode(form.elements.name.value);
            var sname = document.createTextNode(form.elements.surname.value);
            var postalcodename = document.createTextNode(form.elements.postalcode.value);
            var emailname = document.createTextNode(form.elements.email.value);
            
            var selectoption = document.getElementById("select");
            
            
            console.log(fname,sname,postalcodename,emailname);
    
            console.log(option);
            
            dim.setAttribute("id", "db");
            divbutton.setAttribute("id", "myModal");
            divbutton.setAttribute("class", "reveal-modal");
            
            divbutton.style.visibility = "visible";
            divbutton.style.display = "block";
        
            popupButton.appendChild(buttonText);
            popupCancelButton.appendChild(buttonCancelText);
            
        var table = document.createElement("table");
        var tagName = document.getElementsByTagName("input");
        
        
        for (var i = 0; i < tagName.length; i++) {
            var input = tagName[i].getAttribute("name");
            var inputValue = tagName[i].value;
            
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var tdI = document.createElement("td");
            var text = document.createTextNode(input);
            var textValue = document.createTextNode(inputValue);
        
            td.appendChild(text);
            tdI.appendChild(textValue);
            tr.appendChild(td);
            tr.appendChild(tdI);
            table.appendChild(tr);
        }
        var select = document.getElementById("select");
        var selectName = select.getAttribute("name");
        var option = document.createTextNode(selectoption.options[selectoption.selectedIndex].value);
        var textName = document.createTextNode(selectName);
        var tdO = document.createElement("td");
        var tdName = document.createElement("td");
        var trSecond = document.createElement("tr");
        
        tdName.appendChild(textName);
        tdO.appendChild(option);
        trSecond.appendChild(tdName);
        trSecond.appendChild(tdO);
        table.appendChild(trSecond);
        divbutton.appendChild(table);
        
     
        divbutton.appendChild(popupButton);
        divbutton.appendChild(popupCancelButton);
  
        main.appendChild(divbutton);
        main.insertBefore(dim, main.firstChild);
    
        popupButton.addEventListener("click", function() {
           document.getElementById("formname").submit();
           
        }, false);
        
        popupCancelButton.addEventListener("click", function() {
            divbutton.parentNode.removeChild(divbutton);
            dim.parentNode.removeChild(dim);
           
        }, false);

        },
        dim: function() {
            document.getElementById("button").style.display="block";
        },
        onsubmit : function(){
        
            var that = this;
            var button = document.getElementById("button");
            button.addEventListener("click", function() {
                that.errorArray = document.querySelectorAll(".empty");
                console.log(that.errorArray);
                if(that.errorArray.length === 0){
                    that.onbutton();
                    that.dim();
                }
                
            },false);
        }
    };

window.onload = function() {
  Validator.validation();
  Validator.onsubmit();
    
};
