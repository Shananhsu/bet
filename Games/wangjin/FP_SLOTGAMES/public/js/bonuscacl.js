var score = parseFloat($("#result").text());
var bet = parseFloat($('#bet').val());
var winTotal=0;
var gameRA=[];
// gameRA.push("Line 2 :"+ary[0][1]+"*5")

//console.log(gameRA.toString())
function bonusCacl() {
    scoreBefore = score
    if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 1 2 3 4")
        gameRA.push("Line 2 :"+ary[0][slotR[0]]+"*5")
        L2();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 1 2 3")
        gameRA.push("Line 2 :"+ary[0][slotR[0]]+"*4")
        L2();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 1 2 ")
        gameRA.push("Line 2 :"+ary[0][slotR[0]]+"*3")
        L2();
    }

    //2.row2
    if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]] && ary[2][slotR[7]] == slotR[
            8] && ary[3][slotR[8]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 6 7 8 9")
        gameRA.push("Line 1 :"+ary[0][slotR[5]]+"*5")
        L1();
    } else if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]] && ary[2][slotR[7]] ==
        slotR[
            8]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 6 7 8")
        gameRA.push("Line 1 :"+ary[0][slotR[5]]+"*4")
        L1();
    } else if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 6 7")
        gameRA.push("Line 1 :"+ary[0][slotR[5]]+"*3")
        L1();
    }
    //3.row3
    if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 11 12 13 14")
        gameRA.push("Line 3 :"+ary[0][slotR[10]]+"*5")
        L3();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && slotR[
            12] ==
        ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 11 12 13")
        gameRA.push("Line 3 :"+ary[0][slotR[10]]+"*4")
        L3();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == slotR[
            12]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 11 12")
        gameRA.push("Line 3 :"+ary[0][slotR[10]]+"*3")
        L3();
    }
    //4.0 6 12 8 4
    if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 6 12 8 4");
        gameRA.push("Line 4 :"+ary[0][slotR[0]]+"*5")
        L4();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 6 12 8")
        gameRA.push("Line 4 :"+ary[0][slotR[0]]+"*4")
        L4();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 6 12")
        gameRA.push("Line 4 :"+ary[0][slotR[0]]+"*3")
        L4();
    }
    //5.10 6 2 8 14
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == slotR[
            8] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 2 8 14")
        gameRA.push("Line 5 :"+ary[0][slotR[10]]+"*5")
        L5();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 6 2 8")
        gameRA.push("Line 5 :"+ary[0][slotR[10]]+"*4")
        L5();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 6 2")
        gameRA.push("Line 5 :"+ary[0][slotR[10]]+"*3")
        L5();
    }

    //6.0 1 7 3 4
    if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == slotR[
            3] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 1 7 3 4")
        gameRA.push("Line 6 :"+ary[0][slotR[0]]+"*5")
        L6();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 1 7 3")
        gameRA.push("Line 6 :"+ary[0][slotR[0]]+"*4")
        L6();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 1 7")
        gameRA.push("Line 6 :"+ary[0][slotR[0]]+"*3")
        L6();
    }

    //7.10 11 7 13 14
    if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == slotR[
            3] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 11 7 13 14")
        gameRA.push("Line 7 :"+ary[0][slotR[10]]+"*5")
        L7();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 11 7 13")
        gameRA.push("Line 7 :"+ary[0][slotR[10]]+"*4")
        L7();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 11 7")
        gameRA.push("Line 7 :"+ary[0][slotR[10]]+"*3")
        L7();
    }

    //8.5 1 2 3 9
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] == slotR[
            3] && ary[3][slotR[3]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 2 3 9")
        gameRA.push("Line 8 :"+ary[0][slotR[5]]+"*5")
        L8();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 1 2 3")
        gameRA.push("Line 8 :"+ary[0][slotR[5]]+"*4")
        L8();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        gameRA.push("Line 8 :"+ary[0][slotR[5]]+"*3")
        console.log("5 1 2")
        L8();
    }

    //9.5 11 12 13 9
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 12 13 9")
        gameRA.push("Line 9 :"+ary[0][slotR[5]]+"*5")
        L9();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 11 12 13")
        gameRA.push("Line 9 :"+ary[0][slotR[5]]+"*4")
        L9();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 11 12")
        gameRA.push("Line 9 :"+ary[0][slotR[5]]+"*3")
        L9();
    }

    //10.5 1 7 3 9
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == slotR[
            3] && ary[3][slotR[3]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 7 3 9")
        gameRA.push("Line 10 :"+ary[0][slotR[5]]+"*5")
        L10();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 1 7 3")
        gameRA.push("Line 10 :"+ary[0][slotR[5]]+"*4")
        L10();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 1 7")
        gameRA.push("Line 10 :"+ary[0][slotR[5]]+"*3")
        L10();
    }
    //11.5 11 7 13 9
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == slotR[
            13] && ary[3][slotR[13]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 7 13 9")
        gameRA.push("Line 11 :"+ary[0][slotR[5]]+"*5")
        L11();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] ==
        ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 11 7 13")
        gameRA.push("Line 11 :"+ary[0][slotR[5]]+"*4")
        L11();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 11 7")
        gameRA.push("Line 11 :"+ary[0][slotR[5]]+"*3")
        L11();
    }
    //12.0 6 2 8 4
    if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 6 2 8 4")
        gameRA.push("Line 12 :"+ary[0][slotR[0]]+"*5")
        L12();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 6 2 8")
        gameRA.push("Line 12 :"+ary[0][slotR[0]]+"*4")
        L12();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 6 2")
        gameRA.push("Line 12 :"+ary[0][slotR[0]]+"*3")
        L12();
    }

    //13.10 6 12 8 14
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 12 8 14")
        gameRA.push("Line 13 :"+ary[0][slotR[10]]+"*5")
        L13();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 6 12 8")
        gameRA.push("Line 13 :"+ary[0][slotR[10]]+"*4")
        L13();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 6 12")
        gameRA.push("Line 13 :"+ary[0][slotR[10]]+"*3")
        L13();
    }
