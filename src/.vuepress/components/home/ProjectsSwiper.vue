<template>
  <div class="box">
    <Swiper
      @swiper="onSwiper"
      @drag-start="onDragStart"  
      @drag-end="onDragEnd"      
      :modules="modules"
      :slides-per-view="4"
      :space-between="30"
      :centered-slides="true"
      :loop="true"
      :allow-touch-move="true"
      class="mySwiper"
    >
      <SwiperSlide v-for="i in 9" :key="i">
        
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// 导入必要的模块
import { FreeMode } from 'swiper/modules';

const modules = [FreeMode];

const swiperInstance = ref(null);
let animationFrameId = null;
let isHovering = false;
let isDragging = false;
const scrollSpeed = 0.3;

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const smoothScroll = () => {
  if (isDragging || isHovering || !swiperInstance.value) {
    return;
  }
  
  const currentTranslate = swiperInstance.value.getTranslate();
  const nextTranslate = currentTranslate - scrollSpeed;
  
  swiperInstance.value.setTranslate(nextTranslate);

  animationFrameId = requestAnimationFrame(smoothScroll);
};

const startScroll = () => {
  if (!swiperInstance.value || animationFrameId) return;
  
  animationFrameId = requestAnimationFrame(smoothScroll);
};

const stopScroll = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
};

const tryResumeScroll = () => {
  // 增加一个小延迟，确保Swiper完成当前动画
  setTimeout(() => {
    if (!isDragging && !isHovering) {
      startScroll();
    }
  }, 300); // 300ms延迟，给Swiper一些时间处理
};

// 用户开始拖拽（使用Swiper的事件）
const onDragStart = () => {
  isDragging = true;
  stopScroll();
};

// 用户结束拖拽（使用Swiper的事件）
const onDragEnd = () => {
  isDragging = false;
  tryResumeScroll();
};

const onMouseEnter = () => {
  isHovering = true;
  stopScroll();
};

const onMouseLeave = () => {
  isHovering = false;
  tryResumeScroll();
};

onMounted(() => {
  if (swiperInstance.value) {
    const swiperEl = swiperInstance.value.el;

    // 只保留鼠标悬停事件监听
    swiperEl.addEventListener('mouseenter', onMouseEnter);
    swiperEl.addEventListener('mouseleave', onMouseLeave);

    // 初始启动滚动
    startScroll();
  }
});

onUnmounted(() => {
  stopScroll();
  if (swiperInstance.value) {
    const swiperEl = swiperInstance.value.el;
    swiperEl.removeEventListener('mouseenter', onMouseEnter);
    swiperEl.removeEventListener('mouseleave', onMouseLeave);
  }
});
</script>

<style scoped>
.box {
  margin-top: 30px;
  height: 300px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
