import type { Config } from "@/types/config";
import type { NavBar } from "@/types/layout";
import logoImage from "@/assets/logo.jpg";
import ipCardImage from "@/assets/ip2.jpeg";
import xiaomoImage from "@/assets/xiaomo.jpeg";

export const config: Config = {
  site: {
    title: "小莫唐尼",
    description: "小莫唐尼的个人博客，记录我的学习和生活点滴。",
    logo: logoImage,
  },
  author: {
    name: "小莫唐尼",
    avatar: logoImage,
    bio: "一个热爱技术的前端开发者。",
    major: "网络工程",
    university: "桂林电子科技大学",
    job: "全栈开发工程师",
    email: "1431128779@qq.com",
    qq: "1431128779",
    ipCard: ipCardImage,
    image: xiaomoImage,
  },
  links: [
    {
      name: "GitHub",
      logo: "/github-logo.png",
      description: "我的GitHub主页",
      url: "https://github.com/xiaomo",
    },
    {
      name: "Twitter",
      logo: "/twitter-logo.png",
      description: "我的Twitter主页",
      url: "https://twitter.com/xiaomo",
    },
  ],
};

export const navBars: NavBar[] = [
  {
    type: "route",
    id: "home",
    title: "首页",
    href: "/",
    visible: true,
  },
  {
    type: "route",
    id: "about",
    title: "关于我",
    href: "/about",
    visible: true,
  },
  {
    type: "route",
    id: "articles",
    title: "文章",
    href: "/articles",
    visible: false,
  },
  {
    type: "route",
    id: "portfolio",
    title: "作品",
    href: "/portfolio",
    visible: true,
  },
  {
    type: "href",
    id: "blog",
    title: "博客",
    href: "https://blog.xiaoxiaomo.cn",
    visible: true,
  },
  {
    type: "href",
    id: "unihalo",
    title: "UniHalo",
    href: "https://uni-halo.925i.cn",
    visible: true,
  },
  {
    type: "action",
    id: "update",
    title: "更新",
    href: "",
    visible: false,
  },
];
