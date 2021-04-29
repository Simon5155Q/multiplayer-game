class Player{
    constructor(){}
    getCount(){
        var playerCountref = database.ref("playercount");
        playerCountref.on("value", function(data){
           var playercount = data.val(); 
            console.log(playercount);          
        });
    }

    updateCount(count){
        database.ref("/").update({playercount:count});

    }
    updateName(name){
        var playerIndex = "player" + playercount;
        database.ref(playerIndex).set({name:name});

    }
}