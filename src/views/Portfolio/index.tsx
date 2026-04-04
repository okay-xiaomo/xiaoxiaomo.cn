import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";
import clsx from "clsx";
import { projects, ProjectCategory, type Project } from "@/data/project";
import { Modal } from "@/components/Modal";

export const Portfolio = () => {
  const [filter, setFilter] = useState(ProjectCategory.All);
  const [modalVisible, setModalVisible] = useState(false);

  const categories = [
    ProjectCategory.All,
    ProjectCategory.Website,
    ProjectCategory.MiniProgram,
    ProjectCategory.DesktopApp,
    ProjectCategory.MobileApp,
    ProjectCategory.VitePlugin,
    ProjectCategory.BrowserExtension,
    ProjectCategory.VSCodeExtension,
    ProjectCategory.Other,
  ];

  const filteredProjects =
    filter === ProjectCategory.All
      ? projects
      : projects.filter((p) => p.category === filter);

  const handleClick = (project: Project) => {
    if (!project.href || project.href == "#") {
      setModalVisible(true);
      return;
    }
    window.open(project.href, "_blank");
  };

  return (
    <>
      <section className="pt-50 pb-26 px-6 max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-6xl font-black italic">
            我的{" "}
            <span
              className="text-neo-pink"
              style={{
                textDecoration: "underline 2px wavy #FF6b9c",
                textUnderlineOffset: "4px",
              }}
            >
              项目作品
            </span>
          </h2>
          <p className="text-gray-600">
            这里展示的是我自己的一些探索与创作，每一件作品都是思考、尝试与实践的结果。
          </p>
          <p className="text-gray-600">
            希望通过它们，让你看到我在技术、设计与思维上的一些尝试，同时也期待与志同道合的人交流、碰撞更多的可能。
          </p>
        </div>

        <div className="flex flex-wrap gap-4 border-b-4 border-black pb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`neo-button rounded-full text-sm ${filter === c ? "bg-black text-white" : "bg-white"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div
          className={clsx(
            "grid gap-8",
            filteredProjects.length > 0
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "",
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={project.id}
                  className="neo-card p-0 overflow-hidden group block cursor-pointer"
                  onClick={() => handleClick(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-x-2">
                      {/* 分类 */}
                      <div className="bg-white neo-border px-3 py-1 rounded-lg font-bold text-[10px] uppercase">
                        {project.category}
                      </div>
                      {/* 标签 */}
                      {project.tags.map((tag) => (
                        <div key={tag} className="bg-green-400 neo-border px-3 py-1 rounded-lg font-bold text-[10px] uppercase">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex justify-between items-center bg-white border-t-4 border-black">
                    <h3 className="text-xl font-black">{project.name}</h3>
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center neo-border border-white group-hover:bg-neo-pink transition-colors">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <section className="w-full">
                <div className="border-4 rounded-2xl bg-white p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neo-pink -translate-y-1/2 translate-x-1/2 rotate-45 neo-border" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-neo-blue translate-y-1/2 -translate-x-1/2 -rotate-12 neo-border" />

                  <div className="flex-1 space-y-6 z-10">
                    <h2 className="text-3xl font-black leading-tight">
                      <span className="bg-neo-yellow px-2 neo-border rounded-xl">
                        分类：{filter}
                      </span>{" "}
                      暂无作品
                    </h2>
                    <p className="text-gray-600 text-lg">
                      哎呀，暂时还没有符合条件的作品呢！不过别担心，我一直在努力创作新的内容，敬请期待！😊
                    </p>
                  </div>

                  <div className="flex-1 w-full lg:w-auto z-10">
                    <div className="neo-card bg-white p-4 space-y-4 border-neo-pink">
                      <div className="h-4 bg-black rounded-full w-3/4" />
                      <div className="h-4 bg-gray-200 rounded-full w-full" />
                      <div className="bg-neo-yellow h-24 rounded-2xl neo-border" />
                      <div className="flex gap-4">
                        <div className="bg-neo-blue h-10 flex-1 rounded-xl neo-border" />
                        <div className="bg-neo-green h-10 flex-1 rounded-xl neo-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Modal
        visible={modalVisible}
        title="提示"
        render={() => (
          <>
            <h3 className="text-xl text-[#1f2937] mb-3">
              嗯哼？你是想要这个吗？
            </h3>
            <p className="text-gray-500 text-sm font-[system-ui,sans-serif] leading-relaxed">
              哎呀，这个还没有开源，等以后再看看呗~
            </p>
          </>
        )}
        okText="知道啦"
        cancelText="好吧好吧"
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
};
