<template>
  <div class="banner screen" ref="bannerRef">
    <img src="/logo.png" class="bn-img" ref="logoRef" alt="Dromara Logo">
    <h1 class="bn-title" :class="{ 'animate-in': isVisible }" ref="titleRef">Dromara 孵化器</h1>
    <div class="bn-description"  :class="{ 'animate-in': isVisible }" ref="descRef">
      助力优质开源项目成长，融入 Dromara 生态，为有意加入的项目提供治理适配、资源支持与成长引导
    </div>
    <div class="next" @click="scrollToNext">
      <svg t="1756542300259" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7394" width="200" height="200"><path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m0 64C288.149333 106.666667 106.666667 288.149333 106.666667 512s181.482667 405.333333 405.333333 405.333333 405.333333-181.482667 405.333333-405.333333S735.850667 106.666667 512 106.666667z m162.133333 294.592c4.693333 0 8.533333 3.818667 8.533334 8.533333v66.346667a8.533333 8.533333 0 0 1-2.496 6.037333l-153.088 153.088-2.005334 1.770667a21.248 21.248 0 0 1-11.818666 4.437333h-2.517334a21.248 21.248 0 0 1-13.824-6.186667l-153.088-153.088a8.533333 8.533333 0 0 1-2.496-6.016v-66.389333a8.533333 8.533333 0 0 1 14.570667-6.037333l156.074667 156.074666 156.117333-156.074666a8.533333 8.533333 0 0 1 6.037333-2.496z" fill="#cdcdcd" p-id="7395"></path></svg></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const bannerRef = ref<HTMLElement>()
const logoRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const descRef = ref<HTMLElement>()

const scrollToNext = () => {
  const nextSection = document.querySelector('.screen1')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
const isVisible = ref(false);
onMounted(() => {
   setTimeout(() => {
    isVisible.value = true;
  }, 500);
  gsap.set(logoRef.value, {
    opacity: 0,
    y: 20,
    overwrite: true
  })

  const entryTimeline = gsap.timeline({
    defaults: {
      duration: 0.8,
      ease: 'power2.out'
    }
  })

  entryTimeline
    .to(logoRef.value, { opacity: 1, y: 0 })

  ScrollTrigger.create({
    trigger: bannerRef.value,
    start: 'top top',
    end: '+=200',
    scrub: true,
    animation: gsap.timeline()
      .to(logoRef.value, {
        scale: 0.6,
        filter: 'blur(2px)',
        startAt: { filter: 'blur(0)' }
      })
      .to(titleRef.value, {
        opacity: 0,
        y: -30,
        startAt: { opacity: 1, y: 0 }
      }, '<')
      .to(descRef.value, {
        opacity: 0,
        y: -30,
        startAt: { opacity: 1, y: 0 }
      }, '<')
  })
})
</script>

<style scoped>
.banner {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.bn-title {
color: black;
}
.screen {
  width: 100%;
  height: 100vh;
}

.bn-img {
  width: 300px;
}

.bn-description {
  max-width: 800px;
  overflow-wrap: break-word;
  text-align: center;
}

.next {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
}
.next svg {
  width: 50px;
  height: auto;
}
.bn-title, .bn-description {
            opacity: 0; 
            transform: translateY(20px); 
            transition: opacity 0.5s ease, transform 0.5s ease; 
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
</style>

