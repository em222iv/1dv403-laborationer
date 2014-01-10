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
        
    this.getTd = function() {
        return td;
    };
    
    this.getId = function() {
        return Card;
    };
    
    this.getImg = function() {
        a.onclick = null;
        return img.src = "pics/" + Card + ".png";
            
        };
        
    a.onclick = function() {
        memory.flipCard(that);
        
    };
    
    this.reset = function() {
        a.onclick = function() {
        memory.flipCard(that);
        };
        return img.src = ('pics/0.png');
    };
 
}
