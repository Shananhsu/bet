//嚴謹模式
"use strict";

function Ball(initPos, color) {
    this.initPos = initPos;
    this.position = initPos.copy();
    this.origin = new Vector2(25, 25);
    //    速度
    this.velocity = Vector2.zero;
    this.color = color;
    this.moving = false;
    this.visible = true;
    this.inHole = false;
}
//判斷球的顏色
Object.defineProperty(Ball.prototype, "color", {
    get: function() {
        //紅
        if (this.sprite == sprites.redBall) {
            return Color.red;
        }
        //藍
        else if (this.sprite == sprites.blueBall) {
            return Color.blue;
        }
        //金
        else if (this.sprite == sprites.goldBall) {
            return Color.gold;
        }
        //白
        else {
            return Color.white;
        }
    },
    set: function(value) {
        //紅
        if (value === Color.red) {
            this.sprite = sprites.redBall;
        }
        //藍
        else if (value == Color.blue) {
            this.sprite = sprites.blueBall;
        }
        //金
        else if (value == Color.gold) {
            this.sprite = sprites.goldBall;
        }
        //白
        else {
            this.sprite = sprites.ball;
        }
    }
});

Ball.prototype.shoot = function(power, angle) {
        //力量<0 不行動
        if (power <= 0)
            return;

        this.moving = true;
        //         速度
        this.velocity = calculateBallVelocity(power, angle);
    }
    //球運動的速度
var calculateBallVelocity = function(power, angle) {
        //球移動的軌跡
        return new Vector2(100 * Math.cos(angle) * power, 100 * Math.sin(angle) * power);
    }
    //球的位置移動
Ball.prototype.update = function(delta) {

    this.updatePosition(delta);
    //球的彈性
    this.velocity.multiplyWith(0.987);
    //判斷球何時停止            取絕對值                           取絕對值
    if (this.moving && Math.abs(this.velocity.x) < 1 && Math.abs(this.velocity.y) < 1) {

        this.stop();
    }
}

Ball.prototype.updatePosition = function(delta) {

    if (!this.moving || this.inHole)
        return;
    var ball = this;
    var newPos = this.position.add(this.velocity.multiply(delta));


    if (Game.policy.isInsideHole(newPos)) {
        //進球聲
        if (Game.sound && SOUND_ON) {
            var holeSound = sounds.hole.cloneNode(true);
            holeSound.volume = 0.5;
            holeSound.play();
        }
        this.position = newPos;
        this.inHole = true;
        setTimeout(function() { ball.visible = false;
            ball.velocity = Vector2.zero; }, 100);
        Game.policy.handleBallInHole(this);
        return;
    }

    var collision = this.handleCollision(newPos);

    //球碰撞反射力道
    if (collision) {
        this.velocity.multiplyWith(0.95);
    } else {
        this.position = newPos;
    }
}

Ball.prototype.handleCollision = function(newPos) {

        var collision = false;
        //左邊界
        if (Game.policy.isXOutsideLeftBorder(newPos, this.origin)) {
            this.velocity.x = -this.velocity.x;
            this.position.x = Game.policy.leftBorderX + this.origin.x;
            collision = true;
        }
        //右邊界
        else if (Game.policy.isXOutsideRightBorder(newPos, this.origin)) {
            this.velocity.x = -this.velocity.x;
            this.position.x = Game.policy.rightBorderX - this.origin.x;
            collision = true;
        }
        //上邊界
        if (Game.policy.isYOutsideTopBorder(newPos, this.origin)) {
            this.velocity.y = -this.velocity.y;
            this.position.y = Game.policy.topBorderY + this.origin.y;
            collision = true;
        }
        //下邊界
        else if (Game.policy.isYOutsideBottomBorder(newPos, this.origin)) {
            this.velocity.y = -this.velocity.y;
            this.position.y = Game.policy.bottomBorderY - this.origin.y;
            collision = true;
        }

        return collision;
    }
    //球停止
Ball.prototype.stop = function() {

    this.moving = false;
    //速度0
    this.velocity = Vector2.zero;
}

Ball.prototype.reset = function() {
    this.inHole = false;
    this.moving = false;
    this.velocity = Vector2.zero;
    this.position = this.initPos;
    this.visible = true;
}

Ball.prototype.out = function() {

        this.position = new Vector2(0, 900);
        this.visible = false;
        this.inHole = true;

    }
    //畫出球
Ball.prototype.draw = function() {
    if (!this.visible)
        return;
    //                                                 球大小
    Canvas2D.drawImage(this.sprite, this.position, 0, 1, new Vector2(25, 25));
};