<script>
import { mapActions } from 'pinia'
import location from '../stores/location';
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      dataPages: [],
      dataArr: [],
      currentIndex: 1
    }
  },
  methods: {
    ...mapActions(location, ["setLocation"]),
    pagination(data, nowPage) {
      // 全部資料的長度
      const dataTotal = data.length;
      // 每頁要顯示的資料筆數
      const pageData = 6;

      // page 按鈕總數量公式  = 總資料數量 / 每頁顯示的資料筆數
      // 為避免出現餘數, 使用無條件進位
      this.dataPages = [];
      const pageTotal = Math.ceil(dataTotal / pageData);
      for (let i = 1; i <= pageTotal; i++) {
        this.dataPages.push(i)
      }
      console.log(this.dataPages)
      console.log(`全部資料:${dataTotal} 每一頁顯示:${pageData}筆 總頁數:${pageTotal}`)

      // 當前頁數, 從第一頁開始
      let currentPage = nowPage;

      // 為避免當前頁數超出總頁數
      if (currentPage > pageTotal) {
        currentPage = pageTotal;
      }

      // 切換頁數時, 顯示資料也要更動, 第一頁要顯示第一筆 ~ 第五筆, 以此類推
      // 公式 =  (當前頁數 * 每頁顯示的資料) - 每頁顯示的資料 +1;
      // minData = 每個分頁的第一筆
      const minData = (currentPage * pageData) - pageData;
      // maxData = 每個分頁的最後一筆
      const maxData = (currentPage * pageData);

      // 針對總資料筆數進行篩選, 要顯示在畫面上的資料 
      this.dataArr = this.arr.slice(minData, maxData)

    },
    changePages(nowPage) {
      this.pagination(this.arr, nowPage)
      this.currentIndex = nowPage
    },
    writeSurvey(id) {
      this.$router.push(`/AddView/${id}`)
    }

  },
  components: {
    RouterLink
  },
  props: [
  "show"
  ],
  mounted() {
    this.setLocation(1)
  },
  created() {
    this.pagination(this.arr, 1)
  }

}
</script>

<template>
  <div class="questionArea">
    <!-- <button type="button" @click="pagination(this.arr)">BTN</button> -->
    <div class="question" v-for="item in dataArr">
      <input type="checkbox" :class="{'showInput': this.show === true}">
      <div class="surveyBlock" @click="writeSurvey(item)">
        <span style="font-size: 16pt;">SurveyTitle:{{ item }}</span>
        <span>問卷標題</span>
        <span>狀態</span>
        <span>時間</span>
        <span>統計結果</span>
      </div>
    </div>
    <div class="btnArea">

      <button type="button" v-for="item in this.dataPages" @click="this.changePages(item)" class="pageBTN"
        :class="{ 'lightBTN': this.currentIndex === item }">{{ item }}</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$bg: rgb(255, 255, 255);

.questionArea {
  width: 100vw;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .question {
    width: 30%;
    height: 33%;
    display: flex;
    flex-direction: column;
    margin: 10px;

    input {
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
      opacity: 0;
      transition: all 1s;
    }
    .showInput{
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
      opacity: 1;
      transition: all 1s;
    }
    .surveyBlock {
      width: 100%;
      height: 95%;
      background: $bg;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      border: 1px solid rgb(0, 0, 0, 0.3);
      box-shadow:
        1px 0px 35px rgb(0, 0, 0, 0.35);
      background: rgba(0, 0, 0, 0.08);
      font-family: 'Noto Sans TC', sans-serif;
      position: relative;

      &:hover {
        box-shadow: 1px 0px 15px rgb(85, 255, 0);
        border: 2px solid rgb(0, 180, 0);
        background: rgb(0, 0, 0, 0.7);
        color: rgb(0, 255, 0, 0.5);
        transition: all 0.5s;
      }
    }
  }

  .btnArea {
    width: 100%;
    height: 5vh;
    position: absolute;
    bottom: 10px;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;

    .pageBTN {
      font-size: 30px;
      margin: 0 5px;
      background: none;
      border: none;
      transition: color 0.3s, font-size 0.1s;
      // color: rgb(255,255,255);

      &:hover {
        color: rgba(65, 255, 17, 0.8);
        transition: color 0.3s;

      }
    }

    .lightBTN {
      color: rgb(10, 233, 66);
      font-size: 38px;
      transition: color 0.3s, font-size 0.1s;
    }
  }
}
</style>