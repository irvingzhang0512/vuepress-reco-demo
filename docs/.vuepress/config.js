module.exports = {
  title: 'Hello title',
  description: 'Just playing around',
  theme: 'reco',

  markdown: {
    // 支持 task list
    // npm install markdown-it-task-lists -D
    // 除了这个还要在 .vuepress/styles/index.styl 中还要修改
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },

  themeConfig: {
    // 导航栏（有两种形式的写法）
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Tags', link: '/tag/', icon: 'reco-date' }, // 这个页面是自动生成的
      {
        text: 'More',
        ariaLabel: 'Language Menu',
        link: '/docs/guide/',
        items: [
          { text: 'One', link: '/docs/guide/one/' },
          { text: 'Two', link: '/docs/guide/two/' }
        ]
      }

    ],

    // 侧边栏
    // 侧边栏的写法有很多种，参数有哪些，文档里都没说清楚……
    sidebar: {
      '/docs/': [
        {
          title: 'guide',   // required
          path: '/docs/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            { title: "1", path: "/docs/guide/one" },
            { title: "2", path: "/docs/guide/two" },
          ]
        },
        {
          title: 'foo',   // required
          path: '/docs/foo/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            { title: "3", path: "/docs/foo/three" },
            { title: "4", path: "/docs/foo/four" },
          ]
        }
      ]
    },

    subSidebar: 'auto',
    sidebarDepth: 3
  },

  plugins: [
    [
      // 评论插件，支持各个平台的issue保存评论
      // https://vuepress-theme-reco.recoluan.com/views/plugins/comments.html
      // 内置插件，不需要安装，只需要配置
      '@vuepress-reco/comments',
      {
        solution: 'vssue',
        options: {
          title: 'vuepress-theme-reco',
          platform: 'github',
          owner: '',
          repo: '',
          clientId: '',
          clientSecret: '',
          baseUrl: '',
        }
      }
    ],
    [
      // 支持数学公式
      // https://vuepress.github.io/zh/plugins/mathjax/
      // npm install -D vuepress-plugin-mathjax
      'vuepress-plugin-mathjax',
      {
      }
    ],
    [
      // 图片点击打开
      // https://vuepress.github.io/zh/plugins/medium-zoom/
      // npm install -D vuepress-plugin-medium-zoom
      '@vuepress/medium-zoom',
      {
        // 该选项必须
        selector: '.theme-reco-content :not(a) > img',
        // See: https://github.com/francoischalifour/medium-zoom#options
        options:
        {
          margin: 16,
        }
      }
    ]
  ]
}