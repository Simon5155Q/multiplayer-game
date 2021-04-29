class Form{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Car racing game");
        title.position(150, 0);

        var input= createInput("name");
        var button = createButton("play");
        input.position(150, 100);
        button.position(150, 150);

        button.mousePressed(function(){
          input.hide();
          button.hide();
          var name = input.value();
          console.log(name);
          playercount = playercount + 1;
          player.update(name);
          player.updateCount(playercount);

          var greeting = createElement("h3");
          greeting.html("Welcome" + name);
          greeting.position(150, 150);
        })

                
    }
}