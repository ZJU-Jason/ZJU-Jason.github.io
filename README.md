# 周鹏 (Jason Zhou) - 个人简历网站

基于 GitHub Pages + Jekyll 构建的个人简历网站，展示销售管理经验、行业成就和核心能力。

## 快速开始

### 方式一：Fork 并部署（推荐）

1. **Fork 本仓库**
2. **重命名仓库**为 `你的用户名.github.io`
3. 等待 1-2 分钟，访问 `https://你的用户名.github.io` 即可看到效果

### 方式二：本地运行

```bash
# 安装 Ruby 和 Bundler（如果没有）
# Windows: https://rubyinstaller.org/
# macOS: brew install ruby

# 安装依赖
gem install bundler
bundle install

# 本地启动
bundle exec jekyll serve

# 访问 http://localhost:4000
```

## 自定义内容

所有数据都在 `_config.yml` 中管理，修改数据无需改动 HTML：

| 配置项 | 说明 |
|--------|------|
| `author.name` | 姓名 |
| `author.name_en` | 英文名 |
| `author.title` | 职位头衔 |
| `author.email` | 邮箱 |
| `author.phone` | 电话 |
| `author.location` | 所在城市 |
| `author.summary` | 个人简介 |
| `experience` | 工作经历列表 |
| `skills` | 技能分类与熟练度 |
| `achievements` | 关键成就 |
| `education` | 教育背景 |
| `languages` | 语言能力 |
| `certifications` | 证书认证 |

## 目录结构

```
resume-site/
├── _config.yml          # 网站配置和简历数据（核心）
├── index.html           # 首页
├── _layouts/
│   └── default.html     # 基础布局模板
├── _includes/
│   ├── header.html      # 导航栏
│   ├── hero.html        # 首屏展示区
│   ├── about.html       # 关于我
│   ├── experience.html  # 工作经历（时间线）
│   ├── skills.html      # 核心能力（进度条）
│   ├── achievements.html# 关键成就
│   ├── education.html   # 教育背景
│   ├── contact.html     # 联系方式
│   └── footer.html      # 页脚
├── assets/
│   ├── css/style.css    # 样式文件
│   └── js/main.js       # JavaScript
└── README.md
```

## 特性

- ✅ 响应式设计，适配手机和电脑
- ✅ 滚动渐入动画
- ✅ 技能进度条滚动动画
- ✅ 平滑滚动导航
- ✅ 移动端汉堡菜单
- ✅ 打印样式优化
- ✅ 数据与视图分离
- ✅ 免费托管（GitHub Pages）