"use strict";
 
    var Memory = { 
        clicks : 0,
        tries : 1,
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
    
   //för varje tr tag så loopas det in ett kort i varje
    for(var i = 0; i < rows; i++){
        var tr = document.createElement("tr");
       
        for(var n = 0; n < cols; n++){
            //skickar med displaymemory referenser
        
            var Card = new Constructor(randomized[count], that);
            //pushar in Card i arrray
            randomized.push(Card); 
            //allting appendas in i main
            tr.appendChild(Card.getTd());
            count++;
        }
        table.appendChild(tr);
    }
    main.appendChild(table);
},
flipCard : function(Card) {
  var that = this;
    if(this.prevCard !== null && this.curCard !== null) {
            return;
    }
    this.clicks+=1; 
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
};
