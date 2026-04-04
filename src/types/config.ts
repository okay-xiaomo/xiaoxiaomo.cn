// 配置
export interface Config {
  site: {
    title: string;
    description: string;
    logo: string;
  };
  author: {
    name: string;
    avatar: string;
    ipCard: string;
    bio: string;
    email: string;
    qq: string;
    image: string;
  };
  links: {
    name: string;
    logo: string;
    description: string;
    url: string;
  }[];
}
