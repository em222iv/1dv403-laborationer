"use strict";
 
var Memory = function() { 
    var clicks = 0;
    var tries = 0;
    var curCard = null;
    var prevCard = null;
    
    this.init = function(rows, cols) {
    var randomized = RandomGenerator.getPictureArray(rows, cols);
    this.displayMemory(rows, cols, randomized);
	};
	
    this.displayMemory =  function(rows, cols, randomized){
        var memoryBody = document.getElementById("body");
        var memoryPopup = document.createElement("div");
        var memoryHeader = document.createElement("div");
        var memoryFooter = document.createElement("div");
        var memoryCancelButton = document.createElement("button");
        var memoryContainer = document.createElement("div");
        var enlargememoryWindow = document.createElement("div");
        var regularmemorySizeWindow = document.createElement("div");
        var memoryHeaderText = document.createTextNode("Meme-memory");
        var memoryHeadertextDiv = document.createElement("div");
        
        memoryHeader.className = "popupHeader";
        memoryFooter.className = "popupHeader";
        memoryCancelButton.className = "cancelButton";
        memoryContainer.className = "memoryContainer";
        memoryPopup.className = "popupWindow1";
        memoryCancelButton.setAttribute("click");
        enlargememoryWindow.className = "enlargeRssWindow";
        regularmemorySizeWindow.className = "regularRssSizeWindow";
        memoryHeadertextDiv.className = "memoryTextNode";
        
        var table = document.createElement("table");
        var count = 0;
        var that = this;
       
        for(var i = 0; i < rows; i++){
            var tr = document.createElement("tr");
           
            for(var n = 0; n < cols; n++){
                
                var Card = new Constructor(randomized[count], that);
                randomized.push(Card); 
                
                tr.appendChild(Card.getTd());
                count++;
            }
            table.appendChild(tr);
        }

        regularmemorySizeWindow.onclick = function() { 
            memoryPopup.style.width = "550px";
            memoryPopup.style.width = "450px";
            memoryContainer.style.height = "340px";
            memoryContainer.style.width = "440px";
        };
        
        enlargememoryWindow.onclick = function() { 
            memoryPopup.style.height = "450px";
            memoryPopup.style.width = "620px";
            memoryContainer.style.height = "345px";
            memoryContainer.style.width = "580px";
        }; 
        
        memoryCancelButton.onclick = function() { 
            memoryPopup.parentNode.removeChild(memoryPopup);
        };
        
        memoryHeadertextDiv.appendChild(memoryHeaderText);
        memoryHeader.appendChild(memoryHeadertextDiv);
        memoryHeader.appendChild(enlargememoryWindow);
        memoryHeader.appendChild(regularmemorySizeWindow);
        memoryHeader.appendChild(memoryCancelButton);
        memoryPopup.appendChild(memoryHeader);
        memoryContainer.appendChild(table);
        memoryPopup.appendChild(memoryContainer);
        memoryPopup.appendChild(memoryFooter);
        memoryBody.appendChild(memoryPopup);
        memoryBody.insertBefore(memoryBody.firstChild);
    };
    this.flipCard = function(Card) {
        if(prevCard !== null && curCard !== null) {
                return;
        }
        clicks+=1; 
        if(clicks === 1){
            prevCard = Card;
            Card.getImg();
            return;
        }
        if (clicks >= 2){
            curCard = Card;
            Card.getImg();
            if(prevCard.getId() === curCard.getId()) {
            clicks = 0;
            prevCard = null;
            curCard = null;
        
            }
            else{
            setTimeout(function() {
                prevCard.reset();
                curCard.reset();
                prevCard = null;
                curCard = null;
                clicks = 0;
            }, 1000); 
        }
       /* this.clicks = 0;
        document.getElementById("counter").innerHTML = 'Antal försök: '+ this.tries++ +'';*/
        }
    };
};
