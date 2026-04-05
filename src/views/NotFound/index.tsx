import { Link } from "react-router-dom";
import { Home as HomeIcon, AlertTriangle } from "lucide-react";
import { DecorationElements } from "@/components/DecorationElements";

export const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#F0F0F0] flex items-center justify-center p-6 font-black relative overflow-hidden">
      {/* 网站点状背景 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* 原来的装饰圆点 */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute left-[8%] top-[10%] h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-28 w-28 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute bottom-[16%] left-[14%] h-32 w-32 rounded-full bg-teal-100 blur-3xl" />
        <div className="absolute right-[12%] bottom-[12%] h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
      </div>

      {/* 动态装饰元素 */}
      <DecorationElements />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        @keyframes wobble {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wobble {
          animation: wobble 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative animate-float z-10">
        {/* 背景阴影层 */}
        <div className="absolute inset-0 bg-black rounded-[2rem] translate-x-4 translate-y-4" />

        {/* 主卡片 */}
        <div className="relative bg-white neo-border neo-shadow rounded-[2rem] p-6 md:p-8 max-w-xl w-full">
          {/* 顶部装饰标签 */}
          <div className="absolute -top-5 left-6 bg-neo-yellow neo-border px-3 py-1.5 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-black -rotate-3">
            404 ERROR
          </div>

          {/* 404 数字区域 */}
          <div className="text-center mb-6">
            <div className="text-7xl md:text-8xl font-black text-black mb-3 animate-bounce-gentle">
              4
              <span className="inline-block mx-2 animate-wobble">0</span>
              4
            </div>
            <div className="bg-neo-pink neo-border px-5 py-2 rounded-2xl inline-block rotate-1">
              <span className="text-white text-lg font-black tracking-wider">
                PAGE NOT FOUND
              </span>
            </div>
          </div>

          {/* 图标区域 */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 bg-[#52d171] neo-border rounded-3xl flex items-center justify-center animate-bounce-gentle">
              <AlertTriangle size={56} className="text-black" />
            </div>
          </div>

          {/* 标题和描述 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
              哎呀！页面走丢了
            </h1>
            <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
              这个页面可能被外星人带走了，或者链接出了小问题。
              <br />
              别担心，我们的首页还在等你呢！
            </p>
          </div>

          {/* 返回首页按钮 */}
          <div className="text-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-black text-white neo-button rounded-2xl px-6 py-3 text-lg hover:bg-neo-blue transition-colors"
            >
              <HomeIcon size={20} />
              <span className="font-black">回到首页</span>
            </Link>
          </div>

          {/* 底部装饰文字 */}
          <div className="text-center">
            <p className="text-gray-500 text-sm font-medium">
              继续探索更多精彩内容吧 ✨
            </p>
          </div>
        </div>

        {/* 装饰性贴纸 */}
        <div className="absolute -left-8 -top-4 w-16 h-16 bg-neo-pink neo-border rounded-full rotate-12 animate-bounce-gentle" />
        <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-neo-blue neo-border rounded-2xl -rotate-12 animate-wobble" />
        <div className="absolute -right-12 top-1/2 w-12 h-12 bg-neo-green neo-border rounded-lg rotate-45 animate-bounce-gentle" />
      </div>
    </section>
  );
};
