"use strict";

function Constructor(Card, memory){ 
         
        var td = document.createElement("td");
        var img = document.createElement("img");
        img.src = ('pics/0.png');
        var a = document.createElement("a");
        a.appendChild(img);
        td.appendChild(a);
        var that = this;
        a.href = "#";
        
    that.getTd = function() {
        return td;
    };
    // vilket kort man väljer
    that.getId = function() {
        return Card;
    };
    
    that.getImg = function() {
        a.onclick = null;
        return img.src = "pics/" + Card + ".png";
            
        };
    //skickar med hela objektet
    a.onclick = function() {
        memory.flipCard(that);
        
    };
    
    that.reset = function() {
        a.onclick = function() {
        memory.flipCard(that);
        };
        return img.src = ('pics/0.png');
    };
 
}
