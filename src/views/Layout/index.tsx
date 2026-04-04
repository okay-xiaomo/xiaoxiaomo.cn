import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Footer } from "./Footer";
import { Navbar } from "./NavBar";
import { Pet } from "./Pet";

export const Layout = () => {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen selection:bg-neo-yellow selection:text-black">
      {/* 导航栏 */}
      <Navbar />

      {/* 子路由渲染位置 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      {/* 页脚 */}
      <Footer />

      {/* 宠物 */}
      <Pet />
    </div>
  );
};
