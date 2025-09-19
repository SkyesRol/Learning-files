<script setup>
import HelloWorld from './components/HelloWorld.vue'
// CORS Policy Cross Origin Resource Sharing Policy
async function fetchUser(){
  // 前端知道要访问的地址和域名 
  // 委托Vite 工程化 解决一下
  const res = await fetch('/api/user');
  const data = await res.json();
  console.log(data);
}
fetchUser();
</script>

<template>
 <HelloWorld msg="Vite + Vue" />
</template>

