<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style>
.content {
  padding-left: 7vw;
  padding-right: 7vw;
}

@media screen and (min-width: 768px) {
  .content {
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

@media screen and (min-width: 1536px) {
  .content {
    padding-left: 10vw;
    padding-right: 10vw;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
