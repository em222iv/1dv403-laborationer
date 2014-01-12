"use strict";

var rssPopupWindow = function() { 
    
    var rssBody = document.getElementById("body");
    var rssPopup = document.createElement("div");
    var rssHeader = document.createElement("div");
    var rssFooter = document.createElement("div");
    var rssCancelButton = document.createElement("button");
    var rssContainer = document.createElement("div");
    var enlargeRssWindow = document.createElement("div");
    var regularRssSizeWindow = document.createElement("div");
    var rssHeaderText = document.createTextNode("Aftonbladet RSS-feed");
    var rssHeadertextDiv = document.createElement("div");
    
    rssHeader.className = "popupHeader";
    rssFooter.className = "popupFooter";
    rssCancelButton.className = "cancelButton";
    rssContainer.className = "rssContainer";
    rssPopup.className = "popupWindow";
    rssCancelButton.setAttribute("click");
    enlargeRssWindow.className = "enlargeRssWindow";
    regularRssSizeWindow.className = "regularRssSizeWindow";
    rssHeadertextDiv.className = "memoryTextNode";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                 
               console.log(xhr.responseText);
                var rssReciever = xhr.responseText;
                    rssReciever.className = "rssReciever";
                    rssContainer.innerHTML = rssReciever;
                
                for (var i = 0; i < rssReciever.length; i++) {
                    
                    var eachFeed = rssReciever[i].rss_title;
                        eachFeed.className = "eachFeed";
                        console.log(eachFeed);
                }
            }
        }   
    };
    xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.aftonbladet.se/rss.xml"), true);
    xhr.send(null);
    
    rssHeadertextDiv.appendChild(rssHeaderText);
    rssHeader.appendChild(enlargeRssWindow);
    rssHeader.appendChild(regularRssSizeWindow);
    rssHeader.appendChild(rssHeadertextDiv);
    rssHeader.appendChild(rssCancelButton);
    rssPopup.appendChild(rssHeader);
    rssPopup.appendChild(rssContainer);
    rssPopup.appendChild(rssFooter);
    rssBody.appendChild(rssPopup);
    rssBody.insertBefore(rssBody.firstChild);
    
    regularRssSizeWindow.onclick = function() { 

        rssPopup.style.height = "400px";
        rssPopup.style.width = "365px";
        rssContainer.style.height = "345px";
        rssContainer.style.width = "330px";
    };
    
    enlargeRssWindow.onclick = function() { 
        var h2 = document.createElement("h2");
       
        rssPopup.style.height = "450px";
        rssPopup.style.width = "620px";
        rssContainer.style.height = "345px";
        rssContainer.style.width = "580px";
        h2.style.top = "-20px";
    }; 
    
    rssCancelButton.onclick = function() { 
        console.log(rssPopup);
        rssPopup.parentNode.removeChild(rssPopup);
        
        };
};