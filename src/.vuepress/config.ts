import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import theme from "./theme.js";
import { getDirname, path } from 'vuepress/utils'
const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Dromara 孵化器",
  description: "vuepress-theme-hope 的博客演示",

  theme,
 plugins: [
    registerComponentsPlugin({
    components: {
        MentorList: path.resolve(__dirname, './components/MentorList/index.vue'),
        ProjectList: path.resolve(__dirname, './components/ProjectList/index.vue'),
      },
    }),
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
