<script>
export default {
    props: [
        'surveyCondition'
    ],
    mounted() {
        document.addEventListener('keydown', () => {
            if (window.event.code == "Escape") {
                return this.$emit('closeModal')
            }
        
        })
        console.log(this.surveyCondition);
    }
}
</script>
<template>
    <div class="modalArea">
        <div class="block">
            <i class="fa-solid fa-xmark" @click="$emit('closeModal')"></i>
            <div class="blockSlot surveyId">
                <slot name="surveyId">SurveyId:</slot>
                <div class="time">
                    <slot name="time">Time</slot>
                </div>
                <div class="condition">
                    <slot name="condition">Condition</slot>
                </div>
            </div>
            <div class="blockSlot title">
                <slot name="title">Title:</slot>
            </div>
            <div class="blockSlot content">
                <slot name="content">text</slot>
            </div>


            <div class="btnArea">

                <button type="button" @click="$emit('startWrite')" :class="{ 'blockButton': this.surveyCondition !== '投票中' }">
                    <i class="fa-solid fa-pen-to-square"></i>&nbsp;填寫問卷</button>
                    <button type="button" @click="$emit('startTotal')" :class="{ 'blockButton': this.surveyCondition == '未開放' }"><i
                        class="fa-solid fa-chart-line"></i>&nbsp;查看統計</button>
            </div>
        </div>
        <div class="bg" @click="$emit('closeModal')"></div>
    </div>
</template>
<style lang="scss" scoped>
.modalArea {
    width: 100dvw;
    height: 200dvh;
    position: fixed;
    top: -10dvw;
    left: 0;
    z-index: 1;


    .block {
        width: 60dvw;
        height: 60dvh;
        background: rgb(255, 255, 255);
        z-index: 2;
        position: absolute;
        top: 45dvh;
        left: 20dvw;
        border-radius: 1dvw;
        display: flex;
        flex-direction: column;
        padding: 20px;

        .fa-xmark {
            position: absolute;
            right: 1dvw;
            top: 1dvh;
            font-size: 2.2dvw;
            color: rgb(75, 112, 73);
            transition: all 0.1s linear;

            &:hover {
                color: rgb(113, 156, 111);
                scale: 1.15;
            }

            &:active {
                scale: 0.95;
            }
        }

        .blockSlot {
            width: 80%;
            height: 20%;
            font-size: 1dvw;
            color: rgb(75, 112, 73);
            margin: 1dvh 5%;
        }

        .surveyId {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 10%;
        }

        .title {
            height: 10%;
        }

        .content {
            height: 40%;
        }

        .btnArea {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 15%;
            display: flex;
            justify-content: space-around;
            margin-bottom: 2%;

            button {
                font-size: 1.5dvw;
                font-weight: 700;
                width: 12dvw;
                height: 100%;
                background: none;
                border: none;
                cursor: pointer;
                transition: all 0.2s;

                &:hover {
                    //  圖示相關動畫
                    color: rgb(227, 245, 222);
                    text-shadow: 1px 0px 10px rgb(18, 83, 15),
                        0px 0px 5px rgb(18, 83, 15);

                    scale: 1.15;
                }

                &:active {
                    color: black;
                    text-shadow: none;
                    scale: 0.95;
                }
            }
        }


    }

    .bg {
        width: 100dvw;
        height: 200dvh;
        background: rgba(40, 71, 34, 0.25);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
}

.blockButton {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
}
</style>