// 布局相关类型

export type NavBarType = "route" | "href" | "action";

export interface NavBar {
  type: NavBarType;
  id: string;
  title: string;
  href: string;
  visible?: boolean;
}
