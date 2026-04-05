import {
  UpdateNoteType,
  UpdateInfo,
  UpdateItemColorClassNames,
} from "@/types/update";

import packageJson from "../../package.json";

export const updateInfoList: UpdateInfo[] = [
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
  {
    title: "来看看这次都更新了什么",
    version: "1.0.1",
    date: "2026-04-05",
    notes: [
      {
        type: UpdateNoteType.新增,
        title: "新增功能",
        content: "新增了新的功能",
        className: UpdateItemColorClassNames[UpdateNoteType.新增],
      },
      {
        type: UpdateNoteType.修复,
        title: "修复问题",
        content: "修复了已知问题",
        className: UpdateItemColorClassNames[UpdateNoteType.修复],
      },
      {
        type: UpdateNoteType.优化,
        title: "优化性能",
        content: "优化了性能",
        className: UpdateItemColorClassNames[UpdateNoteType.优化],
      },
      {
        type: UpdateNoteType.删除,
        title: "删除功能",
        content: "删除了已不需要的功能",
        className: UpdateItemColorClassNames[UpdateNoteType.删除],
      },
      {
        type: UpdateNoteType.其他,
        title: "其他",
        content: "其他更新",
        className: UpdateItemColorClassNames[UpdateNoteType.其他],
      },
    ],
  },
];
