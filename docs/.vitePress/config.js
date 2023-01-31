module.exports = {
  title: "McGee",
  description: "一个web前端工程师的个人网站",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",
  lastUpdated: true,
  themeConfig: {
    search: false,
    lastUpdatedText: "最近更新时间",
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Blog", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/wmzwq/vuepress-myblog" }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '我的博客',
          items: [
            { text: 'Vue', link: '/guide/Vue.md' },
            { text: 'Css', link: '/guide/Css.md' },
            { text: 'Git', link: '/guide/Git.md' },
            { text: 'React', link: '/guide/React.md' },
          ]
        },

      ]
    }
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'Vue',
        'React',
        'Js',
        'Css',
        'Git',
      ]
    }
  ]
}

