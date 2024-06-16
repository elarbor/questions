import { defineConfig } from 'vitepress'
import path from "path"
import fs from "fs"






// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端题库",
  description: "最全面的前端面试题库",
  base: "/questions/",
  markdown: {
    lineNumbers: true // 默认显示行号
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: '开发模版', items: [
          { text: 'uniapp', link: 'https://gitee.com/eida/uniapp-init' },
          { text: 'vue2', link: 'https://gitee.com/eida/vue2-init' },
        ]
      }
    ],
    sidebar: getSideBars(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chergn/questions' }
    ],
    editLink: {
      pattern: 'https://github.com/chergn/questions/edit/main/docs/:path'
    },
    footer: {
      message: '欢迎投稿，共同完善题库',
      // copyright: 'Copyright © cherry'
    }
  },
})



function getSideBars() {
  var sidebars = [];
  const docsPath = path.dirname(__dirname); // docs 目录路径

  (function getSideBar(docsPath, link = "") {
    let sidebar = [];
    const files = fs.readdirSync(docsPath);
    // console.log("一维：", files);
    files.forEach((filename, index) => {
      if (filename.startsWith(".") || !filename) return;

      const filepath = path.join(docsPath, filename);
      const stat = fs.statSync(filepath);
      const extname = path.extname(filepath);
      const basename = path.basename(filepath, extname);

      if (stat.isDirectory()) {
        // console.log("📦 目录：", index, filename);
        getSideBar(filepath, `/${filename}/`)
      } else {
        // console.log("📃 文件：", index, filename);
        if (extname === ".md" && filename !== "index.md") {
          sidebar.push({
            text: basename,
            link: `${link}${basename}`,
          });
        }
      }
    })
    // console.log(link, sidebar);
    sidebars.push({
      text: link.replaceAll("/", ""),
      items: sidebar
    })
  })(docsPath)

  // console.log("\n\n\n\n\n【结果】：", sidebars);
  return sidebars;
}
