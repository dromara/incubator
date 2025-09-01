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
        hostname: "https://incubator.dromara.org/",

  author: {
    name: "dromara",
  },

  logo: "/logo.png",


  docsDir: "src",

  navbar,
 navbarLayout: {
    start: ["Brand","Search"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook" ],
  },
  sidebar,
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
  // shouldPrefetch: false,
});
