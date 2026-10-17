import { useEffect, useState } from "react";
import { updateInfoList } from "@/data/update";
import {
  UpdateInfo,
  UpdateItemColorClassNames,
  UpdateNoteType,
} from "@/types/update";

// 内置兜底更新日志（changelog.json 加载失败时使用）
const fallbackUpdateInfo = updateInfoList[0];

/** 根据 note.type 补上对应颜色 className（JSON 文件不携带样式信息） */
const normalizeUpdateInfo = (info: UpdateInfo): UpdateInfo => ({
  ...info,
  notes: info.notes.map((note) => ({
    ...note,
    className:
      UpdateItemColorClassNames[note.type] ??
      UpdateItemColorClassNames[UpdateNoteType.其他],
  })),
});

/** 拉取同源更新日志，并按版本号匹配对应条目；任何失败都回退到内置数据 */
const fetchUpdateInfo = async (version: string): Promise<UpdateInfo> => {
  try {
    const res = await fetch("/changelog.json", { cache: "no-cache" });
    if (!res.ok) return fallbackUpdateInfo;
    const list: UpdateInfo[] = await res.json();
    const matched = list.find((item) => item.version === version);
    return matched ? normalizeUpdateInfo(matched) : fallbackUpdateInfo;
  } catch {
    return fallbackUpdateInfo;
  }
};

// 自动检查
export function useWebUpdate(checkInterval = 30000) {
  // 是否有新版本
  const [hasNewVersion, setHasNewVersion] = useState(false);
  // 版本信息
  const [versionInfo, setVersionInfo] = useState<{
    version: string;
    options: Record<string, unknown>;
  } | null>(null);
  // 更新日志（优先取 changelog.json 中匹配版本的条目）
  const [updateInfo, setUpdateInfo] = useState<UpdateInfo>(fallbackUpdateInfo);

  useEffect(() => {
    // 监听官方更新事件（发现新版本就触发）
    const handleUpdate = (e: any) => {
      const { version, options } = e.detail;
      setVersionInfo({ version, options });
      setHasNewVersion(true);
      // 拉取远程更新日志并匹配该版本，失败自动回退内置数据
      fetchUpdateInfo(version).then(setUpdateInfo);
    };

    // 注册监听
    document.addEventListener("plugin_web_update_notice", handleUpdate);

    // ============= 自动检查逻辑 =============
    const checkUpdate = () => {
      window.pluginWebUpdateNotice_?.checkUpdate();
    };

    // 立即检查一次
    checkUpdate();

    // 定时自动检查（默认 30 秒一次，可传参修改）
    const timer = setInterval(checkUpdate, checkInterval);

    // 清理
    return () => {
      document.removeEventListener("plugin_web_update_notice", handleUpdate);
      clearInterval(timer);
    };
  }, [checkInterval]);

  // 刷新页面
  const refresh = () => window.location.reload();

  return [
    hasNewVersion,
    refresh,
    versionInfo,
    updateInfo,
    setHasNewVersion,
  ] as const;
}
