

let cannon1Img = new Image();
cannon1Img.src = "./img/shellImg/cannon1.png"
class Cannon {
    constructor() {
        this.img = cannon1Img
        this.width = 150;
        this.height = 150;
        this.x = canvas.width / 2;
        this.y = canvas.height - 200;
        this.color = 'pink';
        this.angle = 0;

    } // constructor

    reNew() {
        // 更新物件數據

        // 更新物件數據

        // 更新繪圖

        ctx.save(); //儲存canvas狀態
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillStyle = this.color;
        // ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height)
        ctx.drawImage(cannon1Img, this.width / -2, this.height / -2, this.width, this.height)
        ctx.restore(); //回復canvas狀態
    } // reNew

} //class connon


class Shells {
    constructor() {

        // 要傳到資料庫的資料-----------

        this.date = new Date();//砲彈發射時間
        this.firedTime = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}  ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}` //砲彈發射時間                    
        this.fishHited = [] //擊中的魚
        this.fishKilled = [] //擊殺的魚
        this.scoreGeted = 0;
        // 要傳到資料庫的資料-----------

    } // constructor

    reNew() {
        // 更新物件數據
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);

        //碰撞檢測用的參數
        this.edgeLeft = this.x - this.width / 2;
        this.edgeRight = this.x + this.width / 2
        this.edgeTop = this.y - this.height / 2;
        this.edgeBottom = this.y + this.height / 2

        // 更新物件數據

        // 更新繪圖

        ctx.save(); //儲存canvas狀態 
        ctx.fillStyle = this.color;
        // ctx.translate為顯示的位置，非實際位置
        // 可以想做是投影在this.x, this.y這個座標上
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color
        // ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height) //顯示碰撞檢定盒子
        ctx.drawImage(this.img, this.width / -2, this.height / -2, this.width, this.height)
        ctx.restore(); //回復canvas狀態

        // 檢查砲彈是否飛出畫面外
        if (this.y <= -10 || this.x < -10 || this.x > canvas.width + 10) {
            this.betResult();
        }
        let x;
        // 執行碰撞檢定，檢查於的碰撞盒子是否與砲彈的碰撞盒子重疊
        for (x of fisharr) {
            this.hitCheck(x);
        }


    } // reNew

    // 碰撞檢測 
    hitCheck(otherObj) {

        // 檢測的項目並不是物件是否"已重疊"
        // 而是物件是否"沒重疊"，通過if就是沒重疊，未通過則是已重疊
        // let hit = true;
        if (
            (this.edgeLeft > otherObj.edgeRight) ||
            (this.edgeRight < otherObj.edgeLeft) ||
            (this.edgeTop > otherObj.edgeBottom) ||
            (this.edgeBottom < otherObj.edgeTop)
        ) {
            return
        } else {
            //紀錄擊中與擊殺
            this.fishHited.push(otherObj.name)
            this.hp -= 1;
            otherObj.hp -= this.damage
            if (otherObj.hp <= 0) {
                otherObj.hitResult();
                this.scoreGeted += otherObj.score;
                this.fishKilled.push(otherObj.name)
            }

            // 我無法delete this，
            // 在想到能輕易的把這個物件刪除或null前，先把它瞬移到遙遠的地方了事
            // 2021-04-20 01:12 雖然無法想到了可以移除的方法，但是要動到許多地方，很花時間所以暫時作罷
            if (this.hp <= 0) {
                // 砲彈hp<=0，意味著這次下注的歷程結束，要結算這次下注的結果
                // 砲彈hp<=0，意味著這次下注的歷程結束，要結算這次下注的結果
                // 砲彈hp<=0，意味著這次下注的歷程結束，要結算這次下注的結果
                this.betResult();
            }

        }

    }// hitCheck
    betResult() {

        this.y = -9999;
        this.edgeLeft = this.x - this.width / 2;
        this.edgeRight = this.x + this.width / 2
        this.edgeTop = this.y - this.height / 2;
        this.edgeBottom = this.y + this.height / 2
        this.reNew = function () { return }

        // 整理要傳到伺服器資料庫的資料
        // 整理要傳到伺服器資料庫的資料
        // 整理要傳到伺服器資料庫的資料

        this.income = this.scoreGeted - this.cost;
        amm.text += this.scoreGeted;

        this.memberMoneyBagUpdate = memberMoneyBag + this.income
        this.date = new Date();
        this.betOverTime = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}  ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
        // this.betOverTime = this.date
        //  this.fishHited 是 [] 的時候
        //  this.fishHited 為true
        //  this.fishHited == [] 為false
        //  this.fishHited == 0 為true
        if (this.fishHited == 0) this.fishHited = "未擊中";
        if (this.fishKilled == 0) this.fishKilled = "未擊殺";

        this.fishHited = JSON.stringify(this.fishHited)
        this.fishKilled = JSON.stringify(this.fishKilled)

        let betRecord = {
            betRecord: [
                memberId, account,
                this.firedTime, "捕魚機", this.shellsType,
                this.cost, memberMoneyBag,
                this.scoreGeted, this.income, this.memberMoneyBagUpdate,
                this.fishHited, this.fishKilled,
                this.betOverTime
            ]
        }

        memberMoneyBag = this.memberMoneyBagUpdate; // 更新顯示在客戶端會員錢包

        // 傳資料到伺服器資料庫
        $.ajax({
            type: "post",
            url: "http://localhost:3001/fishshooter/uploadBetRecord",
            data: betRecord,

            success: function (res) {
                console.log(res);
            },
            error: function () { }
        })
    }// betResult

} // class shells

window.shell01Img = new Image();
shell01Img.src = "./img/shellImg/shell1.png"

class Shell01 extends Shells {
    constructor() {
        super();

        this.img = shell01Img;
        this.width = 50;
        this.height = 50;
        this.x = canvas.width / 2;
        this.y = canvas.height - 200;
        this.color = "white";
        this.angle = cannon1.angle * Math.PI / 180;
        this.x += 90 * Math.sin(this.angle);
        this.y -= 90 * Math.cos(this.angle)
        // 速度
        this.speed = 10;
        // 位移量
        this.move = 0;
        this.damage = 2;
        this.hp = 1;
        this.cost = 1 //發射費用
        amm.text -= this.cost; // 每當shells生成，彈藥量扣掉花費
        // 要傳到資料庫的資料-----------
        this.shellsType = "捕魚機:標準砲彈" //砲彈種類
        // 要傳到資料庫的資料-----------
    } // constructor
}

window.shell02Img = new Image();
shell02Img.src = "./img/shellImg/shell2.png"

class Shell02 extends Shells {
    constructor() {
        super();

        this.img = shell02Img;
        this.width = 50;
        this.height = 50;
        this.x = canvas.width / 2;
        this.y = canvas.height - 200;
        this.color = "red";
        this.angle = cannon1.angle * Math.PI / 180;
        this.x += 90 * Math.sin(this.angle);
        this.y -= 90 * Math.cos(this.angle)
        // 速度
        this.speed = 20;
        // 位移量
        this.move = 0;
        this.damage = 1;
        this.hp = 5;
        this.cost = 5 //發射費用
        amm.text -= this.cost; // 每當shells生成，彈藥量扣掉花費
        // 要傳到資料庫的資料-----------
        this.shellsType = "捕魚機:貫穿砲彈" //砲彈種類
        // 要傳到資料庫的資料-----------
    } // constructor
}
window.shell03Img = new Image();
shell03Img.src = "./img/shellImg/shell3.png"

class Shell03 extends Shells {
    constructor() {
        super();

        this.img = shell03Img;
        this.width = 50;
        this.height = 50;
        this.x = canvas.width / 2;
        this.y = canvas.height - 200;
        this.color = "red";
        this.cannonAngle = cannon1.angle;
        this.angle = this.cannonAngle * Math.PI / 180;
        this.x += 90 * Math.sin(this.angle);
        this.y -= 90 * Math.cos(this.angle)
        // 速度
        // this.speed = 10;
        this.xSpeed = 15;
        this.ySpeed = 15;
        // 位移量
        this.move = 0;
        this.damage = 1;
        this.hp = 10; //hp意味著彈跳次數
        this.cost = 8 //發射費用
        amm.text -= this.cost; // 每當shells生成，彈藥量扣掉花費
        // 要傳到資料庫的資料-----------
        this.shellsType = "捕魚機:彈跳砲彈" //砲彈種類
        // 要傳到資料庫的資料-----------
        // 彈跳檢定用的參數
        this.xJump = true;
        this.yJump = true;
        this.pp = false
        //碰撞檢測用的參數
        this.edgeLeft = this.x - this.width / 2;
        this.edgeRight = this.x + this.width / 2
        this.edgeTop = this.y - this.height / 2;
        this.edgeBottom = this.y + this.height / 2
        //
        this.fishHitedIndex = "";
        this.lastFishHitedIndex = "";


    } // constructor
    reNew() {
        // 更新物件數據
        this.x += this.xSpeed * Math.sin(this.angle);
        this.y -= this.ySpeed * Math.cos(this.angle);



        //碰撞檢測用的參數
        this.edgeLeft = this.x - this.width / 2;
        this.edgeRight = this.x + this.width / 2
        this.edgeTop = this.y - this.height / 2;
        this.edgeBottom = this.y + this.height / 2

        // 更新物件數據

        // 更新繪圖

        ctx.save(); //儲存canvas狀態 
        ctx.fillStyle = this.color;
        // ctx.translate為顯示的位置，非實際位置
        // 可以想做是投影在this.x, this.y這個座標上
        ctx.translate(this.x, this.y)
        // ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height) //顯示碰撞檢定盒子
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color


        ctx.drawImage(this.img, this.width / -2, this.height / -2, this.width, this.height)
        ctx.restore(); //回復canvas狀態


        // 檢查砲彈是否飛出畫面外 //彈跳砲彈不會飛出畫面外
        // if (this.y <= -10 || this.x < -10 || this.x > canvas.width + 10) {
        //     this.betResult();
        // }



        //  彈跳 碰到畫面邊緣的彈跳
        if (this.x <= 0 || this.x >= canvas.width) {
            this.xSpeed = -this.xSpeed;
            this.hp -= 1;
            this.lastFishHitedIndex = ""
        }
        if (this.y <= 0 || this.y >= canvas.height * 0.81) {
            this.ySpeed = -this.ySpeed;
            this.hp -= 1;
            this.lastFishHitedIndex = ""
        }
        if (this.hp <= -1) {
            this.betResult();
            return
        }

        // 執行碰撞檢定，檢查於的碰撞盒子是否與砲彈的碰撞盒子重疊
        let x;
        for (x of fisharr) {
            this.hitCheck(x);
        }
    } // reNew
    // 碰撞檢測 
    hitCheck(otherObj) {


        // 檢測的項目並不是物件是否"已重疊"
        // 而是物件是否"沒重疊"，通過if就是沒重疊，未通過則是已重疊
        if (
            (this.edgeLeft > otherObj.edgeRight) ||
            (this.edgeRight < otherObj.edgeLeft) ||
            (this.edgeTop > otherObj.edgeBottom) ||
            (this.edgeBottom < otherObj.edgeTop)
        ) { } else {

            let foo = (obj) => obj == otherObj;
            let theFishIndex = fisharr.findIndex(foo);

            // 如果這次打到的魚跟最後一次打到的一樣，return
            if (theFishIndex === this.lastFishHitedIndex) {
                return
            } else { this.lastFishHitedIndex = theFishIndex } //更新最後一次打到的魚 



            // 打到魚彈跳    
            // 打到魚彈跳    
            // 打到魚彈跳    

            // // 如果角度為0，會造成x方向沒有反彈效果的問題
            // // 如果角度太小，會造成大魚連續碰種砲彈
            // // 解決辦法:加快砲彈的速度或是碰撞時增加角度
            // // 採用碰撞時增加角度這個做法，結果導致彈跳方向難以預測
            // // 這樣的結果蠻有趣的，所以就這樣吧
            // // 因此在此作修正
            if (this.cannonAngle < 10 || this.cannonAngle > -10) {
                if (otherObj.speed < 0) { //砲彈會根據魚的向量決定要偏向哪邊
                    this.angle += -35 * Math.PI / 180;
                } else if (otherObj.speed > 0) { //砲彈會根據魚的向量決定要偏向哪邊
                    this.angle += 35 * Math.PI / 180;
                }
            } else if (this.cannonAngle == 90 || this.cannonAngle == -90) {
                if (otherObj.speed < 0) { //砲彈會根據魚的向量決定要偏向哪邊
                    this.angle += -35 * Math.PI / 180;
                } else if (otherObj.speed > 0) { //砲彈會根據魚的向量決定要偏向哪邊
                    this.angle += 35 * Math.PI / 180;
                }
            }


            // 先不考慮砲彈的碰撞盒子把魚的碰撞盒子整個包起來的狀況
            // 因為應該是不會發生這樣的狀況，真的發生了再修改

            // 檢測一，砲彈碰撞盒子的角都沒有與魚碰撞盒子重疊，同時砲彈盒子的上緣或下緣與魚盒子重疊
            // 反應: y向量逆轉
            if (this.edgeLeft <= otherObj.edgeLeft &&
                this.edgeRight >= otherObj.edgeRight) {
                if (this.yJump == true) {
                    this.ySpeed = -this.ySpeed
                }
            } else if (
                // 檢測二，砲彈碰撞盒子的角都沒有與魚碰撞盒子重疊，同時砲彈盒子的左緣或右緣與魚盒子重疊
                // 反應: x向量逆轉
                this.edgeTop <= otherObj.edgeTop &&
                this.edgeBottom >= otherObj.edgeBottom) {
                if (this.xJump == true) {
                    this.xSpeed = -this.xSpeed
                }
            } else if (
                // 狀況一:砲彈從魚的右下方過來 AKA 只有砲彈左上角與魚重疊
                this.edgeLeft >= otherObj.edgeLeft && this.edgeLeft <= otherObj.edgeRight &&
                this.edgeTop <= otherObj.edgeBottom && this.edgeTop >= otherObj.edgeTop
            ) {
                if (
                    (otherObj.edgeRight - this.edgeLeft) > (otherObj.edgeBottom - this.edgeTop) //如果重疊面積的長比高更大，判定為從上方碰撞
                ) {
                    this.ySpeed = -this.ySpeed;
                } else if (
                    (otherObj.edgeRight - this.edgeLeft) < (otherObj.edgeBottom - this.edgeTop) //如果重疊面積的長比高更小，判定為從右方碰撞
                ) {
                    this.xSpeed = -this.xSpeed;
                } else { //其他情況，就是長與高相等，雖然機率很低                              
                    this.ySpeed = -this.ySpeed;
                    this.xSpeed = -this.xSpeed;
                }
                this.hp -= 1;
            } else if (
                // 狀況二:砲彈從左下方過來 AKA 只有砲彈的右上角與魚重疊
                this.edgeRight >= otherObj.edgeLeft && this.edgeRight <= otherObj.edgeRight &&
                this.edgeTop <= otherObj.edgeBottom && this.edgeTop >= otherObj.edgeTop
            ) {
                if (
                    (this.edgeRight - otherObj.edgeLeft) > (otherObj.edgeBottom - this.edgeTop) //如果重疊面積的長比高更大，判定為從上方碰撞
                ) {
                    this.ySpeed = -this.ySpeed;

                } else if (
                    (this.edgeRight - otherObj.edgeLeft) < (otherObj.edgeBottom - this.edgeTop) //如果重疊面積的長比高更小，判定為從右方碰撞
                ) {
                    this.xSpeed = -this.xSpeed

                } else { //其他情況，就是長與高相等，雖然機率很低                              
                    this.ySpeed = -this.ySpeed
                    this.xSpeed = -this.xSpeed
                }
                this.hp -= 1;
            } else if (
                // 狀況三:砲彈從魚的左上方過來 AKA 只有砲彈右下角與魚重疊

                this.edgeRight >= otherObj.edgeLeft && this.edgeRight <= otherObj.edgeRight &&
                this.edgeBottom <= otherObj.edgeBottom && this.edgeBottom >= otherObj.edgeTop
            ) {
                if (
                    (this.edgeRight - otherObj.edgeLeft) > (this.edgeBottom - otherObj.edgeTop) //如果重疊面積的長比高更大，判定為從上方碰撞
                ) {
                    this.ySpeed = -this.ySpeed
                } else if (
                    (this.edgeRight - otherObj.edgeLeft) < (this.edgeBottom - otherObj.edgeTop) //如果重疊面積的長比高更小，判定為從右方碰撞
                ) {
                    this.xSpeed = -this.xSpeed

                } else { //其他情況，就是長與高相等，雖然機率很低                              
                    this.ySpeed = -this.ySpeed
                    this.xSpeed = -this.xSpeed
                }
                this.hp -= 1;
            } else if (
                // 狀況四:砲彈從魚的右上方過來 AKA 只有砲彈的左下角與魚重疊
                this.edgeLeft >= otherObj.edgeLeft && this.edgeLeft <= otherObj.edgeRight &&
                this.edgeBottom <= otherObj.edgeBottom && this.edgeBottom >= otherObj.edgeTop
            ) {
                if (
                    (otherObj.edgeRight - this.edgeLeft) > (this.edgeBottom - otherObj.edgeTop) //如果重疊面積的長比高更大，判定為從上方碰撞
                ) {
                    // 當砲彈的長或寬比魚的長或寬小的時候，避免觸發兩次彈跳檢定                              
                    this.ySpeed = -this.ySpeed;
                } else if (
                    (otherObj.edgeRight - this.edgeLeft) < (this.edgeBottom - otherObj.edgeTop) //如果重疊面積的長比高更小，判定為從右方碰撞
                ) {
                    // 當砲彈的長或寬比魚的長或寬小的時候，避免觸發兩次彈跳檢定                               
                    this.xSpeed = -this.xSpeed;
                } else { //其他情況，就是長與高相等，雖然機率很低
                    // 當砲彈的長或寬比魚的長或寬小的時候，避免觸發兩次彈跳檢定                              
                    this.ySpeed = -this.ySpeed
                    this.xSpeed = -this.xSpeed
                }
                this.hp -= 1;
            }


            //紀錄擊中與擊殺
            this.fishHited.push(otherObj.name)
            // this.hp -= 1; //彈跳彈的hp不會因擊中魚而減少
            otherObj.hp -= this.damage
            if (otherObj.hp <= 0) {
                otherObj.hitResult();
                this.scoreGeted += otherObj.score;
                this.fishKilled.push(otherObj.name)
            }

            // 我無法delete this，
            // 在想到能輕易的把這個物件刪除或null前，先把它瞬移到遙遠的地方了事
            // 2021-04-20 01:12 雖然無法想到了可以移除的方法，但是要動到許多地方，很花時間所以暫時作罷
            if (this.hp <= 0) {
                // 砲彈hp<=0，意味著這次下注的歷程結束，要結算這次下注的結果
                // 砲彈hp<=0，意味著這次下注的歷程結束，要結算這次下注的結果
                // 砲彈hp<=0，意味著這次下注的歷程結束，要結算這次下注的結果
                this.betResult();
            }
        } // 碰撞檢定else
    } // hitCheck
} // Shell03

class fishes {


    reNew() {
        // 更新物件數據
        this.x += this.speed
        // 公式 Math.sin(this.x / a)*b
        // a影響擺動區間，數值越大區間就越大
        // b影響擺動時的速度，數值越大就擺得越快越高
        // y的高低點取決於有多少的擺動空間(a)以及擺動速度(b)
        this.swingY = Math.sin(this.x / this.swingA) * this.swingB;
        this.y += this.swingY
        { //碰撞檢測用的參數
            this.edgeLeft = this.x - this.width / 2;
            this.edgeRight = this.x + this.width / 2;
            this.edgeTop = this.y - this.height / 2 * 0.7;
            this.edgeBottom = this.y + this.height / 2 * 0.7;
        }

        // 更新繪圖

        //這是碰撞檢定盒子，抓BUG時用的
        // ctx.fillRect(this.edgeLeft, this.edgeTop, this.edgeRight - this.edgeLeft, this.edgeBottom - this.edgeTop)

        ctx.save(); //儲存canvas狀態

        if (this.speed > 0) {
            ctx.scale(-1, 1)
            ctx.translate(-this.x, this.y);
            if (this.x > canvas.width + 300) {
                this.reNew = function () { return }
            }
        } else {
            ctx.translate(this.x, this.y);
            if (this.x < -300) {
                this.reNew = function () { return }
            }
        }

        // ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height)
        ctx.drawImage(this.img, this.width / -2, this.height / -2, this.width, this.height)

        ctx.restore(); //回復canvas狀態
        // 原本的做法，並把translate與if去掉
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        // ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        // 原本的做法
    } // reNew

    // 與砲彈碰撞的結果
    hitResult() {
        // 分數+1
        // score.text += this.score; // 總分數已不需要再顯示了，先註解掉

        // 因為不知道怎麼刪除或改變this，所以把他瞬移走
        // 只要被擊中，就會被移走，碰撞檢定座標也要移走才不會出問題
        this.y = 9999;
        this.edgeLeft = this.x;
        this.edgeRight = this.x + this.width
        this.edgeTop = this.y;
        this.edgeBottom = this.y + this.height

        this.reNew = function () { return; } // 移走後，將reNew函式修改成這樣，減少浪費運算資源
    } // hitResult


}

let fishes01Img = new Image();
fishes01Img.src = "./img/fish01.png"

class fishes01 extends fishes {
    constructor(x, y, d) {
        super();

        this.name = "小魚"
        this.img = fishes01Img;
        this.width = 64;
        this.height = 48;
        this.x = x
        this.y = y;
        // 使魚上下擺動
        this.swingA = 40; // a影響擺動區間，數值越大區間就越大
        this.swingB = 3; // b影響擺動時的速度，數值越大就擺得越快越高
        // 碰撞檢定用的參數，構成物件邊緣的四個點
        this.edgeLeft = this.x;
        this.edgeRight = this.x + this.width
        this.edgeTop = this.y;
        this.edgeBottom = this.y + this.height
        this.speed = 4 * d; //d影響魚的方向，值應為1或-1
        // this.speed = 4; //d影響魚的方向，值應為1或-1
        this.hp = 1;
        // 用在generator的參數

        this.score = 1; //分數
    } // constructor
} // fishes01

let fishes02Img = new Image();
fishes02Img.src = "./img/fish02.png"

class fishes02 extends fishes {
    constructor(x, y, d) {
        super();

        this.name = "中魚"
        this.img = fishes02Img;
        this.width = 180;
        this.height = 100;
        this.x = x;
        this.y = y;
        // 使魚上下擺動
        this.swingA = 30; // a影響擺動區間，數值越大區間就越大
        this.swingB = 1.5; // b影響擺動時的速度，數值越大就擺得越快越高
        // 碰撞檢定用的參數，構成物件邊緣的四個點
        this.edgeLeft = this.x;
        this.edgeRight = this.x + this.width
        this.edgeTop = this.y;
        this.edgeBottom = this.y + this.height
        this.speed = 3 * d;
        this.hp = 7;
        this.score = 8;
    } // constructor
} // fishes02

let fishes03Img = new Image();
fishes03Img.src = "./img/fish03.png"

class fishes03 extends fishes {
    constructor(x, y, d) {
        super();

        this.name = "大魚"
        this.img = fishes03Img
        this.width = 240;
        this.height = 150;
        this.x = x;
        this.y = y;
        // 使魚上下擺動
        this.swingA = 60; // a影響擺動區間，數值越大區間就越大
        this.swingB = 0.8; // b影響擺動時的速度，數值越大就擺得越快越高
        // 碰撞檢定用的參數，構成物件邊緣的四個點
        this.edgeLeft = this.x;
        this.edgeRight = this.x + this.width
        this.edgeTop = this.y;
        this.edgeBottom = this.y + this.height
        this.speed = 2 * d;
        this.hp = 11;
        this.score = 13
    } // constructor
} // fishes03

let fishes04Img = new Image();
fishes04Img.src = "./img/fish04.png"

class fishes04 extends fishes {
    constructor() {
        super();

        this.name = "大紅魚"
        this.img = fishes04Img
        this.width = 560;
        this.height = 350;
        // this.x = x;
        // this.randomY = (()=>  Math.floor(Math.random()*3+1))

        // 隨機方向與初始x座標 //以及速度(固定)
        this.randomDirection = Math.floor(Math.random() * 2);
        (this.randomDirection == 0) ? this.speed = 1.5 : this.speed = -1.5;
        (this.randomDirection == 0) ? this.x = -300 : this.x = (canvas.width + 300);

        // 隨機初始y座標
        this.randomY = Math.floor(Math.random() * 3 + 1);
        (this.randomY == 1) ? this.y = 150 : (this.randomY == 2) ? this.y = 300 : this.y = 450;
        // this.y = y;
        // 使魚上下擺動
        this.swingA = 80; // a影響擺動區間，數值越大區間就越大
        this.swingB = 0.5; // b影響擺動時的速度，數值越大就擺得越快越高
        // 碰撞檢定用的參數，構成物件邊緣的四個點
        this.edgeLeft = this.x;
        this.edgeRight = this.x + this.width
        this.edgeTop = this.y;
        this.edgeBottom = this.y + this.height;
        // this.speed = 1 * d;
        this.hp = 50;
        this.score = 55
    } // constructor
} // fishes04

let fishes05Img = new Image();
fishes05Img.src = "./img/fish05.png"

class fishes05 extends fishes {
    constructor(x, y, d) {
        super();

        this.name = "小快魚"
        this.img = fishes05Img
        this.width = 80;
        this.height = 48;
        this.x = x;
        this.y = y;
        // 使魚上下擺動
        this.swingA = 650; // a影響擺動區間，數值越大區間就越大
        this.swingB = -6; // b影響擺動時的速度，數值越大就擺得越快越高
        // 碰撞檢定用的參數，構成物件邊緣的四個點
        this.edgeLeft = this.x;
        this.edgeRight = this.x + this.width
        this.edgeTop = this.y;
        this.edgeBottom = this.y + this.height
        this.speed = 10 * d;
        this.hp = 1;
        this.score = 2
    } // constructor
} // fishes05

 // 魚群生成器
 class fishGenerator {
    constructor(x, y, d, type = fishes01) {
        this.generatorSwitch = false; //魚群generator開關
        this.x = x; // x座標
        this.y = y; // y座標
        this.d = d; // 方向，d應該是 1 或 -1
        // 下面偏移量，讓魚不會有對齊的不自然感，如果移動方向往左，則偏移量為負
        // 這樣才不會有兩邊出現時間不一樣的現象
        if (d > 0) {
            this.randomX = Math.floor(Math.random() * 100);
        } else {
            this.randomX = -Math.floor(Math.random() * 100);
        }

        this.type = type; // 魚的class 預設為fishes01
        switch (type) {
            case fishes01:
                this.maxN = 6; // 每一輪最大數量 
                this.minN = 3 // 每一輪最小數量
                this.tn = 6; // 每一輪要產生的數量 //預設值為第一次產生的數量
                this.t = 30; // 每一輪的最小間隔時間
                this.nt = 0.5; // 每一輪每隻魚產生的間隔時間
                break;
            case fishes02:
                this.maxN = 4;
                this.minN = 2
                this.tn = 4;
                this.t = 120;
                this.nt = 1.5;
                break;
            case fishes03:
                this.maxN = 3;
                this.minN = 1
                this.tn = 3;
                this.t = 180;
                this.nt = 3;
                break;
            case fishes04:
                this.maxN = 1;
                this.minN = 1
                this.tn = 1;
                this.t = 1000;
                this.nt = 1;
                break;
            case fishes05:
                this.maxN = 8;
                this.minN = 6
                this.tn = 8;
                this.t = 1200;
                this.nt = 0.2;
                break;
        } //switch

        this.n = 0; // 當前已產生的數量
        this.turnFrame = 1; //第一次執行generator的幀
    }
    generator() {
        if (ctxFrames == this.turnFrame) { // 如果 現在幀數 == 下一輪幀數
            this.generatorSwitch = true //開啟開關
            this.n = 0;    //當前產生數量歸零
        }
        if (this.generatorSwitch == true) { //如果開關為true
            if (ctxFrames % (Math.floor(60 * this.nt)) == 0) { //當幀數為60*this.nt的倍數，也就是約每this.nt秒時
                fisharr[fishArrIndx] = new this.type(this.x + this.randomX, this.y, this.d) //產生一個fishes物件，同時把偏移量加進去
                fishArrIndx++; //魚群索引值++
                if (fishArrIndx >= fishNumMax) {
                    fishArrIndx = 0;
                }
                this.n++; //已產生的魚數量++
                if (this.n == this.tn) { //如果 已產生的魚 == 這一輪要產生的量
                    this.generatorSwitch = false; //關閉開關
                    this.tn = Math.floor(Math.random() * (this.maxN - this.minN + 1) + this.minN) //下一輪要產生的數量
                    this.turnFrame = ctxFrames + this.t + Math.floor(Math.random() * 120);
                    //下一次啟動generator的幀數為ctxFrames + this.t + 偏移量，this.t代表著最小值
                }
            }
        }
    } // generator
} // class fishGenerator

class GameButton {
    constructor(type, x, y, width, height, img, text, key, cost) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.text = text;
        this.key = key;
        this.cost = cost;

        this.color = "gray";
        this.fontSize = "25px";
        this.fontFamily = 'Comic Sans MS';
    } // constructor
    reNew() {
        // 更新繪圖

        ctx.save(); //儲存canvas狀態
        ctx.translate(this.x, this.y)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height)

        ctx.fillStyle = "white"
        ctx.fillRect(this.width / -2, this.height / -2 + 70, this.width, 80)

        if (this.type == "shellBtn") {
            ctx.drawImage(this.img, this.width / -2 + 25, this.height / -2 + 10, 50, 50)
        }


        ctx.font = this.fontSize + " " + this.fontFamily
        ctx.fillStyle = "black";
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.fillText(this.text, 0, 23)
        ctx.fillText(`費用:${this.cost}`, -13, 53)
        ctx.fillText(this.key, 40, -15)


        ctx.restore(); //回復canvas狀態
    } // reNew
}

class textObj {
    constructor(type, x, y, s, c, tex) {
        this.x = x; // x座標
        this.y = y; // y座標
        this.fontSize = s; // 文字大小，單位通常為px
        this.color = c; // 文字顏色
        this.text = tex; // 文字內容

        this.fontFamily = 'Comic Sans MS' // 字型
        this.font = this.fontSize + " " + this.fontFamily;

        if (type == "textBtn") {
            this.textAlign = "center";
        } else (this.textAlign = "start")



        // type num代表數字 btn代表按鈕
        this.type = type;

        if (this.type == 'textBtn') {

            // 取得字串width之前必須先將字體大小與字型代進去才能得到正確的width
            // ctx.font = this.fontSize + " " + this.fontFamily;
            this.font = "bolder" + " " + this.fontSize + " " + this.fontFamily
            ctx.font = this.font;
            this.width = ctx.measureText(tex).width;
            // 要取得文字的高度相當麻煩，因為時間不充裕，我決定先用最簡單也最死板的方法
            // 畫一個矩形放在字的下層，調整高度使貼合文字上下端
            // 高度符合時該高度就是文字的高度

            // 文字下邊會有一塊為了配合小寫字母的空白
            // 因為我的文字沒有小寫字母，所以這個空白沒有意義
            // 因此y座標要考慮這個空白的寬度，作誤差修正
            // 方法跟上面一樣，人工慢慢調
            // ps.直接用一張寫了文字的圖片代替就不用這麼麻煩了.....

            // 0.12這個修正值是手動試出來的，不確定字體改變大小後是否還有效
            // 如果有小寫字母，現在還沒計畫用小寫字母做按鈕，遇到了再處理
            let fontSineNum = parseInt(this.fontSize);
            this.y += fontSineNum * 0.12;

            this.height = 80;
            // 用來做按鈕的碰撞檢定
            this.edgeRight = this.x + this.width / 2
            this.edgeLeft = this.x - this.width / 2;
            this.edgeBottom = this.y + this.height / 2 - fontSineNum * 0.12
            this.edgeTop = this.y - this.height / 2 - fontSineNum * 0.12;
        }



    } // constructor

    reNew() {
        // 更新物件數據
        if (this.type == 'textBtn') {
            this.font = "bolder" + " " + this.fontSize + " " + this.fontFamily
        } else {
            this.font = this.fontSize + " " + this.fontFamily;
        }

        // 更新物件數據

        // 更新繪圖


        // 字體大小與字型
        ctx.save();
        ctx.font = this.font
        ctx.textBaseline = "middle"
        ctx.textAlign = this.textAlign
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y)
        ctx.restore()
    } // reNew
} // textObj

export { Cannon,Shell01,Shell02,Shell03,
    fishes01,fishes02,fishes03,fishes04,fishes05,fishGenerator, 
    GameButton,textObj }