<template>
  <div id="checkBox">
    <p>至少選擇一個遊戲館</p>

    <label for="checkAll">
      <input
        type="checkbox"
        id="checkAll"
        v-model="check"
        value="0"
        @click="handleCheckAll"
      />
      全選
    </label>
    <div v-for="item in checkBoxList" :key="item">
      <label :for="item.id">
        <input
          type="checkbox"
          v-model="temp"
          :value="item.value"
          :id="item.id"
        />
        {{ item.text }}
      </label>
    </div>

    <!-- <div id="aboveBtnDiv">
      <span><button class="aboveBtn" @click="dateBtn()">本月</button></span
      ><span><button class="aboveBtn" @click="dateBtn()">上月</button></span>
    </div> -->
    <p>搜尋帳號</p>
    <div><span></span><input type="text" /></div>
    <p>帳務時間</p>
    <p>選擇日期區間</p>
    <input type="date" id="time1" value="" :max="date1Max" />
    <p>到</p>
    <input type="date" id="time2" value="" :max="date2Max" :min="date1Min" />
    <div id="underBtnDiv">
      <span
        ><button class="underBtn" @click="dateBtn('today')">今天</button></span
      ><span
        ><button class="underBtn" @click="dateBtn('yesterday')">
          昨天
        </button></span
      >
      <span
        ><button class="underBtn" @click="dateBtn('thisWeek')">
          本週
        </button></span
      ><span
        ><button class="underBtn" @click="dateBtn('lastWeek')">
          上週
        </button></span
      >
      <span
        ><button class="underBtn" @click="dateBtn('thisMonth')">
          本月
        </button></span
      ><span
        ><button class="underBtn" @click="dateBtn('lastMonth')">
          上月
        </button></span
      >
      <span class="bot"
        ><button class="underBtn" @click="dateBtn('currentMonth')">
          最近一個月
        </button></span
      ><span class="bot"
        ><button class="underBtn" @click="dateBtn('clearDate')">
          清除
        </button></span
      >
    </div>
    <button id="submit" @click="submitBtn">搜尋</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkBoxList: [
        { text: "妞妞", value: "niuniu_records", id: "check-1" },
        { text: "21點", value: "blackjack_records", id: "check-2" },
        { text: "射龍門", value: "sddgamehistory", id: "check-3" },
        { text: "骰寶", value: 4, id: "check-4" },
        { text: "百家樂", value: "baccarat_gamelog", id: "check-5" },
        { text: "球版", value: 6, id: "check-6" },
        { text: "捕魚機", value: "fish", id: "check-7" },
        { text: "拉霸", value: "tiger_results", id: "check-8" },
        { text: "撞球", value: "billiard_ball", id: "check-9" },
      ],
      temp: [],
      check: [],
      date1: "",
      date2: "",
      date1Max: "",
      date2Max: "",
      date2Min: "",
    };
  },
  created() {
    this.date1Max = this.formatDate1(new Date());
    this.date2Max = this.formatDate2(new Date());
    this.date2Min = this.date1Max;
  },
  methods: {
    dateBtn(date) {
      const d1 = new Date();
      const d2 = new Date();
      if (date === "today") {
        time1.value = this.formatDate1(d1);
        time2.value = this.formatDate2(d1);
      }
      if (date === "yesterday") {
        d1.setDate(d1.getDate() - 1);
        time1.value = this.formatDate1(d1);
        time2.value = this.formatDate2(d1);
      }
      if (date === "thisWeek") {
        time1.value = this.formatDate1(d1.setDate(d1.getDate() - d1.getDay()));
        time2.value = this.formatDate2(d2);
      }
      if (date === "lastWeek") {
        time1.value = this.formatDate1(
          d1.setDate(d1.getDate() - d1.getDay() - 7)
        );
        time2.value = this.formatDate2(d1.setDate(d1.getDate() + 6));
      }
      if (date === "thisMonth") {
        time1.value = this.formatDate1(d1.setDate(1));
        time2.value = this.formatDate2(d2);
      }
      if (date === "lastMonth") {
        time1.value = this.formatDate1(
          new Date(
            d1.getFullYear(),
            d1.getMonth() - 1,
            d1.getDate(d1.setDate(1))
          )
        );
        time2.value = this.formatDate2(
          new Date(
            d2.getFullYear(),
            d2.getMonth() - 1,
            d2.getDate(d2.setDate(0))
          )
        );
      }
      if (date === "currentMonth") {
        time1.value = this.formatDate1(d1.setMonth(d1.getMonth() - 1));
        time2.value = this.formatDate2(d2);
      }
      if (date === "clearDate") {
        time1.value = "";
        time2.value = "";
      }
    },
    formatDate1(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      d.setHours("00", "00", "00");

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    formatDate2(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
      d.setHours("23", "59", "59");
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    //處理全選checkbox
    handleCheckAll() {
      var _this = this;
      if (this.temp.length < 9) {
        _this.temp = [];
        _this.check = ["0"];
        _this.checkBoxList.forEach(function (item) {
          _this.temp.push(item.value);
        });
      } else {
        _this.temp = [];
        _this.check = [];
      }
    },
    // 處理提交按鈕
    submitBtn() {
      console.log(this.formatDate1(time1.value), this.formatDate2(time2.value));
      if (this.temp[0] === undefined) {
        alert("請先選擇遊戲館");
      } else {
        console.log(this.temp);
        let time = [
          this.formatDate1(time1.value),
          this.formatDate2(time2.value),
        ];
        if (time[0] !== time[1]) {
          // post資料到後端
          axios
            .post("http://127.0.0.1:3001/backend/gameList", {
              gameList: this.temp,
              time: time,
            })
            .then((e) => {
              console.log(e);
            })
            .catch((err) => {
              console.log(err);
            });
          this.$emit("boolen", true);
        } else {
          axios
            .post("http://127.0.0.1:3001/backend/gameList", {
              gameList: this.temp,
            })
            .then((e) => {
              console.log(e);
            })
            .catch((err) => {
              console.log(err);
            });
          this.$emit("boolen", true);
        }
      }
    },
  },
};
</script>

<style scoped>
#checkBox {
  position: absolute;
  top: 9%;
  height: 91%;
  width: 15%;
  background-color: #343a40;
  display: inline-block;
  color: white;
  overflow: auto;
}
#checkBox p {
  margin-top: 15px;
  margin-left: 10px;
}
input {
  margin-left: 10px;
}
#aboveBtnDiv {
  text-align: center;
}
.aboveBtn {
  width: 120px;
}
#underBtnDiv {
  text-align: center;
  margin-top: 18px;
}
.underBtn {
  width: 90px;
}
.bot {
  padding-bottom: 50px;
}
#submit {
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>