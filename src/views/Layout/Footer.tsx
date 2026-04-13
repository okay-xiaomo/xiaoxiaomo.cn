import { config } from "@/config";
import gaImage from "@/assets/icons/logo-ga.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-8 border-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center border-2 shadow-[1px_1px_0px_#000000] border-black hover:scale-105 hover:-rotate-12 transition-all">
            <img
              className="w-full h-full rounded-full object-cover"
              src={config.author.avatar}
              alt={config.author.name}
            />
          </div>
          <span
            className="text-2xl font-black"
            style={{
              textDecoration: "underline 2px wavy #4D8BFF",
              textUnderlineOffset: "4px",
            }}
          >
            {config.site.title}
          </span>
        </div>

        <div className="flex gap-8 font-black uppercase text-sm">
          <a
            href="https://www.xiaoxiaomo.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neo-pink transition-colors"
          >
            我的主页
          </a>
          <a
            href="https://blog.xiaoxiaomo.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-500 transition-colors"
          >
            个人博客
          </a>
          <a
            href="https://uni-halo.925i.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neo-blue transition-colors"
          >
            UniHalo
          </a>

          <a
            href={`mailto:${config.author.email}`}
            className="hover:text-neo-green transition-colors uppercase"
          >
            联系我（邮件）
          </a>
        </div>

        <div className="text-gray-600 font-bold text-sm sm:text-center">
          <div>
            © {currentYear} {config.author.name} 保留所有权利。
          </div>
          <div className="mt-1 flex items-center font-normal text-xs lg:flex-row sm:flex-col">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              桂ICP备17000465号-4
            </a>
            <span className="lg:inline-block sm:hidden">丨</span>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002007558"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img className="w-4 h-4 mr-1" src={gaImage} alt="备案" />{" "}
              粤公网安备44030002007558号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
