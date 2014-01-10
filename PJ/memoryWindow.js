"use strict";

    var memoryPopupWindow = function() { 
      
        
      
        var memoryBody = document.getElementById("body");
        var memoryPopup = document.createElement("div");
        var memoryHeader = document.createElement("popupHeader");
        var memoryFooter = document.createElement("popupFooter");
        var memoryCancelButton = document.createElement("button");
        var memoryContainer = document.createElement("div");
        var enlargememoryWindow = document.createElement("enlargeRssWindow");
        var regularmemorySizeWindow = document.createElement("regularRssSizeWindow");
        
        memoryCancelButton.className = "cancelButton";
        memoryContainer.className = "rssContainer";
        memoryPopup.className = "popupWindow";
        memoryCancelButton.setAttribute("click");
        enlargememoryWindow.className = "enlargeRssWindow";
        regularmemorySizeWindow.className = "regularRssSizeWindow";


        
       
        memoryHeader.appendChild(enlargememoryWindow);
        memoryHeader.appendChild(regularmemorySizeWindow);
        memoryHeader.appendChild(memoryCancelButton);
        memoryPopup.appendChild(memoryHeader);
        memoryPopup.appendChild(memoryContainer);
        memoryPopup.appendChild(memoryFooter);
        memoryBody.appendChild(memoryPopup);
        memoryBody.insertBefore(memoryBody.firstChild);
        
        regularmemorySizeWindow.onclick = function() { 
            memoryPopup.style.height = "400px";
            memoryPopup.style.width = "365px";
            memoryContainer.style.height = "345px";
            memoryContainer.style.width = "330px";
        };
        
        enlargememoryWindow.onclick = function() { 
            memoryPopup.style.height = "450px";
            memoryPopup.style.width = "620px";
            memoryContainer.style.height = "345px";
            memoryContainer.style.width = "580px";
            
        }; 
        
        memoryCancelButton.onclick = function() { 
            console.log(memoryPopup);
            memoryPopup.parentNode.removeChild(memoryPopup);
          
        };
    };
  