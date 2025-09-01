import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { hopeTheme } from "vuepress-theme-hope";
import { getDirname, path } from 'vuepress/utils'
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Dromara 孵化器",
  description: "vuepress-theme-hope 的博客演示",

theme: hopeTheme(
    {
        hostname: "https://mister-hope.github.io",

  author: {
    name: "dromara",
  },

  logo: "/logo.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // 导航栏
  navbar,
 navbarLayout: {
    start: ["Brand","Search"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook" ],
  },
  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    slimsearch: true,
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
    },
    { custom: true },
  ),

  alias: {
    // 你可以在这里将别名定向到自己的组件
    // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
    "@theme-hope/components/home/HomePage": path.resolve(
      __dirname,
      "./components/home/HomePage.vue",
    ),
  },

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
