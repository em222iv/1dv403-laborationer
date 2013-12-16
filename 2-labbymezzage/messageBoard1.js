"use strict";

window.onload = function(){

var numberOfText;

var MessageBoard = {
    messages: [],
};

var send = document.getElementById("submit");

send.onclick = function(e){
    e.preventDefault();
    var area = document.getElementById("txt").value;
    document.getElementById("txt").value= "";
    var mess = new Message(area, new Date());
    MessageBoard.messages.push(mess);
    
    //Deklarerar outPut och tar senaste värdet ur arrayen MessageBoard.messages
    var outPut = MessageBoard.messages[MessageBoard.messages.length - 1];
    console.log(outPut.toString());
    
    var outMessage = outPut.getText();
    
    var node = document.createElement("p");
    var textNode = document.createTextNode(outMessage);
    node.appendChild(textNode);
    document.getElementById("outMessage").appendChild(node);
    
    var time = new Date();
    var outHour = time.getHours();
    var outMin = time.getMinutes();
    var outSec = time.getSeconds();
    var times = outHour + ":" + outMin + ":" + outSec;
    
    var timeNode = document.createElement("h4");
    var textTimeNode = document.createTextNode(times);
    timeNode.appendChild(textTimeNode);
    document.getElementById("outMessage").appendChild(timeNode);

    };
};