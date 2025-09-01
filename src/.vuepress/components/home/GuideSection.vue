<template>
  <div class="screen screen2" ref="guideRef">
    <div class="container">
      <h2 class="section-title">孵化器指南</h2>
      
      <div class="steps-container">
        <span 
          v-for="(step, index) in steps" 
          :key="step.id"
          class="step-button" 
          :class="{ active: activeStep === index }"
          :data-step="step.id"
          @click="setActiveStep(index)"
        >
          {{ step.title }}
        </span>
      </div>
      
      <div class="steps-content">
        <div 
          v-for="(step, index) in steps" 
          :key="step.id"
          class="guide-content" 
          :class="{ active: activeStep === index }"
          :id="step.id"
        >
          <component class="step-change" :is="step.component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Step1Content from './steps/Step1Content.vue'
import Step2Content from './steps/Step2Content.vue'
import Step3Content from './steps/Step3Content.vue'
import Step4Content from './steps/Step4Content.vue'
import Step5Content from './steps/Step5Content.vue'

gsap.registerPlugin(ScrollTrigger)

const guideRef = ref<HTMLElement>()
const activeStep = ref(0)

const steps = [
  { id: 'step1', title: '前置条件', component: Step1Content },
  { id: 'step2', title: '寻找导师', component: Step2Content },
  { id: 'step3', title: '编写提案', component: Step3Content },
  { id: 'step4', title: '提交评审', component: Step4Content },
  { id: 'step5', title: '孵化毕业', component: Step5Content }
]

const setActiveStep = (index: number) => {
  activeStep.value = index
}

onMounted(() => {
  ScrollTrigger.create({
    trigger: guideRef.value,
    start: 'top top',
    end: '+=1000',
    scrub: true,
    markers: true,
    pin: true,
     pinSpacing: true,
    onUpdate: (self) => {
      const progress = self.progress
      const currentStep = Math.min(
        steps.length - 1,
        Math.max(0, Math.round(progress * (steps.length - 1)))
      )
      activeStep.value = currentStep
    }
  })
})
</script>

<style scoped>
.step-change {
  animation: fadeIn 0.5s ease;
}
 @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

.screen2 {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #1D2129;
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: none;
}

.section-description {
  font-size: 1.1rem;
  color: #4E5969;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
}

.steps-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  gap: 10px;
  flex-wrap: wrap;
}

.step-button {
  display: block;
  width: 100px;
  height: 40px;
  border-radius: 999px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #E5E6EB;
  color: #4E5969;
  transition: transform 0.3s ease;
}

.step-button.active {
  background-color: #1e40af;
  color: #fff;
}
.step-button:hover {
  transform: scale(0.95);
}
.steps-content {
  min-height: 500px;
  background-color: white;
  margin: 0 auto;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e5e6eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.guide-content {
  display: none;
}

.guide-content.active {
  display: block;
}
</style>

