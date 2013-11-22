"use strict";

window.onload = function() {

function Message(message , date) {
    
    var text;
    
    
    this.getText = function() {
        return message;
    };
    
    this.setText = function(_text) {
        message = text;
    };
    
    this.getDate = function() {};
        
    this.setDate = function(_date) {};
}

Message.prototype.toString = function() {
    return this.getText()+" ("this.getDate()+")";
};

Message.prototype.getHTMLtext = function() {};
Message.prototype.getDatetext = function() {};    

};


