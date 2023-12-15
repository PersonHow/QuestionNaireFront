<template>
    <div class="surTitle titleArea">
        <h1>問卷標題</h1>
        <input type="text">
    </div>
    <div class="surContent titleArea">
        <h1>問卷說明</h1>
        <textarea name="" id="" cols="50" rows="10"></textarea>
    </div>
    <div class="surTime titleArea">
        <h1>開始時間：</h1>
        <input type="date">
        <h1>結束時間：</h1>
        <input type="date">
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
    }
}
</script>
<style lang="scss" scoped>
.titleArea {
    margin: 0 auto;
    width: 80%;
}

.surTitle {
    height: 20%;

    input {
        width: 100%;
        height: 100%;
        font-size: 40pt;
        padding-left: 10px;
    }
}

.surContent {
    height: 35%;

    textarea {
        font-size: 16pt;
        padding-left: 10px;
        resize: none;
        height: 100%;
        width: 100%;
    }
}

.surTime {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        margin-left: 60px;
        margin-right: 20px;
    }

    input{
        height: 40px;
        width: 150px;
        margin-right: 60px;
        padding-left: 20px;
    }
}
</style>