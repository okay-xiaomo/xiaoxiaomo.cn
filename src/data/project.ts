// 我的个人项目
import uniHaloCover from "@/assets/projects/uni-halo.jpg";
import xiaomoHomeCover from "@/assets/projects/xiaomo-home.jpg";


export enum ProjectCategory {
  All = "全部",
  Website = "网站",
  MiniProgram = "小程序",
  DesktopApp = "桌面端",
  MobileApp = "App",
  VitePlugin = "Vite插件",
  BrowserExtension = "浏览器插件",
  VSCodeExtension = "vscode插件",
  Other = "其他",
}

interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  href: string;
  cover: string;
  screenshots?: {
    url: string;
    alt?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "uni-halo",
    name: "UniHalo",
    description:
      "一个基于Halo Api + UniApp的个人博客系统，支持多平台部署（Web、微信小程序、桌面端）。它的设计初衷是为了满足我对个人博客的定制化需求和移动端体验，同时也希望通过这个项目来探索和实践一些新的技术和设计理念。",
    category: ProjectCategory.MiniProgram,
    href: "https://uni-halo.925i.cn",
    cover: uniHaloCover,
    screenshots: [],
  },
   {
    id: "xiaomo-home",
    name: "个人主页",
    description:
      "一个个人主页，基于Vue3技术栈实现（基于其他项目进行二次开发）。",
    category: ProjectCategory.Website,
    href: "https://github.com/okay-xiaomo/www.xiaoxiaomo.cn",
    cover: xiaomoHomeCover,
    screenshots: [],
  },
];

export const openSourceProjects: Project[] = [
  {
    id: "uni-halo",
    name: "UniHalo",
    description:
      "一个基于Halo Api + UniApp的个人博客系统，支持多平台部署（Web、微信小程序、桌面端）。它的设计初衷是为了满足我对个人博客的定制化需求和移动端体验，同时也希望通过这个项目来探索和实践一些新的技术和设计理念。",
    category: ProjectCategory.MiniProgram,
    href: "https://uni-halo.925i.cn",
    cover: uniHaloCover,
    screenshots: [],
  },
];
