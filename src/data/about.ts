export interface Skill {
  label: string;
  value: number;
  color: string;
}

export interface WorkExperience {
  date: string;
  role: string;
  company: string;
  description: string;
}

export const skills: Skill[] = [
  {
    label: "前端开发： Vue / React / TypeScript",
    value: 98,
    color: "bg-neo-pink",
  },
  {
    label: "工程化： Vite / Webpack / Docker / CI/CD",
    value: 80,
    color: "bg-neo-yellow",
  },
  {
    label: "跨平台开发： Uniapp / Flutter / Electron / Tauri",
    value: 70,
    color: "bg-neo-blue",
  },
  {
    label: "WebGis： Threejs / Cesium / Leaflet / OpenLayers",
    value: 60,
    color: "bg-neo-green",
  },
  {
    label: "AI：Agent / Vibe Coding",
    value: 88,
    color: "bg-neo-green",
  },
  {
    label: "后端开发： Node.js / Python / Java",
    value: 70,
    color: "bg-neo-blue",
  },
];

export const workExperiences: WorkExperience[] = [
  {
    date: "2025 - 至今",
    role: "全栈开发工程师",
    company: "某不是很知名的互联网公司",
    description:
      "拥抱AI，转型全栈开发，利用AI技术提升开发效率，同时关注用户需求，提供个性化服务。",
  },
  {
    date: "2020 - 2025",
    role: "前端开发工程师",
    company: "某小型创业互联网公司",
    description:
      "在不断实践中打磨技术，一段塑造性格的经历，让我学会自律、坚持与面对压力。",
  },
];
