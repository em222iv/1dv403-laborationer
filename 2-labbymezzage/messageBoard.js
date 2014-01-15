"use strict";

    var MessageBoard = { //Statiskt objekt.
    
        messages: [], //meddelande array
        
        init : function() {
            
           var send = document.getElementById("submit"); 
           var textarea = document.getElementById("txt");
           
           send.addEventListener("click", function(e) {
                e.preventDefault(); 
                var mess = new Message(textarea.value, new Date());
                MessageBoard.messages.push(mess);
                MessageBoard.renderMessages();
                //Rensar textarean
                textarea.value = "";
           });
           textarea.addEventListener("keypress",function(e) {

                    if (e.keyCode == 13 && !e.shiftKey) 
                        {
                        e.preventDefault(); 
                        var mess = new Message(textarea.value, new Date());
                        MessageBoard.messages.push(mess);
                        MessageBoard.renderMessages();
                        textarea.value = "";
                        }  
                    }, 
                    false); 
        },
            renderMessages : function() {
            // tömmer strängen varje gång du skriver nytt meddelande
            document.getElementById("outMessage").innerHTML= "";
            
           //Loopar samtliga meddelanden, utan denna loop så syns inga meddelanden på sidan.
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                MessageBoard.renderMessage(i);
            }
            
            //Räknar och skriver ut antal inlägg på sidan
            var messageCounter = document.getElementById("messageCounter");
            var length = (MessageBoard.messages.length);
            messageCounter.innerHTML = length;
        },
            //Pekar på "outMessage" som ska nås
            renderMessage : function(messageID) {
            var div = document.getElementById("outMessage"); 
            var date = document.createElement("h4");
            var messageText = document.createElement("p");
            //sätterin lokaltiden till date
            date.innerHTML = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
            //läser av texten i messageID't och skjuter in det ei messagetext
            messageText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            messageText.appendChild(date);
            div.appendChild(messageText);
            
            //Skapar en knapp på bilden clock.png fär att se hela datumet samt tid.
            
            var time = document.createElement("a");
            var imgTime = document.createElement("img");
            imgTime.className = "imgTime";
            imgTime.setAttribute("src", "imgTime.jpg");
            imgTime.width = "20";
            imgTime.height = "20";
            date.appendChild(time);
            time.appendChild(imgTime);
            
            //Innehållet i utskriften för datum och tid
            imgTime.onclick = function() {
                alert ("Det här meddelandet levererades " + MessageBoard.messages[messageID].getDate().toLocaleDateString() +
                " klockan " + MessageBoard.messages[messageID].getDate().toLocaleTimeString());
            };
            
            //Skapar en knapp på bilden delete.png för att ta bort inlägg.
            var a = document.createElement("a");
            var deleteIMG = document.createElement("img");
            deleteIMG.className = "deleteIMG";
            deleteIMG.setAttribute("src", "deleteIMG.png");
            deleteIMG.width = "20";
            deleteIMG.height = "20";
            date.appendChild(a);
            a.appendChild(deleteIMG);
            
            //Alertar och frågar om meddelandet verkligen skall tas bort. Om true så hoppar scriptet in i removeMessage nedan
            //och tar bort meddelandet.
            deleteIMG.onclick = function() {
            var eraseMessage = window.confirm("Är du säker på att du vill ta bort meddelandet?");
            if(eraseMessage == true){
                MessageBoard.removeMessage[messageID];
            }
            else
            {
                alert("Meddelandet finns kvar");
            }
    };
},          //Denna funktion tar bort ett meddelande om if-satsen ovan returnerar true.
            removeMessage: function(deleteMess) {
            //tar bort 1 meddelnade
            MessageBoard.messages.splice(deleteMess, 1); 
            MessageBoard.renderMessages();
    },
    
};
window.onload = MessageBoard.init;