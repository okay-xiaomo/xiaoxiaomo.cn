import clsx from "clsx";
import weChatImage from "@/assets/images/wechat.jpg";
import { useState } from "react";

interface WeChatButtonProps {
  size?: "small" | "medium" | "large" | "default";
  text?: string;
  color?: string;
  textColor?: string;
}

const Modal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 z-100 w-screen h-screen flex items-center justify-center bg-[#1f2937]/5 backdrop-blur-sm",
        "font-['ZCOOL_KuaiLe',cursive,sans-serif]",
        visible ? "block" : "hidden",
      )}
    >
      <div
        className={clsx(
          "-rotate-2 bg-amber-200 w-1/5 min-w-64 border-4 rounded-xl border-black shadow-[4px_4px_0px_#000000] p-6",
        )}
      >
        <div className="flex justify-between items-center mb-4 border-b-[3px] border-gray-800 pb-2 relative">
          <h2 className="text-xl font-bold flex items-center gap-2">
            添加微信（注明来意）
          </h2>
          <button
            className="bg-[#fca5a5] border-[3px] border-[#1f2937] rounded-full w-8 h-8 flex items-center justify-center text-[#1f2937] font-black text-lg shadow-[3px_3px_0px_0px_#1f2937] transition-all hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none active:scale-95"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="bg-white border-2 border-gray-800 p-3 shadow-[3px_3px_0px_#1f2937] cursor-pointer  hover:shadow-[4px_4px_0px_#1f2937] transition-all">
            <img
              src={weChatImage}
              alt="我的微信"
              className="w-full h-full object-cover hover:-translate-y-1 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const WeChatButton = ({
  size = "default",
  text = "WeChat",
  color = "bg-green-500",
  textColor = "text-white",
}: WeChatButtonProps) => {
  const [visible, setVisible] = useState(false);

  const handleShowMyWeChatModal = () => setVisible(true);

  const classMaps = {
    default: "rounded-2xl text-xl px-10 py-4 ",
    small: "neo-button rounded-xl",
    medium: "",
    large: "",
  };

  const className = classMaps[size];

  return (
    <>
      <Modal visible={visible} onClose={() => setVisible(false)} />
      <button
        className={clsx(
          "cursor-pointer neo-button transform hover:-translate-y-1 transition-transform",
          className,
          color,
          textColor,
        )}
        title="通过我的微信联系我"
        onClick={handleShowMyWeChatModal}
      >
        {text}
      </button>
    </>
  );
};
