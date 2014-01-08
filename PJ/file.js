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
        var resetBackground = document.createElement("resetButton");
        var resetBackgroundCount = 1;
        
     
        var counter = 0;
        var resetBackgroundText = document.createTextNode("Reset background");
        
        cancelButton.className = "cancelButton";
        resetBackground.className = "resetBackground";
        popup.className = "popupWindow";
     
        cancelButton.setAttribute("click");
        resetBackground.setAttribute("click");
      
        
       
           footer.style.backgroundImage = "url('img/ajax-loader.gif')";
        
  
        var xhr = new XMLHttpRequest();
        var thumbImgContainer = document.createElement("div");
        thumbImgContainer.className = "thumbImg";
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    console.log(xhr.responseText);
                   
                    var jsonImageReciever = JSON.parse(xhr.responseText);
                    var imgWidth;
                    var imgHeight;
                    for (var i = 0; i < jsonImageReciever.length; i++) {
                    
                        /*var imgHeight = Math.max(jsonImageReciever[i].thumbHeight);
                        console.log(imgWidth, imgHeight);*/
                        
                        if(jsonImageReciever[i].thumbWidth > 1 || jsonImageReciever[i].thumbWidth < 1000){
                         that.imgWidth = Math.max(jsonImageReciever[i].thumbWidth);
                        }
                        if(jsonImageReciever[i].thumbHeight > 1 || jsonImageReciever[i].thumbHeight < 1000){
                         that.imgHeight = Math.max(jsonImageReciever[i].thumbHeight);
                        }
                        console.log(that.imgWidth, that.imgHeight);

                        var thumbImg = document.createElement("img");
                        thumbImg.setAttribute("src", jsonImageReciever[i].thumbURL);
                        thumbImgContainer.appendChild(thumbImg);
                        thumbImgContainer.setAttribute("class", "thumbImgContainer");
                        thumbImg.setAttribute("class", "thumbImg");
                        thumbImg.setAttribute("id", "thumbImg" + counter++);
                        
                        var thumbImgDiv = document.createElement("div");
                        thumbImgDiv.setAttribute("id", "thumbImgDiv");
                        thumbImgContainer.appendChild(thumbImgDiv);
                        thumbImgDiv.appendChild(thumbImg);
                        thumbImgDiv.style.width = that.imgWidth + 10 +"px";
                        thumbImgDiv.style.height = that.imgHeight + 10 +"px";

                        thumbImg.onclick = function(x) { 
                        
                            var URLimg = x.target.id.replace("thumbImg", ""); 
                            //var URLimg = document.getElementById("thumbImg", counter); 
                            var setBackground = jsonImageReciever[URLimg].URL;
                            var main = document.getElementById("main");
                            main.style.backgroundImage = "url(" + setBackground + ")";
                            console.log(URLimg);
                            resetBackgroundCount = 0;
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
        popup.appendChild(thumbImgContainer);
        popup.appendChild(footer);
        body.appendChild(popup);
        body.insertBefore(body.firstChild);
        
        resetBackground.onclick = function() { 
            
            if(resetBackgroundCount > 0){
                return;
            }
            else{
            that.main = document.getElementById("main");
            that.main.style.backgroundImage = "url('img/background.jpg')";
            resetBackgroundCount = 1;
            }
            resetBackgroundCount++;
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
