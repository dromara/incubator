import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/incubator/",
  "/projects/",
  "/mentor/",
  {
    text: "孵化指南",
    prefix: "/guides/",
    children: [
      { text: "项目管理委员会",  link: "ppmc" },
      { text: "社区成熟建设指南",link: "community" },
    ],
  },
  {
    text: "孵化项目发布",
    link: "/guides/release.md"
  },
   {
    text: "孵化项目毕业",
    link: "/guides/graduate.md"
  }

]);
