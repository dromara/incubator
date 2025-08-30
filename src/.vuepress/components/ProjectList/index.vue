<template>
    <div class="container">
    <div class="card" v-for="project in dataList" :key="project.name">
      <h2>{{ project.name }}</h2>
      <div class="content-container">
        <div class="content">
          <p> {{ project.description }}</p>
      <p>作者：{{ project.sponsor }}</p>
      <p>加入时间：{{ project.date }}</p>
      <div class="tags">
        <p v-html="project.link"></p>
      </div>
        </div>
      
      <div class="icons">
        <div class="icons-container">
            <div class="github">
            <svg t="1756573995607" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3121" width="25" height="25"><path d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z" fill="#000000" p-id="3122"></path></svg>
        </div>
        <div class="gitee">
          <svg t="1756574202834" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4254" width="25" height="25"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4255"></path></svg>
        </div>
        </div>
      </div>
      </div>

    </div>
  </div>
  
</template>

<script setup>
import {projects} from "./data";
import {onMounted, ref} from "vue";


const dataList = ref([]);

onMounted(() => {
  dataList.value = projects.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
})
</script>

<style scoped>
.container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      background: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border: 1px solid #f5f5f5;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }
    .card h2 {
      margin: 0 0 15px;
      color: #2c3e50;
      font-size: 1.3rem;
    }
    
    .card p {
      color: #666;
      margin: 8px 0;
      font-size: 0.9rem;
    }
    
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 15px 0;
    }
    
    .tag {
      background: #ecf0f1;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 0.8rem;
    }
    
    .icons {
      display: flex;
      margin-top: 10px;
      height: 30px;
      flex-direction: column;
      justify-content: flex-end;
      border-top: 1px solid #e2e2e3;
    }
    .icons-container {
      display: flex;
      gap: 15px;

    }
    .icons i {
      color: #3498db;
      cursor: pointer;
    }
    
    .icons .fa-github { color: #333; }
    .github, .gitee {
      cursor: pointer;
      height: 25px;
    }
    /* 响应式设计：屏幕宽度小于768px时显示单列 */
    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
    }
   
</style>
