<template>
  <div class="screen screen3">
    <div class="mentor-panel">
      <div class="mentor-container">
        <div class="mentor1"></div>
        <div class="mentor2"></div>
        <div class="mentor3"></div>
        <div class="mentor4"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.screen3 {
  position: relative;
  background-color: green;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mentor-panel {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mentor-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  width: 100%;
  padding: 20px;
}

.mentor1,
.mentor2,
.mentor3,
.mentor4 {
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}

.mentor1::after {
  content: "导师 1";
}

.mentor2::after {
  content: "导师 2";
}

.mentor3::after {
  content: "导师 3";
}

.mentor4::after {
  content: "导师 4";
}
</style>

