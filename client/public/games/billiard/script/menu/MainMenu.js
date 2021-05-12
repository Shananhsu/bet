
function generateMainMenuLabels(headerText){

    let labels = [
//標題
        new Label(
            headerText, 
            new Vector2(100,70),
            Vector2.zero,
            "white",
            "left",
            "Bookman",
            "100px"
        ),
        //警語
        new Label(
            "請適度遊玩，過度沉迷有害身心健康。", 
            new Vector2(810,760),
            Vector2.zero,
            "white",
            "left",
            "Bookman",
            "40px"
        )
    ];


    return labels;
}


function generateMainMenuButtons(inGame){



    let buttons = [];

    let dev = 0;

    if(inGame){
        dev = 200;
        buttons.push(
            new Button
                (
                    // 繼續按鍵
                    sprites.continueButton, 
                    new Vector2(150,390),
                    function(){
                        Game.mainMenu.active = false;
                        GAME_STOPPED = false;
                        setTimeout(Game.continueGame,200);
                        sounds.fadeOut(Game.mainMenu.sound);
                    },
                    sprites.continueButtonHover
                )
        )
    }

    let muteSprite = sprites.muteButton;
    let muteSpriteHover = sprites.muteButtonHover;

    if(Game.mainMenu.sound && Game.mainMenu.sound.volume === 0){
        muteSprite = sprites.muteButtonPressed;
        muteSpriteHover = sprites.muteButtonPressedHover;
    }


    let muteButton = new Button
    (
        //靜音按鍵
        muteSprite, 
        new Vector2(1430,10),
        function(){
            if(Game.mainMenu.sound.volume == 0){
                SOUND_ON = true;
                Game.mainMenu.sound.volume = 0.8;
                this.sprite = sprites.muteButton;
                this.hoverSprite = sprites.muteButtonHover;
            }
            else{
                SOUND_ON = false;
                Game.mainMenu.sound.volume = 0.0;
                this.sprite = sprites.muteButtonPressed;
                this.hoverSprite = sprites.muteButtonPressedHover;
            }
        },
        muteSpriteHover
    );

    let backButton = new Button
    (
        //返回按鍵
        sprites.backButton, 
        new Vector2(25,200),
        function(){
            Game.mainMenu.labels = generateMainMenuLabels("撞球撞起來");
            Game.mainMenu.buttons = generateMainMenuButtons(inGame);
        },
        sprites.backButtonHover
    );
//開始遊戲
    buttons = buttons.concat([
        
        new Button
        (
            sprites.onePlayersButton, 
            new Vector2(150,230),
            function(){
                AI_PLAYER_NUM = 1;
                AI_ON = true;
                TRAIN_ITER = 5;
                Game.mainMenu.active = false;
                GAME_STOPPED = false;
                startTimer();
                setTimeout(Game.startNewGame,100);
                sounds.fadeOut(Game.mainMenu.sound);
            },
            sprites.onePlayersButtonHover),
        muteButton
    ]);

    return buttons;
}