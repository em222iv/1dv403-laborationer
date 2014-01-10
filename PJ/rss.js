"use strict";

    var rssPopupWindow = function() { 
        var that = this;
        var rssBody = document.getElementById("body");
        var rssPopup = document.createElement("div");
        var rssHeader = document.createElement("popupHeader");
        var rssFooter = document.createElement("popupFooter");
        var rssCancelButton = document.createElement("button");
        var rssContainer = document.createElement("div");
     
        var enlargeRssWindow = document.createElement("enlargeRssWindow");
        
        
        rssContainer.className = "rssContainer";
        rssPopup.className = "popupWindow";
        rssCancelButton.setAttribute("click");
        enlargeRssWindow.className = "enlargeRssWindow";

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                     
                   
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
        
        rssHeader.appendChild(enlargeRssWindow);
        rssHeader.appendChild(rssCancelButton);
        rssPopup.appendChild(rssHeader);
        
        rssPopup.appendChild(rssContainer);
        rssPopup.appendChild(rssFooter);
        rssBody.appendChild(rssPopup);
        rssBody.insertBefore(rssBody.firstChild);
        
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
            that.count = 0;
            };
    };