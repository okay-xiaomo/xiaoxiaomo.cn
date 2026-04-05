import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { config, navBars } from "@/config";
import type { NavBar as INavBar } from "@/types/layout";
import clsx from "clsx";

interface NavBarProps {
  onChange: (navBar: INavBar) => void;
}

export const NavBar = (props: NavBarProps) => {
  const { onChange } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const activeNavBar = useMemo(() => {
    return navBars.find((n) => n.href === location.pathname) ?? navBars[0];
  }, [location.pathname]);

  onChange(activeNavBar);

  const filteredNavBars = navBars.filter((navBar) => navBar.visible);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeNavBar]);

  const handleNavBarClick = (navBar: INavBar) => {
    if (navBar.type === "href") {
      window.open(navBar.href, "_blank");
      return;
    }
    onChange(navBar);
    navigate(navBar.href);
  };

  return (
    <>
      <style>
        {`
         /* 具体的画笔描边动画 - 调慢到 1s */
        @keyframes draw {
            from { stroke-dashoffset: 400; }
            to { stroke-dashoffset: 0; }
        }

        .scribble-path {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: draw 1s ease-in-out forwards;
        }

        /* 激活时的轻微出现效果 */
        .active-scribble {
            animation: scribble-appear 0.3s ease-out forwards;
            transform-origin: center;
        }
        `}
      </style>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-full px-10 py-4 flex items-center justify-between">
          <div className="flex gap-8">
            {filteredNavBars.map((navBar) => (
              <button
                key={navBar.id}
                onClick={() => handleNavBarClick(navBar)}
                title={navBar.title}
                className={clsx(
                  "cursor-pointer font-black text-base transition-colors relative ",
                  activeNavBar.id === navBar.id
                    ? "text-neo-blue"
                    : "text-black hover:text-neo-blue",
                )}
              >
                {/* <!-- 手绘圈 SVG --> */}
                {/* <!-- 调整了宽高 calc 以及 top/left 偏移，使包裹更紧凑 --> */}
                {activeNavBar.id === navBar.id && (
                  <svg
                    className="absolute w-[calc(100%+20px)] h-[calc(100%+10px)] -left-2.5 -top-1.5 pointer-events-none active-scribble"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                  >
                    {/* <!-- 非闭合路径： 从 M18,8 开始，绕一圈在 M24,12 附近结束，留出缺口  --> */}
                    <path
                      className="scribble-path"
                      d="M18,8 
                                   C40,2 85,2 95,15 
                                   C105,32 70,38 45,38 
                                   C15,38 2,30 5,18 
                                   C6,14 12,11 24,12"
                      fill="none"
                      stroke="#5B92FF"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
                <span className="inline-block transform origin-bottom-left transition-all hover:-rotate-6">
                  {" "}
                  {navBar.title}
                </span>

                {/* 旧版激活效果，已改为上方的手绘圈动画 */}
                {/* {activeNavBar.id === navBar.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-neo-blue rounded-full"
                  />
                )} */}
              </button>
            ))}
          </div>
          <a
            href={`mailto:${config.author.email}`}
            className="cursor-pointer bg-neo-yellow border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full font-black text-sm py-2 px-8 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            title="嘿嘿，点击这里可以给我发邮件"
          >
            联系我
          </a>
        </div>
      </nav>
    </>
  );
};
