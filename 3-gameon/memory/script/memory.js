"use strict";
 
    var Memory = { 
        clicks : 0,
        tries : 0,
        curCard : null,
        prevCard : null,
        init : function(rows, cols) {
       
        var randomized = RandomGenerator.getPictureArray(rows, cols);
        
        Memory.displayMemory(rows, cols, randomized);
        
	},
    displayMemory: function(rows, cols, randomized){
    
    var table = document.createElement("table");
    var main = document.getElementById("main");
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
    main.appendChild(table);
},
flipCard : function(Card) {
    if(this.prevCard !== null && this.curCard !== null) {
            return;
    }
    this.clicks+=1; 
    var that = this;
    console.log(Card.getId());
    if(this.clicks === 1){
        this.prevCard = Card;
        Card.getImg();
        return;
    }
    if (this.clicks >= 2){
        this.curCard = Card;
        Card.getImg();
        if(this.prevCard.getId() === this.curCard.getId()) {
        this.clicks = 0;
        this.prevCard = null;
        this.curCard = null;
    
        }
        else{
        setTimeout(function() {
        that.prevCard.reset();
        that.curCard.reset();
        that.prevCard = null;
        that.curCard = null;
        }, 1000); 
    }
    this.clicks = 0;
    document.getElementById("counter").innerHTML = 'Antal försök: '+ this.tries++ +'';
    }
},
};
window.onload = function(){
    Memory.init(4,4);
    Memory.init(4,4);
    Memory.init(4,4);
};
