class Game{
    constructor(){}

    getState(){
        var gamestateref = database.ref("Gamestate");
        gamestateref.on("value", function(data){
            gamestate = data.val();
            console.log(gamestate);
        })
    }

    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }

    start(){
    if(gamestate === 0){
        console.log("hello");
    player = new Player();
    player.getCount();
    form = new Form();
    form.display();
      }
    }
}