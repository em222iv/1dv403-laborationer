"use strict";

    
    var AJAX = {
   
    count : 0,
    popupWindow: function() { 
        var that = this;
        var body = document.getElementById("body");
        var popup = document.createElement("div");
        var header = document.createElement("popupHeader");
        var footer = document.createElement("popupFooter");
        var cancelButton = document.createElement("button");
        var overflowScroll = document.createElement("div");
        
        //var cancelButtonText = document.createTextNode("X");
        
        cancelButton.className = "cancelButton";
        popup.className = "popupWindow";
     
        cancelButton.setAttribute("click");
      
        var xhr = new XMLHttpRequest();
        
        var thumboImgContainer = document.createElement("div");
        var thumbImgDiv = document.createElement("div");
         thumboImgContainer.className = "thumbImg";
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    console.log(xhr.responseText);
            
                    var jsonImageReciever = JSON.parse(xhr.responseText);
             
                    for (var i = 0; i < jsonImageReciever.length; i++) {
                        

                        var imgWidth = Math.max(jsonImageReciever[i].thumbWidth);
                        var imgHeight = Math.max(jsonImageReciever[i].thumbHeight);
                        console.log(imgWidth, imgHeight);
                        
                        
                        var thumbImg = document.createElement("img");
                        
                        thumbImg.setAttribute("src", jsonImageReciever[i].thumbURL);
                        thumboImgContainer.appendChild(thumbImg);
                        jsonImageReciever[i].thumbURL.className = "thumbImgContainer";
                        
                        thumbImgDiv.setAttribute("class", "thumbImgDiv");
                        thumbImg.setAttribute("class", "thumbImg");
 
 
                        thumbImg.onclick = function() { 
                            
                            
                        };
                    }
                }
                else{
                    console.log("läsfel:" + xhr.status);
                }
            }  
        };
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
      
        
       // cancelButton.appendChild(cancelButtonText);
        header.appendChild(cancelButton);
        popup.appendChild(header);
        popup.appendChild(thumbImgDiv);
        popup.appendChild(overflowScroll);
        popup.appendChild(thumboImgContainer);
        popup.appendChild(footer);
        body.appendChild(popup);
        body.insertBefore(body.firstChild);
        
        cancelButton.onclick = function() { 
            popup.parentNode.removeChild(popup);
            that.count = 0;
            };
        }, 
            
   clickButton: function() {
            var that = this;
            var Gallery = document.getElementById("gallery");
            Gallery.addEventListener("click", function() {
                if (that.count !== 0) {
                    return;
                }
                that.count++;
                that.popupWindow();
            },false);
        }
    };
    window.onload = function() {
        AJAX.clickButton();
};
