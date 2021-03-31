class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide1();
    textSize(30);
    text("game has started", 120, 100);
    Player.getPlayerInfo()
    if (allPlayer !== undefined){
      var displayPos = 130;
      for (var plr in allPlayer){
        if (plr === "player" + player.index){
          fill("red")
        }
        else{
          fill("black") 
        }
        displayPos = displayPos + 20
        textSize(15);
        text(allPlayer[plr].name + ": " + allPlayer[plr].distance, 120, displayPos)
       }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null){
      player.distance = player.distance+50
      player.update();
    }
  }
}
