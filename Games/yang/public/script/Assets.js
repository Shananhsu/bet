//嚴謹模式
"use strict";

var sprites = {};
var sounds = {};
//載入素材
Game.loadAssets = function () {

    //圖片
    var loadSprite = function (sprite) {
        return Game.loadSprite("assets/sprites/" + sprite);
    };
    //聲音
     var loadSound = function (sound) {
        return new Audio("assets/sounds/" + sound);
    };

    sprites.mainMenuBackground = loadSprite("main_menu_background.jpg");
    sprites.background = loadSprite("spr_background4.png");
    sprites.ball = loadSprite("whiteball.png");
    sprites.redBall = loadSprite("redball.png");
    sprites.blueBall = loadSprite("blueball.png");
    sprites.goldBall = loadSprite("goldball.png");
    sprites.stick = loadSprite("spr_stick.png");
    
    sprites.onePlayersButton = loadSprite("game_start.jpg");
    sprites.onePlayersButtonHover = loadSprite("game_start.jpg");
    sprites.muteButton = loadSprite("mute_button.png");
    sprites.muteButtonHover = loadSprite("mute_button_hover.png");
    sprites.muteButtonPressed = loadSprite("mute_button_pressed.png");
    sprites.muteButtonPressedHover = loadSprite("mute_button_pressed_hover.png");
    sprites.easyButton = loadSprite("easy_button.jpg");
    sprites.easyButtonHover = loadSprite("easy_button.jpg");
    sprites.mediumButton = loadSprite("medium_button.jpg");
    sprites.mediumButtonHover = loadSprite("medium_button.jpg");
    sprites.hardButton = loadSprite("hard_button.jpg");
    sprites.hardButtonHover = loadSprite("hard_button.jpg");
    sprites.backButton = loadSprite("back_button.png");
    sprites.backButtonHover = loadSprite("back_button_hover.png");
    sprites.continueButton = loadSprite("continue_button.jpg");
    sprites.continueButtonHover = loadSprite("continue_button.jpg");
    sprites.aboutButton = loadSprite("about_button.png");
    sprites.aboutButtonHover = loadSprite("about_button_hover.png");
    sprites.controls = loadSprite("controls.jpg");

    sounds.side = loadSound("Side.wav");
    sounds.ballsCollide = loadSound("BallsCollide.wav");
    sounds.strike = loadSound("Strike.mp3");
    sounds.hole = loadSound("Hole.wav");
    
   
    sounds.pekora = loadSound("pekora.mp3");
}
//聲音淡出
sounds.fadeOut = function(sound) {

    var fadeAudio = setInterval(function () {

        if(GAME_STOPPED)
            return;
        //音量遞減程度
        if ((sound.volume >= 0.05)) {
            sound.volume -= 0.05;
        }
        else{
            sound.pause();
            clearInterval(fadeAudio);
        }
        //淡出延遲時間
    }, 500);
}