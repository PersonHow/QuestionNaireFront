<template >
    <div class="closeArea" :class="{ 'showArea': this.show === true }">
        <div class="routeItem barIcon">
            <span class="barText">動態問券前台</span>
            <i class="fa-solid fa-pen-nib barItem"></i>
        </div>
        <RouterLink to="/" class="routeItem" :class="{ 'locationCss': this.location === 1 }">
            <span>Home</span>
            <i class="fa-solid fa-house"></i>
        </RouterLink>
        <div class="searchArea">
            <n-date-picker v-model:value="this.range" type="daterange" clearable class="dateSelect" />
            <input type="text" placeholder="搜尋問卷標題">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
</template>
<script>
import { mapState } from 'pinia';
import location from "../stores/location"
import { RouterLink, RouterView } from 'vue-router'
import { NDatePicker } from 'naive-ui';
export default {
    data() {
        return {
            showBar: false,
            range: ""
        }
    },
    props: [
        "show"
    ],
    computed: {
        ...mapState(location, ['location', 'locationInfo']),
    },
    components: {
        RouterLink,
        NDatePicker
    },
    methods: {
        transDate() {
            if (this.range !== null) {
                let startDate = new Date(this.range[0])
                let endDate = new Date(this.range[1])
                let startText = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
                let endText = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
                console.log(startDate)
                console.log(startText)
            }
        },
        conDate() {
            const datePicker = document.querySelector(".dateSelect")
            console.dir(datePicker)
        }
    },
    updated() {
        this.transDate()
    }

}
</script>
<style lang="scss" scoped>
$bg: rgb(255, 255, 255);

.closeArea {
    width: 100%;
    height: 100%;
    padding-left: 50px;
    display: flex;
    background: $bg;
    align-items: center;
    position: relative;
    transition: all 1s, display 1s;
    border-bottom: 1px solid rgb(136, 159, 134, 0.6);
    z-index: 1;

    .searchArea {
        width: 200px;
        position: relative;

        .dateSelect {
            width: 350px;
            opacity: 0;
        }

        input {
            opacity: 0;
        }

        i {
            position: absolute;
            color: rgba(100, 102, 100);
            left: 0;
            top: 2dvh;
            font-size: 3dvh;
            display: block;
            transition: all 1s;
        }
    }

    .routeItem {
        width: 12%;
        height: 100%;
        font-size: 20pt;
        color: rgba(100, 102, 100);
        position: relative;

        .barItem {
            position: absolute;
            top: 1dvh;
            font-size: 3dvw;
            color: rgba(100, 102, 100);
        }

        i {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 2dvh;
            left: 10px;
            transition: all 0.5s ease-in;
        }

        span {
            position: absolute;
            top: 10px;
            left: 0;
            opacity: 0;
            transition: opacity 1s, left 1s;
        }

        &:hover {
            color: rgb(227, 245, 222);
            text-shadow: 1px 0px 10px rgb(18, 83, 15);
            transition: text-shadow 1s;
        }

        .fa-bars-progress {
            text-shadow: none;
        }

    }

    .barIcon {
        width: 15%;

        &:hover {
            text-shadow: none;
        }
    }

    .editArea {
        opacity: 0;
    }
}

.showArea {
    width: 100%;
    height: 100%;
    display: flex;
    background: $bg;
    align-items: center;
    position: relative;
    transition: all 1s, display 1s ease-in;
    z-index: 1;

    .routeItem {
        width: 12%;
        height: 100%;
        font-size: 2dvw;
        color: rgba(100, 102, 100);
        position: relative;

        .barItem {
            // 標題圖示
            font-size: 3dvw;
            text-shadow: none;
            color: rgba(100, 102, 100);
            top:2dvh;
        }

        .barText {
            // 標題文字
            font-size: 1.6dvw;
            text-shadow: none;
            font-family: 'Noto Sans TC', sans-serif;
            color: rgba(100, 102, 100);


        }

        i {
            // 圖示移動的動畫
            position: absolute;
            width: 40px;
            height: 40px;
            top: 3dvh;
            left: 10px;
            opacity: 1;
            transition: all 1s;
        }

        span {
            // Header　移動的動畫
            position: absolute;
            top: 2.5dvh;
            left: 25%;
            display: block;
            animation: textUp linear 0.5s;
            opacity: 1;
        }

        &:hover {
            // home 頁相關動畫
            color: rgb(227, 245, 222);
            text-shadow: 1px 0px 10px rgb(18, 83, 15),
                0px 0px 5px rgb(18, 83, 15);
            transition: text-shadow 0.5s;
        }

    }

    .barIcon {
        width: 16%;

        &:hover {
            text-shadow: none;
        }
    }

    .searchArea {
        // 搜尋區域
        width: 55%;
        height: 80%;
        display: flex;
        align-items: center;
        position: relative;
        margin-right: 30px;

        i {
            //放大鏡移動
            font-size: 3dvw;
            position: absolute;
            top: 1.5dvh;
            left: 99%;
            transition: all 1s;
            cursor: pointer;

            &:hover {
                //  圖示相關動畫
                color: rgb(227, 245, 222);
                text-shadow: 1px 0px 8px rgb(18, 83, 15);
                transition: text-shadow 0.5s;
            }
        }

        input {
            //搜尋欄
            height: 5dvh;
            width: 25dvw;
            margin: 0 20px;
            font-size: 3dvh;
            padding: 5px;
            opacity: 1;
            animation: textUp linear 1.5s;
        }

        input::placeholder {
            text-align: center;
        }

        .dateSelect {
            // 時間欄
            opacity: 1;
            width: 350px;
            animation: textUp linear 1s;
        }
    }

    .editArea {
        // 垃圾桶與新增
        width: 10%;
        height: 80%;
        opacity: 1;
        transition: opacity 0.5s;
        position: relative;
        color: rgba(100, 102, 100);
        font-size: 22pt;

        i {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 10px;
            cursor: pointer;

            &:hover {
                //  圖示相關動畫
                color: rgb(227, 245, 222);
                text-shadow: 1px 0px 8px rgb(18, 83, 15);
                transition: text-shadow 0.5s;
            }
        }

        .fa-square-plus {
            left: 20px;
        }

        .fa-trash {
            left: 60px;


        }
    }
}




@keyframes textUp {
    0% {
        opacity: 0;
        transform: translate(-15px, 0px);
    }

    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
}
</style>