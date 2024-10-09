import { defineConfig } from 'vitepress'
import excludeSidebars from "../../config/exclude-sidebars.json"
import path from "path"
import fs from "fs"






// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端题库",
  // description: "集思广益，共同完善的大题库",
  base: "/questions/",
  markdown: {
    lineNumbers: true, // 默认显示行号
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
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
      { icon: 'github', link: 'https://github.com/elarber/questions' }
    ],
    editLink: {
      pattern: 'https://github.com/elarber/questions/edit/main/docs/:path'
    },
    footer: {
      message: '立志成为最全面的前端面试题库',
      // copyright: 'Copyright © cherry'
    }
  },
})



function getSideBars() {
  var sidebars = [];
  const docsPath = path.dirname(__dirname); // docs 目录路径
  // 给需要排除的文件名增加后缀名
  for (let index in excludeSidebars) {
    excludeSidebars[index] += ".md";
  }

  (function getSideBar(docsPath, link = "") {
    let sidebar = [];
    const files = fs.readdirSync(docsPath);
    // console.log("一维：", files);
    files.forEach((filename, index) => {
      if (filename.startsWith(".") || !filename) return;
      if (excludeSidebars.includes(filename)) return;

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
