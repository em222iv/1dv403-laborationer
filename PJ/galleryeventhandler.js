"use strict";

var AJAX = {

    popupWindow: function() { 
        var that = this;
        var body = document.getElementById("body");
        var popup = document.createElement("div");
        var header = document.createElement("div");
        var footer = document.createElement("div");
        var cancelButton = document.createElement("button");
        var resetBackground = document.createElement("div");
        var smallSizeWindow = document.createElement("div");
        var regularSizeWindow = document.createElement("div");
        var enlargeWindow = document.createElement("div");
        var loadImg = document.createElement("img");
        var loadComplete = document.createElement("img");
        var headerText = document.createTextNode("Reset");
        var headertextDiv = document.createElement("div");
        var resetBackgroundCount = 1;
        var counter = 0;
 
        header.className = "popupHeader"; 
        footer.className = "popupFooter";
        loadComplete.className = "loadComplete";
        cancelButton.className = "cancelButton";
        resetBackground.className = "resetBackground";
        smallSizeWindow.className = "smallSizeWindow";
        regularSizeWindow.className = "regularSizeWindow";
        enlargeWindow.className = "enlargeWindow";
        popup.className = "popupWindow";
        headertextDiv.className = "textNode";
     
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
                        thumbImgDiv.setAttribute("class", "thumbImgDiv");
                        thumbImgContainer.appendChild(thumbImgDiv);
                        thumbImgDiv.appendChild(thumbImg);
                        thumbImgDiv.style.width = imgWidth + 10 +"px";
                        thumbImgDiv.style.height = imgHeight + 10 +"px";

                        thumbImg.onclick = function(x) { 
                            var URLimg = x.target.id.replace("thumbImg", ""); 
                            var setBackground = jsonImageReciever[URLimg].URL;
                            var main = document.getElementById("main");
                            main.style.backgroundImage = "url(" + setBackground + ")";
                        
                       
                            resetBackgroundCount = 0;
                        };
                    }clearTimeout(time); 
                    footer.removeChild(loadImg);
                    loadComplete.src="img/loadingComplete.png";
                    footer.appendChild(loadComplete);
                }   
            }  
        };
        xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
        header.appendChild(cancelButton);
        header.appendChild(resetBackground);
        headertextDiv.appendChild(headerText);
        header.appendChild(headertextDiv);
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
            console.log(popup);
            popup.parentNode.removeChild(popup);
           
            };
        }, 
            
    clickButton: function() {
            var that = this;
            var menu = document.getElementById("menu");
            menu.addEventListener("click", function(e) {
                var target = e.target;
                console.log(target);
              
                if (target.id === "galleryIcon"){
                    that.popupWindow();
                }
                if (target.id === "rssIcon"){
                    rssPopupWindow();
                }
                if (target.id === "memoryIcon"){
                    new Memory().init(4, 4);
                }
            },false);
        }
    };
    window.onload = function() {
        AJAX.clickButton();
};