// 我的个人项目
import uniHaloCover from "@/assets/projects/uni-halo.jpg";
import home1Cover from "@/assets/projects/home1.jpg";
import home2Cover from "@/assets/projects/home2.jpg";

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

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  href: string;
  cover: string;
  tags: {
    name: string;
    classNames?: string;
  }[];
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
    tags: [
      { name: "开源", classNames: "bg-green-500" },
      { name: "原创", classNames: "bg-neo-pink" },
    ],
    screenshots: [],
  },
  {
    id: "home2",
    name: "个人主页2",
    description:
      "一个个人主页，基于React技术栈实现（基于其他项目进行二次开发）。",
    category: ProjectCategory.Website,
    href: "#",
    cover: home2Cover,
    tags: [{ name: "非原创", classNames: "bg-amber-300" }],
    screenshots: [],
  },
  {
    id: "home1",
    name: "个人主页1",
    description:
      "一个个人主页，基于Vue3技术栈实现（基于其他项目进行二次开发）。",
    category: ProjectCategory.Website,
    href: "https://github.com/okay-xiaomo/www.xiaoxiaomo.cn",
    cover: home1Cover,
    tags: [
      { name: "开源", classNames: "bg-green-500" },
      { name: "非原创", classNames: "bg-amber-300" },
    ],
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
    tags: [{ name: "开源", classNames: "bg-green-500" }],
    screenshots: [],
  },
];
