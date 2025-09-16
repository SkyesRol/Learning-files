<template>
  <div>
    <router-view />
    <div class="footer h-12">
      <Tabbar class="fixed bottom-0" />
    </div>
  </div>
</template>


<script setup lang='ts'>
import Tabbar from "@views/layout/Tabbar.vue";
</script>