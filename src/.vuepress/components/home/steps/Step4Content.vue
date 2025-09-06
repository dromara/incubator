<template>
  <div>
    <h3 class="step-title">4. 提交提案评审</h3>
    <p class="step-description">在 GitHub Issue 提交提案，等待 TOC 委员会评审：</p>
    
    <div class="step-box">
      <div class="step-box-header">操作步骤</div>
      <div class="step-box-content">
        <div class="step-list">
          <div class="step-list-item">
            <div class="step-list-number">1</div>
            <p>访问 Dromara 孵化器 GitHub 仓库</p>
          </div>
          <div class="step-list-item">
            <div class="step-list-number">2</div>
            <p>新建 Issue，标题格式：<code class="code-inline">【Proposal】xxx项目申请加入Dromara 开源组织孵化器</code></p>
          </div>
          <div class="step-list-item">
            <div class="step-list-number">3</div>
            <p>正文粘贴完整提案内容，提交后等待 TOC 委员会评审</p>
          </div>
        </div>
      </div>
    </div>
    
    <a href="https://github.com/dromara/incubator/issues" target="_blank" class="btn btn-primary">
      <i class="fa fa-github mr-2"></i> 前往提交提案
    </a>
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
  margin-bottom: 24px;
  color: #4E5969;
  text-align: left;
  max-width: 100%;
}

.step-box {
  border: 1px solid #E5E6EB;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
}

.step-box-header {
  background-color: #F7F8FA;
  padding: 12px 16px;
  font-weight: 600;
  color: #1D2129;
  border-bottom: 1px solid #E5E6EB;
}

.step-box-content {
  padding: 16px;
}

.step-list {
  margin-bottom: 30px;
}

.step-list-item {
  display: flex;
  align-items: center;
}

.step-list-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #165DFF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 16px;
  flex-shrink: 0;
}

.code-inline {
  background-color: #F7F8FA;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.875rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #165DFF;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #1e40af;
}

.btn-primary {
  background-color: #165DFF;
}

.mr-2 {
  margin-right: 8px;
}
</style>

