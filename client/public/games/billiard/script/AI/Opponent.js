function Opponent(power, rotation){
    //ai力道
    this.power = power || (Math.random() * 75 + 1);
    //ai球反射
    this.rotation = rotation || (Math.random()*6.283)-3.141;
    this.evaluation = 0;
}