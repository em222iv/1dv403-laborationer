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
        var smallSizeWindow = document.createElement("smallSizeWindow");
        var regularSizeWindow = document.createElement("regularSizeWindow");
        var enlargeWindow = document.createElement("enlargeWindow");
        var loadImg = document.createElement("img");
        var resetBackgroundCount = 1;
        var counter = 0;
        
        
        cancelButton.className = "cancelButton";
        resetBackground.className = "resetBackground";
        smallSizeWindow.className = "smallSizeWindow";
        regularSizeWindow.className = "regularSizeWindow";
        enlargeWindow.className = "enlargeWindow";
        popup.className = "popupWindow";
     
        var time = setTimeout(function(){
             
            loadImg.src="img/ajax-loader.gif";
            footer.appendChild(loadImg);
            
        },10);
         
        var thumbImgContainer = document.createElement("div");
        thumbImgContainer.className = "thumbImg";
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    console.log(xhr.responseText);
                   
                    var jsonImageReciever = JSON.parse(xhr.responseText);
                    var imgWidth = 0;
                    var imgHeight = 0;
                    for (var i = 0; i < jsonImageReciever.length; i++) {
                        
                        if(jsonImageReciever[i].thumbWidth > imgWidth){
                         imgWidth = Math.max(jsonImageReciever[i].thumbWidth);
                        }
                        if(jsonImageReciever[i].thumbHeight > imgHeight){
                         imgHeight = Math.max(jsonImageReciever[i].thumbHeight);
                        }
                        
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
                        thumbImgDiv.style.width = imgWidth + 10 +"px";
                        thumbImgDiv.style.height = imgHeight + 10 +"px";

                        thumbImg.onclick = function(x) { 
                        
                            var URLimg = x.target.id.replace("thumbImg", ""); 
                            //var URLimg = document.getElementById("thumbImg", counter); 
                            var setBackground = jsonImageReciever[URLimg].URL;
                            var main = document.getElementById("main");
                            main.style.backgroundImage = "url(" + setBackground + ")";
                       
                            resetBackgroundCount = 0;
                        };
                    }clearTimeout(time); 
                    footer.removeChild(loadImg);
                }   
            }  
        };
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
        header.appendChild(cancelButton);
        header.appendChild(resetBackground);
        header.appendChild(enlargeWindow);
        header.appendChild(regularSizeWindow);
        header.appendChild(smallSizeWindow);
        popup.appendChild(header);
        popup.appendChild(thumbImgContainer);
        popup.appendChild(footer);
        body.appendChild(popup);
        body.insertBefore(body.firstChild);
         
        smallSizeWindow.onclick = function() { 
            popup.className = "popupWindow";
            console.log(popup);
            popup.style.height = "250px";
            popup.style.width = "250px";
            thumbImgContainer.style.height = "195px";
            thumbImgContainer.style.width = "245px";
        
        }; 
        regularSizeWindow.onclick = function() { 
            popup.className = "popupWindow";
            console.log(popup);
            popup.style.height = "400px";
            popup.style.width = "365px";
            thumbImgContainer.style.height = "345px";
            thumbImgContainer.style.width = "360px";
        
        }; 
        enlargeWindow.onclick = function() { 
            popup.className = "popupWindow";
            console.log(popup);
            popup.style.height = "450px";
            popup.style.width = "570px";
            thumbImgContainer.style.height = "345px";
            thumbImgContainer.style.width = "565px";
        
        }; 
     
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
            popup.className = "popupWindow";
            console.log(popup);
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
