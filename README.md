# 小莫唐尼的个人主页

> 小莫唐尼的个人门户站点，记录学习与生活点滴，展示开源项目与作品。

**线上地址**：<https://xiaoxiaomo.cn> · **博客**：<https://blog.xiaoxiaomo.cn>

## ✨ 功能特性

- **个人主页**：关于我、作品集、文章等模块，导航栏配置化驱动（`src/config`）
- **Neo-Brutalist 风格 UI**：粗黑边框 + 硬阴影 + 撞色贴纸设计，配路牌公告、宠物、加载动画等装饰元素
- **通知公告**：首页公告弹窗，支持「今日不再提示」（以自然日为界，跨天自动恢复）
- **网站升级检测**：基于 [plugin_web_update_notice](https://github.com/GreenWebpack/plugin-web-update-notice) 检测新版本并弹窗提示，更新日志从同源 `public/changelog.json` 按版本号动态读取，加载失败自动回退内置数据
- **微信互动**：二维码弹窗、宠物音效等小彩蛋

## 🛠 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | React 19 + TypeScript |
| 构建 | Vite + React Compiler |
| 路由 | React Router |
| 样式 | Tailwind CSS + UnoCSS 原子类 |
| 动画 | motion (framer-motion) |
| 代码质量 | ESLint（类型感知规则） |
| 部署 | GitHub Actions + Vercel |

## 🚀 快速开始

```bash
# 安装依赖（推荐 pnpm）
pnpm install

# 本地开发
pnpm dev

# 构建生产版本
pnpm build
```

## 📁 目录结构

```
src/
├── components/   # 通用组件（公告弹窗、更新弹窗、路牌等）
├── config/       # 站点与导航配置
├── data/         # 静态数据（内置更新日志兜底等）
├── hooks/        # 自定义 Hook（升级检测等）
├── views/        # 页面视图（首页、关于、作品、404 等）
├── types/        # 类型定义
└── styles/       # 全局样式与主题
public/           # 静态资源（含 changelog.json 更新日志）
```

## 📝 发版与更新日志

1. 修改 `package.json` 中的 `version`；
2. 在 `public/changelog.json` 数组头部追加新版本的日志条目；
3. 构建部署后，升级检测会自动弹窗提示，并按版本号展示对应日志。

## 📮 联系我

- 微信小程序：搜索 🔍 **小莫唐尼**
- 邮箱：1431128779@qq.com
