<template>
  <div class="box">
    <Swiper
      @swiper="onSwiper"
      @drag-start="onDragStart"  
      @drag-end="onDragEnd"      
      :modules="modules"
      :breakpoints="breakpoints"
      :centered-slides="true"
      :loop="true"
      :allow-touch-move="true"
      class="mySwiper"
    >
      <SwiperSlide class="project-swiper" v-for="project in dataList" :key="project.name">
        <div class="project-container" :data-name="project.name">
        <a class="project-navigator" :title="project.name" :href="project.website" target="_blank"></a>
        <div class="project-preview"
        :style="{
          background: `url(/home-project/${project.name}.webp) center/cover no-repeat`
        }"
        ></div>
        <div class="project-detail">
            <img class="project-logo" 
            :src="`/home-logo/${project.name}.png`" 
            :alt="project.name" 
            loading="lazy" 
            no-view="" 
            onerror="this.style.display = 'none'"
            >
            <div class="project-name">{{ project.name }}</div>
            <div class="project-desc">{{ project.description }}</div>
        </div>
    </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { FreeMode } from 'swiper/modules';

import {projects} from "../ProjectList/data";
const dataList = ref([]);

const modules = [FreeMode];

const swiperInstance = ref(null);
let animationFrameId = null;
let isHovering = false;
let isDragging = false;
const scrollSpeed = 0.3;

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 12
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 16
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 24
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30
  }
};
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
  setTimeout(() => {
    if (!isDragging && !isHovering) {
      startScroll();
    }
  }, 300); 
};

const onDragStart = () => {
  isDragging = true;
  stopScroll();
};

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
   dataList.value = projects.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  if (swiperInstance.value) {
    const swiperEl = swiperInstance.value.el;

    swiperEl.addEventListener('mouseenter', onMouseEnter);
    swiperEl.addEventListener('mouseleave', onMouseLeave);
    startScroll();
  }
  
});

onUnmounted(() => {
  stopScroll();
if (swiperInstance.value && swiperInstance.value.el) {
    const swiperEl = swiperInstance.value.el;
    swiperEl.removeEventListener('mouseenter', onMouseEnter);
    swiperEl.removeEventListener('mouseleave', onMouseLeave);
  }
  swiperInstance.value = null;
});
</script>

<style scoped>
.box {
  height: 300px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.mySwiper {
  width: 100%;
  height: 209px;
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
.project-swiper {
  width: 374px!important;
}
.project-container {
            position: relative;
            width: 374px;
            height: 209px;
        }

        .project-preview {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .project-detail {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            padding: .5rem 1rem;
            text-align: center;
            opacity: 1;
            transition: opacity ease .6s;
        }

        .project-detail::before {
            content: " ";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #0c1117;
            opacity: .75;
        }

        .project-container:hover .project-detail {
            opacity: 0;
        }

        .project-name {
            z-index: 1;
            margin-bottom: .5rem;
            padding-bottom: .25rem;
            color: #fff;
            font-weight: 700;
            font-size: 1.25rem;
        }

        .project-desc {
            z-index: 1;
            flex-shrink: 1;
            overflow: hidden;
            color: #fff;
            font-size: .875rem;
            line-height: 1.25;
            text-overflow: ellipsis;
        }

        .project-logo {
            z-index: 1;
            height: 3rem;
            margin: 0 auto;
            margin-bottom: 5px;
        }

        .project-container:hover::after {
            content: attr(data-name);
            position: absolute;
            inset-inline-start: .5rem;
            top: .5rem;
            display: block;
            padding: .5rem;
            border-radius: .25em;
            background: #37373780;
            color: #fff;
        }

        .project-navigator {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            display: block;
        }
</style>
