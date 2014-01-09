"use strict";

    var rssPopupWindow = function() { 
        var that = this;
        var rssBody = document.getElementById("body");
        var rssPopup = document.createElement("div");
        var rssHeader = document.createElement("popupHeader");
        var rssFooter = document.createElement("popupFooter");
        var rssCancelButton = document.createElement("button");
        
        rssCancelButton.setAttribute("click");
        
        rssHeader.appendChild(rssCancelButton);
        rssPopup.appendChild(rssHeader);
        rssPopup.appendChild(rssFooter);
        rssBody.appendChild(rssPopup);
        rssBody.insertBefore(rssBody.firstChild);
         
    
        rssCancelButton.onclick = function() { 
            rssPopup.className = "popupWindow";
            console.log(rssPopup);
            rssPopup.parentNode.removeChild(rssPopup);
            that.count = 0;
            };
        };

   
 