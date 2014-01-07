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
        var resetBackground = document.createElement("resetButton")
     
        var counter = 0;
        var resetBackgroundText = document.createTextNode("Reset background");
        
        cancelButton.className = "cancelButton";
        resetBackground.className = "resetBackground";
        popup.className = "popupWindow";
     
        cancelButton.setAttribute("click");
        resetBackground.setAttribute("click");
      
        var xhr = new XMLHttpRequest();
        var thumboImgContainer = document.createElement("div");
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
                        thumboImgContainer.setAttribute("class", "thumbImgContainer");
                        thumbImg.setAttribute("class", "thumbImg");
                        thumbImg.setAttribute("id", "thumbImg" + counter++);

                        thumbImg.onclick = function(x) { 
                        
                            var URLimg = x.target.id.replace("thumbImg", ""); 
                            //var URLimg = document.getElementById("thumbImg", counter); 
                            var setBackground = jsonImageReciever[URLimg].URL;
                            var main = document.getElementById("main");
                            main.style.backgroundImage = "url(" + setBackground + ")";
                            console.log(URLimg);
                        };
                    }
                }
            }  
        };
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
        resetBackground.appendChild(resetBackgroundText);
        header.appendChild(cancelButton);
        header.appendChild(resetBackground);
        popup.appendChild(header);
        popup.appendChild(thumboImgContainer);
        popup.appendChild(footer);
        body.appendChild(popup);
        body.insertBefore(body.firstChild);
        
        resetBackground.onclick = function() { 
            that.main = document.getElementById("main");
            that.main.style.backgroundImage = "url('img/background.jpg')";
        };
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
