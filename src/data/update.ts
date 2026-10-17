import {
  UpdateNoteType,
  UpdateInfo,
  UpdateItemColorClassNames,
} from "@/types/update";

import packageJson from "../../package.json";

export const updateInfoList: UpdateInfo[] = [
  // 内置兜底日志：优先读取 public/changelog.json，仅当远程加载失败时使用
  {
    title: "来看看这次都更新了什么",
    version: packageJson.version,
    date: "2026-04-05",
    notes: [
      {
        type: UpdateNoteType.新增,
        title: "新增",
        content: "新增 404 错误页面，当访问不存在的页面时，会跳转到 404 页面。",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.优化,
        title: "优化",
        content: "优化了UI，提高用户体验！",
        className: UpdateItemColorClassNames[UpdateNoteType.优化],
      }
    ],
  },
];
