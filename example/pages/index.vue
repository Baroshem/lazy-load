<template>
  <div>
    <img class="lazy" width="1800" height="1800" data-src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg"/>
    <img class="lazy" width="1800" height="1800" data-src="https://images.hdqwalls.com/wallpapers/cute-cat-4k-wg.jpg">
    <img class="lazy" width="1800" height="1800" data-src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-697675364-scaled.jpg">
  </div>
</template>

<script setup lang="ts">
const { init, observer } = useLazyLoad();

onMounted(() => {
  init()
  console.log(observer.value)
})
</script>

