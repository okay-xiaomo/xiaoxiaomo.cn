import { motion } from "motion/react";
import { Contact, Globe } from "lucide-react";
import { config } from "@/config";
import { skills, workExperiences } from "@/data/about";
import { WeChatButton } from "@/components/WeChatButton";

export const CTA = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="bg-neo-yellow neo-border neo-shadow rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
      <div className="space-y-4 relative z-10">
        <h2 className="text-5xl lg:text-7xl font-black italic uppercase leading-none tracking-tighter">
          时间不在于你拥有多少
          <br />
          而在于你如何使用。
        </h2>
        <p className="text-xl font-bold max-w-2xl mx-auto">
          目前开放合作，感兴趣的同学与我交流联系。
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 relative z-10">
        <button
          onClick={() => window.open("https://github.com/lx-Meteors", "_blank")}
          className="bg-black text-white neo-button rounded-2xl px-8 py-4 text-lg"
        >
          取得联系
        </button>
        <button
          onClick={() => window.open("https://github.com/lx-Meteors", "_blank")}
          className="bg-white neo-button rounded-2xl p-4"
        >
          <Globe size={24} />
        </button>
      </div>
    </div>
  </section>
);

export const About = () => (
  <div className="space-y-0">
    <section className="pt-50 pb-24 px-6 max-w-7xl mx-auto space-y-32">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-6xl font-black italic leading-22">
            我是{" "}
            <span
              className="text-neo-blue"
              style={{
                textDecoration: "underline 2px wavy #4D8BFF",
                textUnderlineOffset: "4px",
              }}
            >
              {config.author.name}
            </span>
            ，<br />
            <span>一名 {config.author.job}，</span>
            <br />
            但专注于前端开发。
            <br />
            <span className="text-3xl">
              拥抱 AI+ Agent / Vibe Coding 编程。
            </span>
          </h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>你好，我是{config.author.name}。</p>
            <p>目前，现在正在找寻更好的发展机会。</p>
            <p>我的个人邮箱：{config.author.email}</p>
          </div>
          <div className="flex gap-4">
            <a
              href={`mailto:${config.author.email}`}
              className="bg-black text-white neo-button rounded-xl flex items-center gap-2"
            >
              <Contact size={18} /> 联系我
            </a>
            <WeChatButton size="small" />
            <a
              href="https://x.com/okay_xiaomo"
              target="_blank"
              className="bg-white neo-button rounded-xl"
            >
              Twitter
            </a>
            <a
              href="https://github.com/okay-xiaomo"
              target="_blank"
              className="bg-white neo-button rounded-xl"
            >
              Github
            </a>
          </div>
        </div>
        <div className="w-2/5">
          <div className="neo-card p-0 overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-4/5 ">
              <img
                src={config.author.ipCard}
                alt={config.author.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-4xl font-black text-center uppercase tracking-tighter italic">
          我的核心技能
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="neo-card">
              <div className="flex justify-between font-black mb-4">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-6 bg-white neo-border rounded-full overflow-hidden p-1">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${skill.color} neo-border border-0 rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-4xl font-black uppercase italic">个人历程</h3>
        <div className="ml-4 relative pl-8 border-l-8 border-black space-y-12">
          {workExperiences.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-13 top-4 w-8 h-8 bg-black rounded-full neo-border border-white" />
              <div className="neo-card">
                <span className="text-neo-pink font-bold">{item.date}</span>
                <h4 className="text-2xl font-black mt-2">{item.role}</h4>
                <p className="font-bold text-gray-500 mb-4">{item.company}</p>
                <p className="text-gray-600"> {item.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <CTA /> */}
  </div>
);
