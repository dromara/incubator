<template>
  <div style="margin-top: 16px;"></div>
  <n-grid :x-gap="12" :y-gap="8" :cols="cols">
    <n-grid-item v-for="mentor in mentors">
      <n-card :title="mentor.name">
        <template #cover>
          <n-image :src="mentor.avatar"/>
        </template>
        <template #footer>
          <div class="ellipsis-single" v-for="contact in mentor.contacts">
            <n-icon size="14">
              <QQIcon v-if="contact.type === 'qq'"/>
              <Mail v-else-if="contact.type === 'email'"/>
              <Call v-else-if="contact.type === 'phone'"/>
              <LogoWechat v-else-if="contact.type === 'wechat'"/>
            </n-icon>
            {{ contact.value }}
          </div>
        </template>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import {
  Mail,
  Call,
  LogoWechat
} from '@vicons/ionicons5'

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

import {mentors} from './data'
import QQIcon from "./QQIcon.vue";
import {ref} from "vue";

const cols = ref<number>(Math.round(Math.min(window.innerWidth, 1152) / 250))
</script>

<style scoped>
.ellipsis-single {
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis; 
}
</style>
