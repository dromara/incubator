<template>
  <n-grid style="margin-top: 16px" :x-gap="16" :y-gap="16" cols="2 s:1">
    <n-grid-item v-for="project in dataList" :key="project.name">
      <n-card hoverable class="project-card">
        <template #cover>
          <div class="project-header">
            <img
                :src="`/project/logo/${project.name}.webp`"
                :alt="project.name"
                class="project-logo"
                onerror="this.style.display = 'none';this.nextElementSibling.style.display = 'block'"
            />
            <span class="project-name">{{ project.name }}</span>
          </div>
        </template>
        <n-space vertical>
          <n-text depth="2">
            {{ project.description }}
          </n-text>

          <n-space vertical>
            <n-text depth="2">
              <n-text strong depth="2">作者：</n-text>
              {{ project.sponsor }}
            </n-text>
            <n-text depth="2">
              <n-text strong depth="2">加入时间：</n-text>
              {{ project.date }}
            </n-text>

            <p class="project-link" v-html="project.link"/>
            <n-divider/>
            <n-space>
              <div style="width: 24px;">
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <n-a :href="`https://github.com/dromara/myth${project.name}`" target="_blank">
                      <n-icon>
                        <LogoGithub/>
                      </n-icon>
                    </n-a>
                  </template>
                  访问 GitHub 仓库
                </n-tooltip>
              </div>
              <div style="width: 24px;">
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <n-a :href="`https://gitee.com/dromara/${project.name}`" target="_blank">
                      <n-icon>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Group" viewBox="0 0 89.7088726 89.7088726">
                          <g>
                            <circle id="Combined-Shape" fill="#C71D23" cx="44.8544363" cy="44.8544363"
                                    r="44.8544363"/>
                            <path
                                d="M67.558546,39.8714292 L42.0857966,39.8714292 C40.8627004,39.8720094 39.8710953,40.8633548 39.8701949,42.0864508 L39.8687448,47.623783 C39.867826,48.8471055 40.8592652,49.8390642 42.0825879,49.8393845 C42.0827874,49.8393846 42.0829869,49.8393846 42.0831864,49.8387862 L57.5909484,49.838657 C58.8142711,49.8386283 59.8059783,50.830319 59.8059885,52.0536417 C59.8059885,52.0536479 59.8059885,52.053654 59.8059701,52.0536602 L59.8059701,52.6073539 L59.8059701,52.6073539 L59.8059701,53.161115 C59.8059701,56.8310831 56.8308731,59.80618 53.160905,59.80618 L32.1165505,59.80618 C30.8934034,59.806119 29.9018373,58.8145802 29.9017425,57.5914331 L29.9011625,36.5491188 C29.9008781,32.8791508 32.8758931,29.9039718 36.5458611,29.9038706 C36.5459222,29.9038706 36.5459833,29.9038706 36.5460443,29.9040538 L67.5523638,29.9040538 C68.77515,29.9026795 69.7666266,28.9118177 69.7687593,27.6890325 L69.7721938,22.1516997 C69.774326,20.928378 68.7832423,19.9360642 67.5599198,19.9353054 C67.5594619,19.9353051 67.5590039,19.935305 67.558546,19.9366784 L36.5479677,19.9366784 C27.3730474,19.9366784 19.935305,27.3744208 19.935305,36.549341 L19.935305,67.558546 C19.935305,68.7818687 20.927004,69.7735676 22.1503267,69.7735676 L54.8224984,69.7735676 C63.079746,69.7735676 69.7735676,63.079746 69.7735676,54.8224984 L69.7735676,42.0864509 C69.7735676,40.8631282 68.7818687,39.8714292 67.558546,39.8714292 Z"
                                id="G" fill="#FFFFFF"/>
                          </g>
                        </svg>
                      </n-icon>
                    </n-a>
                  </template>
                  访问 Gitee 仓库
                </n-tooltip>
              </div>
            </n-space>
          </n-space>
        </n-space>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup>
import {
  NAlert, NAnchor, NAnchorLink, NAutoComplete, NAvatar, NAvatarGroup, NBackTop, NBadge, NBreadcrumb, NBreadcrumbItem, NButton,
  NButtonGroup, NCalendar, NCard, NCarousel, NCarouselItem, NCascader, NCheckbox, NCheckboxGroup, NCode, NCollapse, NCollapseItem,
  NCollapseTransition, NColorPicker, NConfigProvider, NCountdown, NDataTable, NDatePicker, NDescriptions, NDescriptionsItem, NDialog,
  NDivider, NDrawer, NDrawerContent, NDropdown, NDynamicInput, NDynamicTags, NElement, NEllipsis, NEmpty, NForm, NFormItem, NFormItemGi,
  NGlobalStyle, NGrid, NGridItem, NIcon, NIconWrapper, NImage, NImageGroup, NInput, NInputGroup, NInputGroupLabel, NInputNumber, NLayout,
  NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider, NList, NListItem, NLoadingBarProvider, NLog, NMenu, NMention, NMessageProvider,
  NModal, NNotificationProvider, NNumberAnimation, NPagination, NPopconfirm, NPopover, NProgress, NRadio, NRadioButton, NRadioGroup, NRate,
  NResult, NScrollbar, NSelect, NSkeleton, NSlider, NSpace, NSpin, NStatistic, NStep, NSteps, NSwitch, NTable, NTabPane, NTabs, NTag, NThing,
  NTimePicker, NTimeline, NTimelineItem, NTooltip, NTransfer, NTree, NTreeSelect, NWatermark, NText, NGradientText, NH1, NH2, NH3, NH4, NH5, NH6
} from 'naive-ui';
import {LogoGithub} from "@vicons/ionicons5";
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
.group-name {
  font-size: 28px;
}

.project-header {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 12px;
}

.project-header img {
  max-height: 50px; /* 图片最大高度 */
  width: auto; /* 保持宽高比 */
  max-width: 100%; /* 避免宽度超过容器 */
  object-fit: contain; /* 保持内容完整 */
}

.project-header .project-name {
  display: none;
  font-weight: 500;
  font-size: 32px;
}

.project-link {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.project-link img {
  max-height: 20px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.project-logo {
  width: 50px;
  height: 50px;
}

.n-divider:not(.n-divider--vertical) {
  margin-top: 36px;
  margin-bottom: 36px;
}

.project-card .n-divider:not(.n-divider--vertical) {
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
