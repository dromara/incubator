<template>
  <div>
    <h3 class="step-title">1. 前置条件评估</h3>
    <p class="step-description">确认项目符合孵化基本要求，这是申请的基础条件：</p>
    
    <div class="requirements-list">
      <div class="requirement-item">
        <div class="requirement-icon">
          <svg t="1756544313433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13142" width="20" height="20"><path d="M954.848 323.424q0 22.848-16 38.848l-491.424 491.424q-16 16-38.848 16t-38.848-16l-284.576-284.576q-16-16-16-38.848t16-38.848l77.728-77.728q16-16 38.848-16t38.848 16l168 168.576 374.848-375.424q16-16 38.848-16t38.848 16l77.728 77.728q16 16 16 38.848z" fill="currentColor" p-id="13143"></path></svg>
        </div>
        <p>项目为原创，非 Fork 版本，拥有独立的知识产权</p>
      </div>
      <div class="requirement-item">
        <div class="requirement-icon">
            <svg t="1756544313433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13142" width="20" height="20"><path d="M954.848 323.424q0 22.848-16 38.848l-491.424 491.424q-16 16-38.848 16t-38.848-16l-284.576-284.576q-16-16-16-38.848t16-38.848l77.728-77.728q16-16 38.848-16t38.848 16l168 168.576 374.848-375.424q16-16 38.848-16t38.848 16l77.728 77.728q16 16 16 38.848z" fill="currentColor" p-id="13143"></path></svg>
        </div>
        <p>提供完整的应用解决方案（非单一工具类组件），具备实际应用价值</p>
      </div>
      <div class="requirement-item">
        <div class="requirement-icon">
            <svg t="1756544313433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13142" width="20" height="20"><path d="M954.848 323.424q0 22.848-16 38.848l-491.424 491.424q-16 16-38.848 16t-38.848-16l-284.576-284.576q-16-16-16-38.848t16-38.848l77.728-77.728q16-16 38.848-16t38.848 16l168 168.576 374.848-375.424q16-16 38.848-16t38.848 16l77.728 77.728q16 16 16 38.848z" fill="currentColor" p-id="13143"></path></svg>
        </div>
        <p>代码注释规范清晰，使用文档持续完善，方便新用户快速上手</p>
      </div>
      <div class="requirement-item">
        <div class="requirement-icon">
            <svg t="1756544313433" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13142" width="20" height="20"><path d="M954.848 323.424q0 22.848-16 38.848l-491.424 491.424q-16 16-38.848 16t-38.848-16l-284.576-284.576q-16-16-16-38.848t16-38.848l77.728-77.728q16-16 38.848-16t38.848 16l168 168.576 374.848-375.424q16-16 38.848-16t38.848 16l77.728 77.728q16 16 16 38.848z" fill="currentColor" p-id="13143"></path></svg>
        </div>
        <p>近 2 个月内有实际有效的代码提交记录，保持项目活跃度</p>
      </div>
    </div>
    
    <div class="highlight-box">
      <p class="highlight-text">
        <i class="fa fa-info-circle"></i> 
        若项目不符合以上条件，建议先完善后再提交申请，以提高通过率。
      </p>
    </div>
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

.requirements-list {
  margin-bottom: 30px;
}

.requirement-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.requirement-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: rgba(22, 93, 255, 0.1);
  color: #165DFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;
  margin-top: 3px;
}

.highlight-box {
  background-color: #EBF5FF;
  border-left: 4px solid #165DFF;
  padding: 16px;
  border-radius: 0 8px 8px 0;
}

.highlight-text {
  color: #165DFF;
  display: flex;
  align-items: center;
}

.highlight-text i {
  margin-right: 8px;
}
</style>

