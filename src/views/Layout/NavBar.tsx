import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { config, navBars } from "@/config";
import type { NavBar } from "@/types/layout";
import clsx from "clsx";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeNavBar = useMemo(() => {
    return navBars.find((n) => n.href === location.pathname) ?? navBars[0];
  }, [location.pathname]);

  const filteredNavBars = navBars.filter((navBar) => navBar.visible);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeNavBar]);

  const handleNavBarClick = (navBar: NavBar) => {
    if (navBar.type === "href") {
      window.open(navBar.href, "_blank");
      return;
    }
    navigate(navBar.href);
  };

  return (
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
              {navBar.title}
              {activeNavBar.id === navBar.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-neo-blue rounded-full"
                />
              )}
            </button>
          ))}
        </div>
        <a
          href={`mailto:${config.author.email}`}
          className="bg-neo-yellow border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full font-black text-sm py-2 px-8 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          联系我
        </a>
      </div>
    </nav>
  );
};
