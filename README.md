# VuePress + Reco 使用记录

## 流程

+ 安装 nodejs
+ 安装 vuepress： `npm install -D vuepress`
+ 安装主题 reco： `npm install vuepress-theme-reco --save-dev`
+ 安装相关插件
  + 公式： `npm install -D vuepress-plugin-mathjax`
  + 图片缩放： `npm install -D vuepress-plugin-medium-zoom`
  + 支持 Markdown Task List： `npm install markdown-it-task-lists -D`

## 常用命令

+ `npm run docs:dev`
+ `npm run docs:build`

## reco 提供的功能(我用到的)

+ Markdown编辑
  + 基础Markdown语法（标题、引用、超链接、列表、图片等）
  + 数学公式（插件）
  + task list（插件）
+ 导航栏
  + 两类实现：点击进入/下拉菜单
+ 首页（引导页）
+ 侧边栏。包括两个类型：
  + 左侧侧边栏：可理解为整个项目所有文档的目录。
  + 右侧侧边栏：当前文档的目录。
+ 图片点击放大（插件）
+ 评论（reco自带插件）
+ 站内搜索
+ 文章时间线
+ 文章标签汇总（Tag）
+ 文章元数据，如作者、发表时间等