//----------------------------------------------------------
    //14.5 6 2 8 9
    if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 6 2 8 9")
        gameRA.push("Line 14 :"+ary[0][slotR[5]]+"*5")
        L14();
    } else if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 6 2 8")
        gameRA.push("Line 14 :"+ary[0][slotR[5]]+"*4")
        L14();
    } else if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 6 2")
        gameRA.push("Line 14 :"+ary[0][slotR[5]]+"*3")
        L14();
    }

    //15.5 6 12 8 9
    if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 6 12 8 9")
        gameRA.push("Line 15 :"+ary[0][slotR[5]]+"*5")
        L15();
    } else if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 6 12 8")
        gameRA.push("Line 15 :"+ary[0][slotR[5]]+"*4")
        L15();
    } else if (ary[0][slotR[5]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 6 12")
        gameRA.push("Line 15 :"+ary[0][slotR[5]]+"*3")
        L15();
    }

    //16.0 6 7 8 4
    if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 6 7 8 4")
        gameRA.push("Line 16 :"+ary[0][slotR[0]]+"*5")
        L16();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 6 7 8")
        gameRA.push("Line 16 :"+ary[0][slotR[0]]+"*4")
        L16();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 6 7")
        gameRA.push("Line 16 :"+ary[0][slotR[0]]+"*3")
        L16();
    }
    //17.10 6 7 8 14
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 7 8 14")
        gameRA.push("Line 17 :"+ary[0][slotR[10]]+"*5")
        L17();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 6 7 8")
        gameRA.push("Line 17 :"+ary[0][slotR[10]]+"*4")
        L17();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 6 7")
        gameRA.push("Line 17 :"+ary[0][slotR[10]]+"*3")
        L17();
    }

    //18.0 6 12 13 14
    if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 6 12 13 14")
        gameRA.push("Line 18 :"+ary[0][slotR[0]]+"*5")
        L18();
    } else if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 6 12 13")
        gameRA.push("Line 18 :"+ary[0][slotR[0]]+"*4")
        L18();
    }


    //19.10 6 2 3 4
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 2 3 4")
        gameRA.push("Line 19 :"+ary[0][slotR[10]]+"*5")
        L19();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 6 2 3")
        gameRA.push("Line 19 :"+ary[0][slotR[10]]+"*4")
        L19();
    }

    //20.0 11 2 13 4
    if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 11 2 13 4")
        gameRA.push("Line 20 :"+ary[0][slotR[0]]+"*5")
        L20();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 11 2 13")
        gameRA.push("Line 20 :"+ary[0][slotR[0]]+"*4")
        L20();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 11 2")
        gameRA.push("Line 20 :"+ary[0][slotR[0]]+"*3")
        L20();
    }

    //21.10 1 12 3 14
    if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 1 12 3 14")
        gameRA.push("Line 21 :"+ary[0][slotR[10]]+"*5")
        L21();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 1 12 3")
        gameRA.push("Line 21 :"+ary[0][slotR[10]]+"*4")
        L21();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 1 12")
        gameRA.push("Line 21 :"+ary[0][slotR[10]]+"*3")
        L21();
    }

    //22.5 1 12 3 9
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 12 3 9")
        gameRA.push("Line 22 :"+ary[0][slotR[5]]+"*5")
        L22();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 1 12 3")
        gameRA.push("Line 22 :"+ary[0][slotR[5]]+"*4")
        L22();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 1 12")
        gameRA.push("Line 22 :"+ary[0][slotR[5]]+"*3")
        L22();
    }

    //23.5 11 2 13 9
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 2 13 9")
        gameRA.push("Line 23 :"+ary[0][slotR[5]]+"*5")
        L23();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 11 2 13")
        gameRA.push("Line 23 :"+ary[0][slotR[5]]+"*4")
        L23();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 3)
        console.log("5 11 2")
        gameRA.push("Line 23 :"+ary[0][slotR[5]]+"*3")
        L23();
    }

    //24.0 1 7 13 14
    if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 1 7 13 14")
        gameRA.push("Line 24 :"+ary[0][slotR[0]]+"*5")
        L24();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 1 7 13")
        gameRA.push("Line 24 :"+ary[0][slotR[0]]+"*4")
        L24();
    }

    //25.10 11 7 3 4
    if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 11 7 3 4")
        gameRA.push("Line 25 :"+ary[0][slotR[10]]+"*5")
        L25();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 11 7 3")
        gameRA.push("Line 25 :"+ary[0][slotR[10]]+"*4")
        L25();
    }

    //26.5 11 7 3 9
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 7 3 9")
        gameRA.push("Line 26 :"+ary[0][slotR[5]]+"*5")
        L26();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 11 7 3")
        gameRA.push("Line 26 :"+ary[0][slotR[5]]+"*4")
        L26();
    }

    //27.5 1 7 13 9
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 7 13 9")
        gameRA.push("Line 27 :"+ary[0][slotR[5]]+"*5")
        L27();
    }
    //  else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]]) {
    //     score = parseFloat($("#result").text());
    //     bonusCount(ary[0][slotR[5]], score, bet, 4)
    //     console.log("5 1 7 13")
    // }

    //28.0 1 12 3 4
    if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 1 12 3 4")
        gameRA.push("Line 28 :"+ary[0][slotR[0]]+"*5")
        L28();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 1 12 3")
        gameRA.push("Line 28 :"+ary[0][slotR[0]]+"*4")
        L28();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 1 12")
        gameRA.push("Line 28 :"+ary[0][slotR[0]]+"*3")
        L28();
    }

    //29.10 11 2 13 14
    if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 11 2 13 14")
        gameRA.push("Line 29 :"+ary[0][slotR[10]]+"*5")
        L29();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 11 2 13")
        gameRA.push("Line 29 :"+ary[0][slotR[10]]+"*4")
        L29();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 11 2")
        gameRA.push("Line 29 :"+ary[0][slotR[10]]+"*3")
        L29();
    }

    //30.0 11 12 13 4
    if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 11 12 13 4")
        gameRA.push("Line 30 :"+ary[0][slotR[0]]+"*5")
        L30();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 11 12 13")
        gameRA.push("Line 30 :"+ary[0][slotR[0]]+"*4")
        L30();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 11 12")
        gameRA.push("Line 30 :"+ary[0][slotR[0]]+"*3")
        L30();
    }

    //31.10 1 2 3 14
    if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 1 2 3 14")
        gameRA.push("Line 31 :"+ary[0][slotR[10]]+"*5")
        L31();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 1 2 3")
        gameRA.push("Line 31 :"+ary[0][slotR[10]]+"*4")
        L31();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 1 2")
        gameRA.push("Line 31 :"+ary[0][slotR[10]]+"*3")
        L31();
    }

    //32.0 11 7 3 14
    if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 11 7 3 14")
        gameRA.push("Line 32 :"+ary[0][slotR[0]]+"*5")
        L32();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 11 7 3")
        gameRA.push("Line 32 :"+ary[0][slotR[0]]+"*4")
        L32();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 3)
        console.log("0 11 7")
        gameRA.push("Line 32 :"+ary[0][slotR[0]]+"*3")
        L32();
    }

    //33.10 1 7 13 4
    if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 1 7 13 4")
        gameRA.push("Line 33 :"+ary[0][slotR[10]]+"*5")
        L33();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 1 7 13")
        gameRA.push("Line 33 :"+ary[0][slotR[10]]+"*4")
        L33();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 3)
        console.log("10 1 7")
        gameRA.push("Line 33 :"+ary[0][slotR[10]]+"*3")
        L33();
    }

    //34.5 1 12 8 14
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 12 8 14")
        gameRA.push("Line 34 :"+ary[0][slotR[5]]+"*5")
        L34();
    } else if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 1 12 8")
        gameRA.push("Line 34 :"+ary[0][slotR[5]]+"*4")
        L34();
    }

    //35.0 11 7 13 4
    if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 11 7 13 4")
        gameRA.push("Line 35 :"+ary[0][slotR[0]]+"*5")
        L35();
    } else if (ary[0][slotR[0]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 11 7 13")
        gameRA.push("Line 35 :"+ary[0][slotR[0]]+"*4")
        L35();
    }
    //36.0 6 2 8 14
    if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 6 2 8 14")
        gameRA.push("Line 36 :"+ary[0][slotR[0]]+"*5")
        L36();
    }

    //37.10 6 12 3 4
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 12 3 4")
        gameRA.push("Line 37 :"+ary[0][slotR[10]]+"*5")
        L37();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 6 12 3")
        gameRA.push("Line 37 :"+ary[0][slotR[10]]+"*4")
        L37();
    }

    //38.10 1 2 8 14
    if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 1 2 8 14")
        gameRA.push("Line 38 :"+ary[0][slotR[10]]+"*5")
        L38();
    } else if (ary[0][slotR[10]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 1 2 8")
        gameRA.push("Line 38 :"+ary[0][slotR[10]]+"*4")
        L38();
    }

    //39.5 11 12 3 4
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 12 3 4")
        gameRA.push("Line 39 :"+ary[0][slotR[5]]+"*5")
        L39();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        console.log("5 11 12 3")
        gameRA.push("Line 39 :"+ary[0][slotR[5]]+"*4")
        L39();
    }

    //40.0 1 7 8 14
    if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 1 7 8 14")
        gameRA.push("Line 40 :"+ary[0][slotR[0]]+"*5")
        L40();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        console.log("0 1 7 8")
        gameRA.push("Line 40 :"+ary[0][slotR[0]]+"*4")
        L40();
    }

    //41.10 11 2 8 4
    if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 11 2 8 4")
        gameRA.push("Line 41 :"+ary[0][slotR[10]]+"*5")
        L41();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        gameRA.push("Line 41 :"+ary[0][slotR[10]]+"*4")
        L41();
    }

    //42.0 1 12 13 14
    if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 1 12 13 14")
        gameRA.push("Line 42 :"+ary[0][slotR[0]]+"*5")
        L42();
    } else if (ary[0][slotR[0]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 4)
        gameRA.push("Line 42 :"+ary[0][slotR[0]]+"*4")
        L42();
    }

    //43.10 11 2 3 4
    if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 11 2 3 4")
        gameRA.push("Line 43 :"+ary[0][slotR[10]]+"*5")
        L43();
    } else if (ary[0][slotR[10]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] ==
        ary[3][slotR[3]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 11 2 3")
        gameRA.push("Line 43 :"+ary[0][slotR[10]]+"*4")
        L43();
    }

    //44.5 11 2 8 14
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 2 8 14")
        gameRA.push("Line 44 :"+ary[0][slotR[5]]+"*5")
        L44();
    } else if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[8]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 4)
        gameRA.push("Line 44 :"+ary[0][slotR[5]]+"*4")
        L44();
    }

    //45.5 1 12 8 4
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 12 8 4")
        gameRA.push("Line 45 :"+ary[0][slotR[5]]+"*5")
        L45();
    }

    //46.0 6 12 8 9
    if (ary[0][slotR[0]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] == ary[3][slotR[8]] && ary[3][slotR[8]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[0]], score, bet, 5)
        console.log("0 6 12 8 9")
        gameRA.push("Line 46 :"+ary[0][slotR[0]]+"*5")
        L46();
    }
    //47.10 6 2 13 9
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 2 13 9")
        gameRA.push("Line 47 :"+ary[0][slotR[10]]+"*5")
        L47();
    } else if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[2]] && ary[2][slotR[2]] == ary[3][slotR[13]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 4)
        console.log("10 6 2 13")
        gameRA.push("Line 47 :"+ary[0][slotR[10]]+"*4")
        L47();
    }
    //48.5 11 7 3 4
    if (ary[0][slotR[5]]== ary[1][slotR[11]] && ary[1][slotR[11]] == ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[4]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 11 7 3 4")
        gameRA.push("Line 48 :"+ary[0][slotR[5]]+"*5")
        L48();
    }
    //49.5 1 7 13 14
    if (ary[0][slotR[5]]== ary[1][slotR[1]]&& ary[1][slotR[1]]== ary[2][slotR[7]] && ary[2][slotR[7]] == ary[3][slotR[13]] && ary[3][slotR[13]] == ary[4][slotR[14]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[5]], score, bet, 5)
        console.log("5 1 7 13 14")
        gameRA.push("Line 49 :"+ary[0][slotR[5]]+"*5")
        L49();
    }
    //50.10 6 12 3 9
    if (ary[0][slotR[10]]== ary[1][slotR[6]] && ary[1][slotR[6]] == ary[2][slotR[12]] && ary[2][slotR[12]] ==
        ary[3][slotR[3]] && ary[3][slotR[3]] == ary[4][slotR[9]]) {
        score = parseFloat($("#result").text());
        bonusCount(ary[0][slotR[10]], score, bet, 5)
        console.log("10 6 12 3 9")
        gameRA.push("Line 50 :"+ary[0][slotR[10]]+"*5")
        L50();
    }
    
};


function bonusCount(x, score, bet, count) {
    winCount = 0;
    //console.log(score)
    switch (x) {

        case 'cherry':
            console.log("cherry")
            winCount += 2 * bet * count;
            console.log(score)
            break;
        case 'orange':
            console.log('orange')
            winCount += 3 * bet * count;
            console.log(score)
            break;
        case 'grape':
            console.log('grape')
            winCount += 4 * bet * count;
            console.log(score)
            break;
        case 'cookie':
            console.log('cookie')
            winCount += 5 * bet * count;
            console.log(score)
            break;
        case 'bell':
            console.log('bell')
            winCount += 6 * bet * count;
            console.log(score)
            break;
        case 'bar':
            console.log('bar')
            winCount += 7 * bet * count;
            console.log(score)
            break;
        case '777':
            console.log('777')
            winCount += 10 * bet * count;
            console.log(score)
            break;
    }
    if (winCount != 0) {
         winTotal+=winCount;
        score += winCount;
        $("#result").text(score.toFixed(2));
        
    } else {
        winTotal = -bet;
        $("#result").text(score.toFixed(2));
    }
    return winTotal;
    
}
