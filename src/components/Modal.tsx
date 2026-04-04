import { useState } from "react";
import clsx from "clsx";

interface ModalProps {
  visible: boolean;
  title: string;
  okText?: string;
  cancelText?: string;
  content?: string | React.ReactNode;
  render?: () => React.ReactNode;
  onCancel: () => void;
  onOk: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    visible,
    title,
    content,
    onCancel,
    onOk,
    render,
    okText,
    cancelText,
  } = props;

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
          visible ? "flex" : "hidden",
        )}
      >
        {/* 弹窗主体 */}
        {/* bg-[#fde68a] 替代 bg-doodle-yellow */}
        <div className="bg-[#fde68a] border-4 border-[#1f2937] rounded-xl shadow-[10px_10px_0px_0px_#1f2937] w-11/12 max-w-xl flex flex-col relative rotate-1">
          {/* 头部 */}
          <div className="flex justify-between items-center p-4 border-b-4 border-[#1f2937]">
            <div className="flex items-center gap-2 text-2xl font-bold text-[#1f2937]">
              <span className="text-3xl">📝</span> {title}
            </div>

            {/* 经典的圆形红叉关闭按钮 */}
            <button
              className="bg-[#fca5a5] border-[3px] border-[#1f2937] rounded-full w-8 h-8 flex items-center justify-center text-[#1f2937] font-black text-lg shadow-[3px_3px_0px_0px_#1f2937] transition-all hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none active:scale-95"
              onClick={handleCancel}
            >
              &times;
            </button>
          </div>

          {/* 内容区 (模仿图中白色卡片的样式) */}
          <div className="p-6">
            <div className="bg-white rounded-lg border-[3px] border-[#1f2937] p-5 shadow-[6px_6px_0px_0px_#1f2937] -rotate-1">
              {/* 
            默认内容模板 
                <>
                <h3 className="text-xl text-[#1f2937] mb-3">
                  真的要删除这篇灵感吗？
                </h3>
                <p className="text-gray-500 text-sm font-[system-ui,sans-serif] leading-relaxed">
                  就像擦掉草稿本上的涂鸦一样，删除后就再也找不回来啦！想清楚哦。
                </p>
              </> 
            */}

              {render ? render() : content ? content : null}
            </div>
          </div>

          {/* 底部操作区 */}
          <div
            className={clsx(
              "p-5 pt-0 flex justify-end gap-4 mt-2",
              cancelText || okText ? "flex" : "hidden",
            )}
          >
            {/* 取消按钮 (白色，轻微倾斜) */}
            {cancelText && (
              <button
                className="bg-white rounded-lg border-[3px] border-[#1f2937] px-6 py-2 text-[#1f2937] font-bold text-lg shadow-[6px_6px_0px_0px_#1f2937] transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-none active:scale-95 -rotate-2"
                onClick={handleCancel}
              >
                {cancelText}
              </button>
            )}
            {/* 确认按钮 (蓝色，轻微倾斜) */}
            {okText && (
              <button
                className="bg-[#bfdbfe] rounded-lg border-[3px] border-[#1f2937] px-6 py-2 text-[#1f2937] font-bold text-lg shadow-[6px_6px_0px_0px_#1f2937] transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-none active:scale-95 rotate-2"
                onClick={handleOk}
              >
                {okText}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
