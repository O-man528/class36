class Form{

    constructor(){}
    display(){
     var title=createElement('h2');
     title.html(" CAR RACING GAME");
     title.position(380,0);

     var input = createInput("Name");
     input.position(380,160);

     var button = createButton('Play');
     button.position(420,200);

     var greeting = createElement('h3');

     button.mousePressed(function(){
         input.hide();
         button.hide();
     
        var name = input.value();
        
        playerCount=playerCount+1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("Hello Dear!! " +name);
        greeting.position(390,160);


     });
     



     
    }

   

}