<template>
    <BannerSection />
    <ValuesSection />
    <GuideSection />
    <div class="screen3">
        <ProjectsSwiper></ProjectsSwiper>
    </div>
</template>

<script setup lang="ts">
import BannerSection from './BannerSection.vue'
import ValuesSection from './ValuesSection.vue'
import GuideSection from './GuideSection.vue'
import ProjectsSwiper from './ProjectsSwiper.vue'
</script>

<style scoped>
.screen3{
    width: 100%;
}
</style>

