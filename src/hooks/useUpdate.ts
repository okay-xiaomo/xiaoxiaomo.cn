import { useEffect, useState } from "react";
import { updateInfoList } from "@/data/update";

// 自动检查
export function useWebUpdate(checkInterval = 30000) {
  // 是否有新版本
  const [hasNewVersion, setHasNewVersion] = useState(false);
  // 版本信息
  const [versionInfo, setVersionInfo] = useState<{
    version: string;
    options: Record<string, unknown>;
  } | null>(null);

  const updateInfo = updateInfoList[0];

  useEffect(() => {
    // 监听官方更新事件（发现新版本就触发）
    const handleUpdate = (e: any) => {
      const { version, options } = e.detail;
      setVersionInfo({ version, options });
      setHasNewVersion(true);
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
