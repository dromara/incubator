<template>
  <div>
    <h3 class="step-title">3. 编写项目提案</h3>
    <p class="step-description">与导师协作完成提案，确保内容完整，以通过 Dromara TOC 委员会评审：</p>
    
    <table class="proposal-table">
      <thead>
        <tr>
          <th>提案要素</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>项目名称</td>
          <td>清晰、无歧义的项目全称</td>
        </tr>
        <tr>
          <td>项目描述</td>
          <td>项目定位、核心功能、解决的问题</td>
        </tr>
        <tr>
          <td>社区参与度</td>
          <td>现有贡献者数量、用户反馈、issue 处理情况</td>
        </tr>
        <tr>
          <td>代码地址</td>
          <td>GitHub/Gitee 等代码仓库链接（需公开可访问）</td>
        </tr>
        <tr>
          <td>核心人员</td>
          <td>项目负责人、核心贡献者信息（联系方式可选）</td>
        </tr>
        <tr>
          <td>License</td>
          <td>开源协议（需符合 Dromara 社区协议规范，如 Apache-2.0）</td>
        </tr>
      </tbody>
    </table>

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

.proposal-table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  table-layout: auto;
}

.proposal-table th,
.proposal-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #E5E6EB;
}

.proposal-table th {
  background-color: #F7F8FA;
  font-weight: 600;
  color: #1D2129;
}

.proposal-table tr:nth-child(even) {
  background-color: #F7F8FA;
}

.highlight-box {
  background-color: #EBF5FF;
  border-left: 4px solid #165DFF;
  padding: 16px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 30px;
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

