import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { articles } from "@/data/articles";

export const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage)); 
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <div className="space-y-6">
        <h2 className="text-7xl font-black flex items-center gap-4">
          我的
          <span className="bg-neo-blue text-white px-6 py-2 rounded-4xl neo-border inline-block">
            文章
          </span>
        </h2>
        <p className="text-gray-600 text-xl font-medium">
          . 关于 AI、大模型和个人成长感悟的随笔
        </p>
        <a
          href="https://mp.weixin.qq.com/s/example1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white neo-border px-6 py-2 rounded-full font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
        >
          Meteor导航站： <span className="text-gray-500">流星成长故事</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white neo-border rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative h-64 overflow-hidden border-b-4 border-black">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-neo-yellow neo-border px-3 py-1 rounded-lg font-black text-xs">
                {article.date}
              </div>
            </div>
            <div className="p-8 space-y-4">
              <div className="text-xs font-bold text-gray-400 flex items-center gap-2">
                <span>{article.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-xl font-black leading-tight group-hover:text-neo-blue transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {article.excerpt}
              </p>
              <div className="pt-2 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                阅读全文 <span className="text-lg">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="neo-button rounded-xl bg-white disabled:opacity-40 disabled:cursor-not-allowed"
        >
          上一页
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === currentPage;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`neo-button rounded-xl min-w-12 ${isActive ? "bg-black text-white" : "bg-white"}`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="neo-button rounded-xl bg-white disabled:opacity-40 disabled:cursor-not-allowed"
        >
          下一页
        </button>
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={() =>
            window.open("https://mp.weixin.qq.com/s/example1", "_blank")
          }
          className="bg-black text-white neo-button rounded-2xl text-xl px-12 py-5 flex items-center gap-3"
        >
          在微信公众号查看更多文章 <ChevronRight size={24} />
        </button>
      </div>

      <div className="bg-neo-yellow neo-border rounded-[3rem] p-16 text-center space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-4">
          <h3 className="text-4xl font-black">订阅我的研究动态</h3>
          <p className="text-black/70 font-bold">
            关注我的微信公众号「Meteor导航站」，了解我的成长故事 | 获取最新 AI
            动态。
          </p>
        </div>
        <div className="bg-white neo-border w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <img
            src="/img/qrcode.jpg"
            alt="微信公众号二维码"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
