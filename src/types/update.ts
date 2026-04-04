export enum UpdateNoteType {
  新增 = "新增",
  修复 = "修复",
  优化 = "优化",
  删除 = "删除",
  其他 = "其他",
}

export const UpdateItemColorClassNames = {
  [UpdateNoteType.新增]: "bg-[#bbf7d0] -rotate-2 ",
  [UpdateNoteType.修复]: "bg-[#FFD600] rotate-2",
  [UpdateNoteType.优化]: "bg-[#bfdbfe] -rotate-2",
  [UpdateNoteType.删除]: "bg-[#fca5a5] rotate-2",
  [UpdateNoteType.其他]: "bg-[#f7f7f7] -rotate-2",
};

export interface UpdateNote {
  type: UpdateNoteType;
  className: string;
  title: string;
  content: string;
}

export interface UpdateInfo {
  version: string;
  date: string;
  title: string;
  notes: UpdateNote[];
}
