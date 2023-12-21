<template>
        <h3>問卷題目:{{ this.surInfo.surveyTitle }}</h3>
        <h3>問卷說明:{{ this.surInfo.surveyContent }}</h3>
        <h3>開放時間:{{ this.surInfo.surveyStartTime }} ~ {{ this.surInfo.surveyEndTime }}</h3>
        <h3>{{ this.questions }}</h3>
        <!--每個問題與它的選項 -->
        <div class="quesAndSelcet" v-for="(item, index) in this.questions">問題題目{{ item }}>
            <h3>{{ item }}</h3>

            <div class="selInput" v-for="(elements, nums) in this.ansSelect[index].split(',')[1].split(';')">
                <input type="text" v-if="this.ansSelect[index].split(',')[0] == '簡答'">
                <input type="radio" name="radioAns" :value="elements" v-if="this.ansSelect[index].split(',')[0] == '單選'"
                    @change="console.log(elements)">
                <input type="checkbox" name="checkboxAns" :value="elements"
                    v-if="this.ansSelect[index].split(',')[0] == '複選'">
                <label for="">{{ elements }}</label>
            </div>
        </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import survey from '../../stores/survey'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(survey, ["surInfo", "questions", "ansSelect"])
    },
    methods: {
    },

    mounted() {
    }
}

</script>
<style lang="scss" scoped></style>    