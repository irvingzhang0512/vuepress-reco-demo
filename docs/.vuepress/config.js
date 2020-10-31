// // 自动生成侧边栏方法三
// const glob = require('glob')
// const getChildren = function(parent_path, dir) {
//   return glob
//     .sync(parent_path + '/' + dir + '/**/*.md')
//     .map(path => {
//       // remove "parent_path" and ".md"
//       path = path.slice(parent_path.length + 1, -3)
//       // remove README
//       if (path.endsWith('README')) {
//         path = path.slice(0, -6)
//       }
//       return path
//     })
//     .sort()
// }

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
    // 导航栏增加分类与标签按钮
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category" // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag" // 默认文案 “标签”
      }
    },

    // 导航栏（有两种形式的写法）
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
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
    // sidebar: {
    //   '/docs/': [
    //     {
    //       title: 'guide',   // required
    //       path: '/docs/guide/',      // optional, link of the title, which should be an absolute path and must exist
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 2,    // optional, defaults to 1
    //       // 自动生成侧边栏方法3
    //       children: getChildren('docs/docs', 'guide')
    //       // 手动生成侧边栏
    //       // children: [
    //       //   { title: "1", path: "/docs/guide/one" },
    //       //   { title: "2", path: "/docs/guide/two" },
    //       // ]
    //     },
    //     {
    //       title: 'foo',   // required
    //       path: '/docs/foo/',      // optional, link of the title, which should be an absolute path and must exist
    //       collapsable: false, // optional, defaults to true
    //       sidebarDepth: 1,    // optional, defaults to 1
    //       // 自动生成侧边栏方法3
    //       children: getChildren('docs/docs', 'foo')
    //       // 手动生成侧边栏
    //       // children: [
    //       //   { title: "3", path: "/docs/foo/three" },
    //       //   { title: "4", path: "/docs/foo/four" },
    //       // ]
    //     }
    //   ]
    // },

    subSidebar: 'auto',
    sidebarDepth: 3
  },

  plugins: [
    // 自动生成侧边栏方法二
    // 安装：npm install -D boboidream/vuepress-bar
    // https://github.com/boboidream/vuepress-bar
    // 首页侧边栏去不掉
    // 添加导航栏的方法无法使用
    // ["autobar", {
    //   skipEmptyNavbar: false,
    //   navPrefix: "nav",
    // }],

    // 自动生成侧边栏方法一
    // 安装：npm i vuepress-plugin-auto-sidebar -D
    // https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar
    // 存在一个缺陷：一次只能对一个文件夹下的markdown文件生成sidebar，不能生成多个文件夹中的内容
    ["vuepress-plugin-auto-sidebar", {}],

    [
      // 评论插件，支持各个平台的issue保存评论
      // https://vuepress-theme-reco.recoluan.com/views/plugins/comments.html
      // 内置插件，不需要安装，只需要配置
      '@vuepress-reco/comments',
      {
        solution: 'vssue',
        options: {
          title: 'vuepress-theme-reco',
          platform: 'gitlab',
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
