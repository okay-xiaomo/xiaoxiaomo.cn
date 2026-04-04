import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";
import { DecorationElements } from "@/components/DecorationElements";

export const NotFound = () => {
  return (
    <section className="box-border relative h-screen overflow-hidden bg-[linear-gradient(180deg,#fdf6e9_0%,#f9e8d5_45%,#f7e0c9_100%)] px-4 py-6 text-stone-700 sm:px-6 sm:py-8">
      <style>{`
        @keyframes wobble-soft {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes tape-sway {
          0%, 100% { transform: rotate(-6deg) translateY(0px); }
          50% { transform: rotate(-3deg) translateY(-2px); }
        }

        @keyframes float-up {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.6deg); }
        }

        .wobble-soft {
          animation: wobble-soft 3.8s ease-in-out infinite;
          transform-origin: center;
        }

        .tape-sway {
          animation: tape-sway 4.2s ease-in-out infinite;
          transform-origin: center;
        }

        .float-up {
          animation: float-up 4.5s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-35">
        <div className="absolute left-[8%] top-[10%] h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
        <div className="absolute right-[10%] top-[18%] h-28 w-28 rounded-full bg-amber-200 blur-3xl" />
        <div className="absolute bottom-[16%] left-[14%] h-32 w-32 rounded-full bg-teal-100 blur-3xl" />
        <div className="absolute right-[12%] bottom-[12%] h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
      </div>

      {/* 动态装饰元素 */}
      <DecorationElements />

      <div className="relative mx-auto flex h-full items-center justify-center">
        <div className="relative w-full max-w-150">
          <div className="absolute -left-4 top-12 hidden h-24 w-24 rounded-[2rem] border-2 border-stone-700/15 bg-rose-100/80 shadow-[6px_6px_0_rgba(120,90,70,0.08)] sm:block sm:-rotate-12" />
          <div className="absolute -right-4 -bottom-8 hidden h-20 w-20 rounded-[1.8rem] border-2 border-stone-700/15 bg-sky-100/85 shadow-[6px_6px_0_rgba(120,90,70,0.08)] sm:block sm:rotate-12" />

          <div className="relative rounded-[2.5rem] border-2 border-stone-800/15 bg-[#fffaf2]/95 p-8 shadow-[0_18px_50px_rgba(122,84,54,0.16)] backdrop-blur-sm sm:p-10">
            <div className="absolute left-6 top-0 h-10 w-24 -translate-y-1/2 rotate-[-8deg] rounded-sm bg-[#f7d8a8]/80 shadow-sm tape-sway" />
            <div className="absolute right-8 top-3 h-8 w-20 rotate-6 rounded-sm bg-[#fde68a]/75 shadow-sm tape-sway" />

            <div className="space-y-6 text-center">
              {/* 404 数字 */}
              <div className="space-y-2">
                <div
                  className="text-7xl font-bold text-stone-400 float-up"
                  style={{
                    fontFamily:
                      '"Segoe Print","Bradley Hand","Comic Sans MS","Inter Variable",cursive',
                  }}
                >
                  404
                </div>
                <div
                  className="inline-block relative px-4 py-2"
                  style={{
                    transform: "rotate(-3deg)",
                  }}
                >
                  <div className="absolute inset-0 rounded-lg border-2 border-dashed border-stone-800/20" />
                  <p className="relative text-sm tracking-[0.24em] text-stone-500 uppercase">
                    page not found
                  </p>
                </div>
              </div>

              {/* 标题 */}
              <div className="space-y-3">
                <h1
                  className="text-3xl font-semibold text-stone-700 sm:text-4xl"
                  style={{
                    fontFamily:
                      '"Segoe Print","Bradley Hand","Comic Sans MS","Inter Variable",cursive',
                  }}
                >
                  哎呀，页面走丢了！
                </h1>
                <p className="text-sm leading-6 text-stone-600">
                  这个页面就像一张被吹走的便签，消失在了风中。
                  <br />
                  但别担心，我们的首页还在这里等你。
                </p>
              </div>

              {/* 便签效果 */}
              <div className="space-y-4 pt-4">
                <div
                  className="inline-block rounded-full border-2 border-stone-800/10 bg-yellow-100 px-5 py-3 text-sm text-stone-600 shadow-[3px_4px_0_rgba(180,150,80,0.1)] wobble-soft"
                  style={{
                    fontFamily:
                      '"Segoe Print","Bradley Hand","Comic Sans MS","Inter Variable",cursive',
                  }}
                >
                  📝 也许是链接有问题？
                </div>
                <div
                  className="inline-block rounded-full border-2 border-stone-800/10 bg-pink-100 px-5 py-3 text-sm text-stone-600 shadow-[3px_4px_0_rgba(180,120,120,0.1)] wobble-soft"
                  style={{
                    fontFamily:
                      '"Segoe Print","Bradley Hand","Comic Sans MS","Inter Variable",cursive',
                    transform: "rotate(2deg)",
                  }}
                >
                  🔍 或者页面已搬迁？
                </div>
              </div>

              {/* 返回按钮 */}
              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-stone-800 bg-stone-800 px-6 py-3 text-white shadow-[4px_6px_0_rgba(120,90,70,0.15)] transition hover:-translate-y-1 hover:shadow-[6px_8px_0_rgba(120,90,70,0.2)]"
                style={{
                  fontFamily:
                    '"Segoe Print","Bradley Hand","Comic Sans MS","Inter Variable",cursive',
                }}
              >
                <HomeIcon className="h-5 w-5" />
                回到首页
              </Link>

              {/* 装饰文字 */}
              <div className="pt-6 text-xs tracking-wider text-stone-400">
                <p>别放弃，继续探索... ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
