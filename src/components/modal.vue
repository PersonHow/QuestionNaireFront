<template>
    <div class="modalArea">
        <div class="textArea">
            <i class="fa-solid fa-xmark" @click="$emit('alertMessage')"></i>
            <slot>

            </slot>
        </div>

        <div class="bg"></div>
    </div>
</template>
<script>
export default {
    emits: [
        'alertMessage'
    ]
}
</script>
<style lang="scss" scoped>
.modalArea {
    width: 110dvw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .textArea {
        width: 50dvw;
        height: 50dvh;
        background: rgb(255, 255, 255);
        border: 3px solid rgb(1, 150, 1);
        color: rgb(113, 165, 110);
        border-radius: 10px;
        position: relative;
        text-align: center;
        padding-top: 120px;
        z-index: 1;

        .fa-xmark {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            font-size: 40px;

            &:hover {
                //  圖示相關動畫
                color: rgb(255, 255, 255);
                text-shadow: 0px 0px 8px rgb(24, 98, 21),
                    0px 0px 8px rgb(67, 87, 66),
                    0px 0px 3px rgb(30, 62, 28),
                    0px 0px 16px rgb(184, 232, 182),
                    0px 0px 25px rgb(184, 226, 182),
                ;
                transition: text-shadow 0.5s;
            }
        }

    }

    .bg {
        position: fixed;
        top: 0;
        width: inherit;
        height: inherit;
        background: rgb(0, 50, 0, 0.25);
        backdrop-filter: blur(5px);
        z-index: 0;
    }
}
</style>