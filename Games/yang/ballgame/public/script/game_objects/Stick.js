"use strict";
//球桿起始位置
function Stick(position){
    this.position = position;
         //原點
    this.origin = new Vector2(970,16);
          //擊球原點
    this.shotOrigin = new Vector2(950,16);
    this.shooting = false;
        //可見的
    this.visible = true;
          //旋轉
    this.rotation = 0;
    this.power = 0;
    this.trackMouse = true;
}

Stick.prototype.handleInput = function (delta) {
         
    if(AI_ON && Game.policy.turn === AI_PLAYER_NUM)
      return;

    if(Game.policy.turnPlayed)
      return;
    //按下w增加力道
    if(Keyboard.down(Keys.W) && KEYBOARD_INPUT_ON){
      if(this.power < 75){
        this.origin.x+=2;
        this.power+=1.2;
      }
    }
    //按下s減少力道
    if(Keyboard.down(Keys.S) && KEYBOARD_INPUT_ON){
      if(this.power>0){
        this.origin.x-=2;
        this.power-=1.2;
      }
    }
    //滑鼠左鍵按下發射
    else if (this.power>0 && Mouse.left.down){
      //發出玩家球桿撞擊聲
      var strike = sounds.strike.cloneNode(true);
      //玩家球桿撞擊聲音量
      strike.volume = (this.power/(10))<0.5?(this.power/(10)):0.5;
      strike.play();
      Game.policy.turnPlayed = true;
      this.shooting = true;
      //玩家球桿原點
      this.origin = this.shotOrigin.copy();
           
      //玩家擊球後白球射出動作                             旋轉
      Game.gameWorld.whiteBall.shoot(this.power, this.rotation);
      var stick = this;
      //玩家擊出後球桿顯示時間                   可見的
      setTimeout(function(){stick.visible = false;}, 1000);
    }
    else if(this.trackMouse){
      var opposite = Mouse.position.y - this.position.y;
      var adjacent = Mouse.position.x - this.position.x;
      this.rotation = Math.atan2(opposite, adjacent);
    }
};
//電腦球桿
Stick.prototype.shoot = function(power, rotation){
  this.power = power;
  this.rotation = rotation;
  //發出電腦球桿撞擊聲
  if(Game.sound && SOUND_ON){
    var strike = sounds.strike.cloneNode(true);
    //電腦球桿撞擊聲音量
    strike.volume = (this.power/(18))<0.5?(this.power/(10)):0.5;
    strike.play();
  }
  Game.policy.turnPlayed = true;
  this.shooting = true;
  //電腦球桿原點
  this.origin = this.shotOrigin.copy();
  //電腦擊球後白球射出動作
  Game.gameWorld.whiteBall.shoot(this.power, this.rotation);
  var stick = this;
  //電腦擊出後球桿顯示時間 
  setTimeout(function(){stick.visible = false;}, 1000);
}
//判斷球桿是否重置
Stick.prototype.update = function(){
  if(this.shooting && !Game.gameWorld.whiteBall.moving)
    this.reset();
};
//球桿重置出現位置
Stick.prototype.reset = function(){
  this.position.x = Game.gameWorld.whiteBall.position.x;
  this.position.y = Game.gameWorld.whiteBall.position.y;
//球桿重置後位置準心
	this.origin = new Vector2(970,16);
  this.shooting = false;
  this.visible = true;
	this.power = 0;
};

Stick.prototype.draw = function () {
  if(!this.visible)
    return;
    //畫出球桿                                                圖片大小
  Canvas2D.drawImage(sprites.stick, this.position,this.rotation,1, this.origin);
};