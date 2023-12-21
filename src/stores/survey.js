import { defineStore } from 'pinia'

export default defineStore('survey', {
    state(){
        return{
            surInfo:""
        }
    },
    getters:{
        questions(){
            return this.surInfo.surveyQuestions.split('|');
        },
        ansSelect(){
            return this.surInfo.surveyAnswers.split('|');
        }
    },
    actions:{
        getInfo(info){
            this.surInfo = info;
        }
    }
})