"use strict";


    var memory = {
   
                       
    popupWindow: function() { 
        var body = document.getElementById("body");
        var popup = document.createElement("div");
        var header = document.createElement("popupHeader");
        var footer = document.createElement("popupFooter");
        var cancelButton = document.createElement("button");
        var cancelButtonText = document.createTextNode("X");
        
        cancelButton.className = "cancelButton";
        popup.className = "popupWindow";
        header.className = "windowHeader";
       

        cancelButton.setAttribute("click");
        
        cancelButton.appendChild(cancelButtonText);
        header.appendChild(cancelButton);
        popup.appendChild(header);
        popup.appendChild(footer);
        body.appendChild(popup);
        body.insertBefore(body.firstChild);
        
        cancelButton.onclick = function() { 
            popup.parentNode.removeChild(popup);
            };

        }, 
            
            
   clickButton: function() {
            var that = this;
            var Memory = document.getElementById("memory");
            Memory.addEventListener("click", function() {
                    that.popupWindow();
            },false);
        }
    };
        window.onload = function() {
            memory.clickButton();
};
