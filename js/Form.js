class Form{

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }

    hide(){

      this.greeting.hide();
      this.input.hide();
      this.button.hide();
    }
  
    display(){
      var title = createElement('h2')
      
      title.html("Car Racing Game");
      title.position(600, 0);
      
     
      
      this.input.position(500, 160);
      this.button.position(600, 200);
  

      


     this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name  = this.input.value(); 
        playerCount+=1
        player.updateCount(playerCount )
        player.index=playerCount; 
        player.update();
        
        this.greeting.html("Hello " + player.name )
        this.greeting.position(500, 160)
      });
  
    }
}
