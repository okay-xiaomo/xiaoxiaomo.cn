import clsx from "clsx";
import { UpdateInfo } from "@/types/update";

interface UpdateModalProps {
  title: string;
  okText?: string;
  cancelText?: string;
  updateInfo: UpdateInfo;
  versionInfo: { version: string; options: Record<string, any> } | null;
  render?: () => React.ReactNode;
  onCancel: () => void;
  onOk: () => void;
}

export const UpdateModal = (props: UpdateModalProps) => {
  const { title, updateInfo, onCancel, onOk, okText, cancelText } = props;

  const handleOk = () => {
    onOk();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      {/* 遮罩层 (模拟涂鸦乱线的透明黑) */}
      <div
        className={clsx(
          "fixed inset-0 bg-[#1f2937]/5 backdrop-blur-sm z-100 w-screen h-screen flex items-center justify-center",
          "font-['ZCOOL_KuaiLe',cursive,sans-serif]",
        )}
      >
        {/* 弹窗主体 */}
        <div className="bg-[#ddd6fe] border-4 border-[#1f2937] shadow-[12px_12px_0px_0px_#1f2937] w-full max-w-lg flex flex-col relative -rotate-1">
          {/* 胶带装饰 */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white/60 border-2 border-[#1f2937] rotate-2 z-10 backdrop-blur-sm shadow-sm"></div>

          {/* 头部 */}
          <div className="flex justify-between items-center p-5 pb-3 border-b-4 border-[#1f2937]">
            <div className="flex items-center gap-2 text-2xl font-bold text-[#1f2937]">
              <span className="text-3xl">🚀</span> {title}
            </div>
          </div>

          {/* 内容区 (更新日志列表) */}
          <div className="p-6">
            <div className="bg-white border-[3px] border-[#1f2937] p-6 shadow-[6px_6px_0px_0px_#1f2937] rotate-1 flex flex-col gap-5">
              <p className="text-[#1f2937] font-bold text-lg border-b-2 border-[#1f2937] border-dashed pb-2 mb-2">
                {updateInfo.title ?? "来看看这次都更新了什么"}：
              </p>

              {/* 更新项 */}
              {updateInfo.notes.map((note) => (
                <div className="flex gap-3 items-start">
                  <div
                    className={clsx(
                      "border-2 border-[#1f2937] shadow-[2px_2px_0px_0px_#1f2937] px-2 py-0.5 rounded-sm transform shrink-0 mt-0.5",
                      note.className,
                    )}
                  >
                    <span className="text-xs font-black text-[#1f2937] tracking-widest">
                      {note.type}
                    </span>
                  </div>
                  <p className="text-gray-700 font-[system-ui,sans-serif] text-[15px] font-medium leading-tight pt-1">
                    {note.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 底部操作区 */}
          <div className="p-6 pt-0 flex justify-between items-center mt-2">
            <button
              className="text-gray-500 font-bold text-lg underline decoration-2 decoration-[#1f2937] underline-offset-4 hover:text-[#1f2937] transition-colors rotate-1"
              onClick={handleCancel}
            >
              {cancelText || "稍后再说"}
            </button>

            <button
              className="bg-[#bbf7d0] border-4 border-[#1f2937] px-8 py-3 text-[#1f2937] font-black text-xl shadow-[6px_6px_0px_0px_#1f2937] transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-none active:scale-95 -rotate-2 flex items-center gap-2"
              onClick={handleOk}
            >
              {okText || "立即升级 ✨"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
