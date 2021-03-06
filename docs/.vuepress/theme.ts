import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  author: {
    name: "SINJIN"
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "sinjinshi/note",

  docsDir: "/docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: {
    "/前端/": "structure",
    "/hex/": "structure",
    "/": ["readme"],
  },

  footer: "事已至此，先吃饭吧",

  displayFooter: true,

  pageInfo: ["Author", "Date", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: true,
    },
  },
});
