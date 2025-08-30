<template>
  <div>
    <h3 class="step-title">5. 成为孵化项目</h3>
    <p class="step-description">评审通过后正式进入孵化阶段，获得社区资源支持：</p>
    
    <p class="step-description">TOC 委员会审核通过后，项目将被纳入 Dromara 孵化项目列表，获得以下支持：</p>
    
    <div class="resources-grid">
      <div class="resource-item">
        <h4 class="resource-title">
          <i class="fa fa-server"></i> 基础设施支持
        </h4>
        <p class="resource-description">提供 CI/CD 服务、代码质量检测、自动部署等工具支持</p>
      </div>
      <div class="resource-item">
        <h4 class="resource-title">
          <i class="fa fa-users"></i> 社区推广
        </h4>
        <p class="resource-description">在社区渠道进行项目展示，帮助吸引更多用户和贡献者</p>
      </div>
      <div class="resource-item">
        <h4 class="resource-title">
          <i class="fa fa-comments"></i> 交流渠道
        </h4>
        <p class="resource-description">加入社区核心开发者交流群，获取第一手社区动态</p>
      </div>
      <div class="resource-item">
        <h4 class="resource-title">
          <i class="fa fa-graduation-cap"></i> 毕业指导
        </h4>
        <p class="resource-description">制定项目成长计划，指导项目达到正式项目标准</p>
      </div>
    </div>
    
    <p class="step-description">孵化期通常为 3-6 个月，期间导师将持续提供指导，帮助项目成长。</p>
  </div>
</template>

<style scoped>
.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1D2129;
  margin-bottom: 24px;
}

.step-description {
  color: #4E5969;
  text-align: left;
  max-width: 100%;
}

.resources-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .resources-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.resource-item {
  background-color: #F7F8FA;
  padding: 16px;
  border-radius: 8px;
}

.resource-title {
  font-weight: 600;
  color: #1D2129;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.resource-title i {
  color: #165DFF;
  margin-right: 8px;
}

.resource-description {
  font-size: 0.875rem;
  color: #4E5969;
}
</style>

