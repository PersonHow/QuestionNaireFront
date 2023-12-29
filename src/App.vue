<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { ref } from 'vue'
let show = ref(false);
console.log(show.value)
</script>

<template>
  <div class="appArea">

    <div class="closeHeader" :class="{ 'openHeader': show === true }">
      <Header :show="show" />
      <i class="fa-solid fa-angle-down openDown" @click="show = !show"></i>
      <i class="fa-solid fa-angle-up openUp" @click="show = !show"></i>
    </div>
    <div class="content">

      <RouterView :show="show" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.appArea {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
}


.closeHeader {
  width: 100vw;
  height: 7vh;
  transition: height 0.5s;
  position: relative;

  i {
    cursor: pointer;
  }

  .openUp {
    opacity: 0;
  }

  .openDown {
    background: rgb(157, 160, 160);
    color: rgb(251, 251, 251);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 50%;
    bottom: -10px;
    font-size: 20px;
    opacity: 1;
    z-index: 1;
  }

}

.openHeader {
  width: 100vw;
  height: 10vh;
  transition: height 0.5s;
  position: relative;

  .openUp {
    background: rgb(157, 160, 160);
    color: rgb(251, 251, 251);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 50%;
    bottom: -10px;
    font-size: 20px;
    opacity: 1;
    z-index: 1;
  }

  .openDown {
    opacity: 0;
  }

}

.content {
  width: 100vw;
  height: 90vh;
}
</style>
