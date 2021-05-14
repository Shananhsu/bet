        // 讀秒次數
        var repetsec = 10;
        // 骰子變數
        var elDiceOne = document.getElementById('dice1');
        var elDiceTwo = document.getElementById('dice2');
        var elDiceThree = document.getElementById('dice3');
        // 測試按鈕
        // var elComeOut = document.getElementById('comeOutButton');
        // elComeOut.onclick = function() {
        //     comeOutRoll();
        // };

        // 點多少次籌碼下注金額就有多少錢



        // 倒數計時器5秒
        var seconds = repetsec; // seconds for HTML 
        function countdownTimer() {
            foo = setInterval(function() {
                document.getElementById("timecounter").innerHTML = "開獎剩餘秒數 : " + seconds;
                seconds--;
                console.log(seconds)
                if (seconds == 0) {
                    seconds = repetsec
                }
            }, 1000);
        }
        countdownTimer();


        // setInterval(function(endTime, nowTime) {
        //     // 倒數計時秒數差值
        //     var offsetTime = (endTime - nowTime) / 1000;
        //     var secCount = parseInt(offsetTime % 60);
        //     tc.textContent = secCount + "秒";
        // }, 1000);

        // // 定時器 5秒執行一次 clearInterval(clock) 清除秒數重複執行
        var clock = setInterval(docomeOutRoll, repetsec * 1000);

        function docomeOutRoll() {
            comeOutRoll();
        }

        // 擲骰子
        function comeOutRoll() {
            // Initial dice variables
            var diceOne = Math.floor((Math.random() * 6) + 1);
            var diceTwo = Math.floor((Math.random() * 6) + 1);
            var diceThree = Math.floor((Math.random() * 6) + 1);
            var rollTotal = diceOne + diceTwo + diceThree;
            var winSmallCount = 0;
            var winBigCount = 0;
            var winTSCount = 0;
            var winPointCount = 0;
            var winTSpointCount = 0;

            console.log(rollTotal + ' ' + diceOne + ' ' + diceTwo + ' ' + diceThree);
            // 動畫反映
            elDiceOne.classList.toggle('animate');
            elDiceTwo.classList.toggle('animate');
            elDiceThree.classList.toggle('animate');
            // console.log(elDiceThree.classList);
            //0: "dice",1: "dice-three",2: "animate",3: "show-3"
            //骰子點數移除掉目前的點數改成新的
            for (var i = 1; i <= 6; i++) {
                elDiceOne.classList.remove('show-' + i);
                if (diceOne === i) {
                    elDiceOne.classList.add('show-' + i);
                }
            }
            for (var k = 1; k <= 6; k++) {
                elDiceTwo.classList.remove('show-' + k);
                if (diceTwo === k) {
                    elDiceTwo.classList.add('show-' + k);
                }
            }
            for (var j = 1; j <= 6; j++) {
                elDiceThree.classList.remove('show-' + j);
                if (diceThree === j) {
                    elDiceThree.classList.add('show-' + j);
                }
            }
            // 測試資料
            // diceOne = 2;
            // diceTwo = 2;
            // diceThree = 2;
            // rollTotal = 4;
            // 判斷骰子對應table上的區塊

            if ((diceOne == diceTwo) && (diceTwo == diceThree)) {
                shake($(".threesmae"), "tableShine", 3);
                if (diceOne == 1) {
                    shake($(".threesmae1"), "tableShine", 3);
                    winTSpointCount = countingWin('threeSame1');
                } else if (diceOne == 2) {
                    shake($(".threesmae2"), "tableShine", 3);
                    winTSpointCount = countingWin('threeSame2');
                } else if (diceOne == 3) {
                    shake($(".threesmae3"), "tableShine", 3);
                    winTSpointCount = countingWin('threeSame3');
                } else if (diceOne == 4) {
                    shake($(".threesmae4"), "tableShine", 3);
                    winTSpointCount = countingWin('threeSame4');
                } else if (diceOne == 5) {
                    shake($(".threesmae5"), "tableShine", 3);
                    winTSpointCount = countingWin('threeSame5');
                } else if (diceOne == 6) {
                    shake($(".threesmae6"), "tableShine", 3);
                    winTSpointCount = countingWin('threeSame6');
                }

                winTSCount = countingWin('threeSame');
                // console.log("threesame")

            } else if (rollTotal < 11) {
                shake($("#smallDice"), "tableShine", 3);
                let temp_id = ".dice-" + rollTotal;
                shake($(temp_id), "tableShine", 3);
                winSmallCount = countingWin('small');

                // console.log("small");
            } else if (rollTotal > 10) {
                shake($("#bigDice"), "tableShine", 3);
                let temp_id = ".dice-" + rollTotal;
                shake($(temp_id), "tableShine", 3);
                // console.log("big");
                winBigCount = countingWin('big');
                winPointCount = countingWin('');
            }

            totalwin = winTSCount + winTSpointCount + winSmallCount + winBigCount + winPointCount;
            // 清掉籌碼以免一直重複累加
            $('[class^="TempChips"]').remove();

            document.getElementById('betMoneyAmount').innerText = 0;
            document.getElementById('balanceAmount').innerText =
                parseFloat(document.getElementById('balanceAmount').innerText) + totalwin + "元";

        }

        // 測試用點擊SMALL 會閃爍
        // $("#smallDice").bind({
        //     click: function() {
        //         console.log('123');
        //         // 背景變色
        //         // function changeColour() {
        //         //     document.getElementById("smallDice").style.backgroundColor = "yellow";
        //         // }
        //         shake($(this), "red", 3);
        //         // return false;
        //     }
        // });
        // ele要閃爍的元素, cls 閃爍顏色屬性,要在CSS改 ,times 次數
        function shake(ele, cls, times) {
            var i = 0,
                t = false,
                // 找到class 後面加一個屬性
                o = ele.attr("class") + " ",
                c = "",
                times = times || 2;
            // console.log(t)
            // if (t) return;
            t = setInterval(function() {
                i++;
                // 為了閃爍要一次有一次沒有,非0則true別忘了
                c = i % 2 ? o + cls : o;
                ele.attr("class", c);
                if (i == 2 * times) {
                    clearInterval(t);
                    ele.removeClass(cls);
                }
            }, 200);
        };

        // 選用籌碼
        // priceNum = "";
        priceNum = 0;
        $('.chip').click(function() {
            // 把點到的增加)class on ,點其他的會把其他的class on 取消
            $(this).addClass('on').siblings('.chip').removeClass('on');
            priceNum = $(this).attr('value');
            console.log(`選用籌碼${priceNum}`)
        });

        // priceNum = 100;
        // 創籌碼
        // function createFlyChips(priceNum, value, method, odds, point) { 
        function createTempChips(priceNum, value, method, odds) {
            let ele = document.createElement('div');
            $(ele).addClass(`TempChips${priceNum}`).attr({
                'rel': 'BetChip',
                'price': priceNum,
                'code': value,
                'nums': 1,
                'method': method,
                'odds': odds,
                // 'point': point,
            });
            return $(ele);
        }

        // 籌碼在畫面上的位置
        function letTempChips(priceNum, element) {
            let method = element.attr('method');
            let odds = element.attr('odds');
            // let point = element.attr('point');
            let value = element.attr('value');
            TempChips = createTempChips(priceNum, value, method, odds);

            TempChips.css({
                "position": 'absolute',
                // 元素生成位置
                "left": element.offset().left + element[0].offsetWidth / 2 - (50 * Math.random()),
                "top": element.offset().top + element[0].offsetHeight / 2 - (50 * Math.random()),
            });
            $('body').append(TempChips);
        }


        // $("#smallDice").click(function () {
        //     let method = $(this).attr('method');
        //     // let odds = $(this).attr('odds');
        //     let value = $(this).attr('value');

        //     TempChips = createTempChips()
        // })

        // 把籌碼總額算出來
        function SumData(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += parseInt(arr[i]);
            };
            return sum;
        }
        // 測試用
        // $("#comeOutButton").click(function () {
        //     $('[class^="TempChips"]').each(function (index, element) {
        //         // console.log($(element))
        //         if ($(element).attr('price')) {
        //             allValues.push($(element).attr('code'));
        //             allOdds.push($(element).attr('odds'));
        //             allPrice.push($(element).attr('price'));
        //         }
        //     });
        // })

        function countingWin(code) {
            // 籌碼部分
            var allValues = [];
            var allOdds = [];
            var allPrice = [];
            var wincount = 0;

            $('[class^="TempChips"]').each(function(index, element) {
                // console.log($(element))
                if ($(element).attr('price')) {
                    allValues.push($(element).attr('code'));
                    allOdds.push($(element).attr('odds'));
                    allPrice.push($(element).attr('price'));
                }
            });
            // console.log(`allValues:${allValues}`)
            // console.log(`allOdds:${allOdds}`)
            // console.log(`allPrice:${allPrice}`)
            for (let i = 0; i < allValues.length; i++) {
                // console.log(`i:${i}`);
                // console.log(allValues[i])
                console.log(` allValues.length:${allValues.length}`);
                if (allValues[i] == code) {
                    win = parseFloat(allOdds[i]) * parseInt(allPrice[i]);

                    console.log(`win:${win}`);
                    wincount += win;

                }
            }
            console.log(`wincount:${wincount}`)
            return wincount;
        }

        //點TABLE
        $(".gameSelect").click(function() {
            let method = $(this).attr('method');
            let odds = $(this).attr('odds');
            let value = $(this).attr('value');
            var totalBalance = document.getElementById('balanceAmount').innerText;
            var totalBetmoney = document.getElementById('betMoneyAmount').innerText;

            if ((parseInt(totalBalance) - priceNum) > 0) {
                // 超過餘額不給下注
                // 計算點了幾次         
                //持有金額隨著減少
                letTempChips(priceNum, $(this));
                totalBalance = parseFloat(totalBalance) - parseInt(priceNum);
                totalBetmoney = parseFloat(totalBetmoney) + parseInt(priceNum);
                document.getElementById('betMoneyAmount').innerText = totalBetmoney + "元";
                document.getElementById('balanceAmount').innerText = totalBalance + "元";
            }
        });
        //以後想做的
        // 1.複製圖片
        // 2.圖片堆疊
        // 3.可以放到指定的位置