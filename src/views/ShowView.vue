<template>
    <div class="addSurArea">

        <div class="navBar">
            <h1 :class="{ 'lightText': this.location == 1 }" @click="this.change(1)">
                SurveyTitle</h1>
            <h1 :class="{ 'lightText': this.location == 2 }" @click="this.change(2)">SurveyQuestion</h1>
            <h1 :class="{ 'lightText': this.location == 3 }" @click="this.change(3)">SurveyResponse</h1>
            <h1 :class="{ 'lightText': this.location == 4 }" @click="this.change(4)">SurveyTotal</h1>

        </div>
        <div class="hr"></div>
        <div class="contentShow">
            <ShowTitle v-if="this.location == 1" v-model:title="this.surveyInfo.surveyTitle"
                v-model:content="this.surveyInfo.surveyContent" v-model:startTime="this.surveyInfo.surveyStartTime"
                v-model:endTime="this.surveyInfo.surveyEndTime" @checkNamed="giveCheck" :location="this.location"/>

            <ShowQuestion v-if="this.location == 2" v-model:questions="this.surveyInfo.surveyQuestions"
                v-model:answers="this.surveyInfo.surveyAnswers" />
            <ShowRes v-if="this.location == 3" />
            <ShowTotal v-if="this.location == 4" />
        </div>
    </div>
</template>
<script>
import ShowTitle from '../components/Show/ShowTitle.vue';
import ShowQuestion from '../components/Show/ShowQuestion.vue'
import ShowRes from '../components/Show/ShowRes.vue';
import ShowTotal from '../components/Show/ShowTotal.vue';

export default {
    data() {
        return {
            location: 1,
            surveyInfo: {
                surveyTitle: "",
                surveyContent: "",
                surveyStartTime: "",
                surveyEndTime: "",
                surveyQuestions: "",
                surveyAnswers: "",
                surveyNamed:false
            },
            openRed: false,

        }
    },
    components: {
        ShowTitle,
        ShowQuestion,
        ShowRes,
        ShowTotal
    },
    watch: {
    },
    methods: {
        change(x) {
            this.location = x
        },
        giveCheck(x){
            this.surveyInfo.surveyNamed = x
            console.log(this.surveyInfo)
        }
    },
    mounted() {

    },
    updated() {
        console.log(this.surveyInfo)
    }

}
</script>
<style lang="scss" scoped>
.addSurArea {
    width: 100%;
    height: 100%;
    display: flex;
    .navBar {
        width: 20%;
        height: 620px;
        margin-top: -10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        h1 {
            width: 100%;
            height: 15%;
            text-align: center;
            padding-top: 25px;
            cursor: pointer;
            transition: all 0.4s;
        }

        .lightText {
            color: rgb(232, 251, 240);
            -webkit-text-stroke: rgb(0, 157, 0);
            text-shadow:
                0px 0px 35px rgb(174, 237, 163),
                0px 0px 8px rgb(19, 127, 0),
                5px 0px 35px rgb(174, 237, 163),
                -5px 0px 35px rgb(174, 237, 163),
                0px 5px 35px rgb(174, 237, 163),
                0px -5px 35px rgb(174, 237, 163),
                10px 0px 20px rgb(135, 190, 125),
                0px 10px 20px rgb(135, 190, 125),
                -10px 0px 20px rgb(135, 190, 125),
                0px -10px 20px rgb(135, 190, 125),
            ;
        }

    }

    .hr {
        width: 2px;
        height: 550px;
        margin-top: 20px;
        background: rgba($color: #000000, $alpha: 0.4);
    }

}

.contentShow {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: all 3s;
}
</style>