class Player {
  constructor(){
    this.name = null;
    this.distance = 0;
    this.index = null;  
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){ 
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
    name : this.name, 
    distance : this.distance
    });
  }
  static getPlayerInfo(){
  var PlayerInforef = database.ref('players') 
  PlayerInforef.on("value",(data)=>{
    allPlayers = data.val();
  }) 
  }
}

