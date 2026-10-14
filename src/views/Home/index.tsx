import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Code, Palette, Layout } from 'lucide-react'
import { config } from '@/config'
import { WeChatButton } from '@/components/WeChatButton'
import { Modal } from '@/components/Modal'
const MP_QRCODE_URL = 'https://cdn.jsdelivr.net/gh/uni-halo/uni-halo-static@main/gh_qrcode.jpg'

const IDCard = () => {
  return (
    <div className='relative group max-w-125 mx-auto'>
      <div className='absolute inset-0 bg-black rounded-[2.5rem] translate-x-6 translate-y-6' />

      <div className='box-border pt-6 pb-4 relative bg-[#E9E9E9] border-8 border-black rounded-[2.5rem] overflow-hidden transition-transform duration-300 shadow-none'>
        {/* 右上角粉色笑脸徽章 (绝对定位) */}
        <div className='hidden absolute top-2 right-2 w-24 h-24 bg-[#f86fa6] rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center z-10 rotate-0 hover:rotate-[5deg] transition-transform'>
          {/* 笑脸 SVG */}
          <svg
            className='w-10 h-10 mb-0.5'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            style={{ color: 'black' }}
          >
            <circle cx='12' cy='12' r='10'></circle>
            <path d='M8 14s1.5 2 4 2 4-2 4-2'></path>
            <line x1='9' y1='9' x2='9.01' y2='9'></line>
            <line x1='15' y1='9' x2='15.01' y2='9'></line>
          </svg>
          <span className='text-[9px] font-black tracking-tighter text-black mt-1'>
            XIAOMO
          </span>
        </div>

        {/* 右上角小程序太阳码 */}
        <div className='absolute top-2 right-2 w-24 h-24 bg-white px-1 overflow-hidden rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center z-10 rotate-0 hover:rotate-[5deg] transition-transform cursor-pointer'>
          <img data-fancybox='gallery' src={MP_QRCODE_URL} alt='小莫唐尼' title='点我查看大图'/>
        </div>

        <div className='relative w-11/12 h-full ml-5 -rotate-1 bg-white rounded-4xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden'>
          {/* 头部绿色区域 */}
          <div className='bg-[#52d171] px-6 pt-8 pb-6 border-b-4 border-black relative'>
            <h1 className='text-3xl font-black tracking-tight text-black leading-none'>
              ID CARD
            </h1>
            <p className='text-[1.35rem] font-black mt-2 text-black tracking-widest'>
              我的个人信息
            </p>
          </div>

          {/* 主体内容区域 */}
          <div className='p-6'>
            {/* 上半部分：头像与信息框网格 */}
            <div className='flex gap-4'>
              {/* 左列：头像与标签 */}
              <div className='w-[45%] flex flex-col gap-3'>
                {/* 头像框 */}
                <div className='bg-[#f0e9dc] w-full aspect-4/5 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col items-center justify-end group'>
                  <img
                    className='w-full h-auto'
                    src={config.author.ipCard}
                    alt={config.author.name}
                  />
                </div>

                {/* 标签行 */}
                <div className='flex gap-2 justify-between'>
                  <div className='bg-[#356be5] text-white text-[10px] font-black px-2 py-1.5 rounded-lg border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] tracking-wider'>
                    本科
                  </div>
                  <div className='bg-[#f86fa6] text-black text-[11px] font-black px-2.5 py-1.5 rounded-lg border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] tracking-widest whitespace-nowrap'>
                    AI+古法码农
                  </div>
                </div>
              </div>

              {/* 右列：三个信息框 */}
              <div className='w-[55%] flex flex-col gap-3'>
                {/* 姓名框 (黄) */}
                <div className='bg-[#fbe370] p-3 pt-2 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                  <div className='text-[10px] font-black text-black mb-1 tracking-wider uppercase'>
                    Name
                  </div>
                  <div className='text-xl font-black text-black tracking-widest'>
                    {config.author.name}
                  </div>
                </div>

                {/* 专业框 (蓝) */}
                <div className='bg-[#d9e4fa] p-3 pt-2 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                  <div className='text-[10px] font-black text-black mb-1 tracking-wider uppercase'>
                    Major
                  </div>
                  <div className='text-[1.15rem] font-black text-black tracking-widest'>
                    {config.author.major}
                  </div>
                </div>

                {/* 工作框 (紫) */}
                <div className='bg-[#e4cbf9] p-3 pt-2 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
                  <div className='text-[10px] font-black text-black mb-1 tracking-wider uppercase'>
                    Job
                  </div>
                  <div className='text-[1.05rem] font-black text-black tracking-wide'>
                    {config.author.job}
                  </div>
                </div>
              </div>
            </div>

            {/* 下半部分：ID 号与条形码 */}
            <div className='mt-6'>
              {/* ID 文本 */}
              <div className='mb-2'>
                <div className='text-[10px] font-black text-black tracking-wider uppercase mb-0.5'>
                  WeChat ID.
                </div>
                <div className='text-lg font-black text-black tracking-wider'>
                  okay_xiaomo
                </div>
              </div>

              {/* 底部交互区：条形码与印章 */}
              <div className='flex justify-between items-end -translate-y-4 gap-6'>
                {/* 条形码框 */}
                <div className='bg-white h-15 w-full rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 flex items-center justify-between'>
                  {/* 纯CSS模拟条形码线条 */}
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-0.5'></div>
                  <div className='bg-black h-full w-1.5'></div>
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-0.5'></div>
                  <div className='bg-black h-full w-2'></div>
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-0.5'></div>
                  <div className='bg-black h-full w-1.5'></div>
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-0.5'></div>
                  <div className='bg-black h-full w-1.5'></div>
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-2'></div>
                  <div className='bg-black h-full w-0.5'></div>
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-1.5'></div>
                  <div className='bg-black h-full w-0.5'></div>
                  <div className='bg-black h-full w-1'></div>
                  <div className='bg-black h-full w-0.5'></div>
                </div>

                {/* 右下角官方印章徽章 */}
                <div className='hidden shrink-0 hover:scale-105 transition-all w-22 h-22 bg-[#f86fa6] rounded-full rotate-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-3'>
                  <div className='w-full h-full bg-[#52d171] rounded-full border-[2.5px] border-black flex flex-col items-center justify-center text-center'>
                    <span className='text-[8px] font-black leading-[1.1] text-black tracking-tighter'>
                      XIAOMO
                      <br />
                      <span>AI + VIBE</span>
                    </span>
                  </div>
                </div>

                <div className='hidden shrink-0 hover:scale-105 transition-all w-24 h-24 bg-white overflow-hidden rounded-full rotate-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-1'>
                  <div className='w-full h-full'>
                    <img
                      className='w-full h-full'
                      data-fancybox='gallery'
                      src={MP_QRCODE_URL}
                      alt='小莫唐尼'
                    />
                  </div>
                </div>

                <div className='flex flex-col shrink-0 hover:scale-105 transition-all w-22 h-22 bg-[#f86fa6] rounded-full rotate-16 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-3'>
                  {/* 笑脸 SVG */}
                  <svg
                    className='w-10 h-10 mb-0.5'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    style={{ color: 'black' }}
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <path d='M8 14s1.5 2 4 2 4-2 4-2'></path>
                    <line x1='9' y1='9' x2='9.01' y2='9'></line>
                    <line x1='15' y1='9' x2='15.01' y2='9'></line>
                  </svg>
                  <span className='text-[9px] font-black tracking-tighter text-black mt-1'>
                    XIAOMO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const handleShowMyStoryModal = () => {
    setModalVisible(true)
  }

  return (
    <>
      <section className='min-h-screen pt-46 pb-20 px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 max-w-7xl mx-auto'>
        <div className='flex-[1.5] space-y-10 text-center lg:text-left pt-6'>
          <button
            className='cursor-pointer inline-block bg-neo-yellow neo-border px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest transform -rotate-2 hover:scale-105 transition-transform'
            title='噢？点击看看会发生什么'
            onClick={handleShowMyStoryModal}
          >
            了解我的故事
          </button>
          <h1 className='text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.4] tracking-tighter'>
            <span className='inline-block mb-4'>
              我是
              <span className='ml-4 text-white bg-neo-pink px-4 py-1 neo-border inline-block transform rotate-1'>
                小莫唐尼
              </span>
            </span>
            <br />
            <span className='inline-block'>
              一名
              <span className='ml-4 text-white bg-neo-blue px-4 py-1 neo-border inline-block transform -rotate-1'>
                {config.author.job}
              </span>
            </span>
          </h1>
          <p className='text-xl lg:text-2xl text-gray-700 max-w-2xl font-medium leading-relaxed mx-auto lg:mx-0'>
            但{''}
            <span
              className='italic text-neo-blue font-bold'
              style={{
                textDecoration: 'underline 2px wavy #4D8BFF',
                textUnderlineOffset: '4px',
              }}
            >
              专注于前端开发
            </span>
            ，致力于为用户提供更好的体验。
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start gap-6 pt-4'>
            <a
              href='https://blog.xiaoxiaomo.cn'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-black text-white neo-button rounded-2xl text-xl px-10 py-4 transform hover:-translate-y-1 transition-transform'
            >
              进入博客
            </a>
            <a
              href='https://uni-halo.ialley.cn/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white neo-button rounded-2xl text-xl px-10 py-4 transform hover:-translate-y-1 transition-transform'
            >
              开源项目
            </a>
            <WeChatButton />
          </div>
        </div>
        <div className='flex-1 w-full max-w-125 relative'>
          <IDCard />
        </div>
      </section>

      <Modal
        visible={modalVisible}
        title='提示'
        render={() => (
          <>
            <h3 className='text-xl text-[#1f2937] mb-3'>
              怎么了，想听听我的故事吗？
            </h3>
            <p className='text-gray-500 text-sm font-[system-ui,sans-serif] leading-relaxed'>
              不要着急哦，因为，我的故事才刚刚开始...
            </p>
          </>
        )}
        okText='知道啦'
        cancelText='好吧好吧'
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      />
    </>
  )
}
export const Services = () => (
  <section className='py-20 px-6 max-w-7xl mx-auto'>
    <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
      <div className='space-y-4'>
        <h2 className='text-5xl font-black'>
          我能如何 <span className='text-neo-pink'>帮助</span> 你
        </h2>
        <p className='text-gray-600 max-w-md'>
          用最简单的方法，解决最复杂的问题
        </p>
      </div>
      <button className='neo-button bg-white rounded-xl flex items-center gap-2'>
        查看所有服务 <ChevronRight size={18} />
      </button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {[
        { title: 'AI入门', icon: <Palette size={40} />, color: 'bg-neo-blue' },
        { title: 'AI学习', icon: <Layout size={40} />, color: 'bg-neo-pink' },
        { title: 'AI使用', icon: <Code size={40} />, color: 'bg-neo-green' },
      ].map((service, i) => (
        <div
          key={i}
          className='neo-card group hover:-translate-y-2 transition-transform'
        >
          <div
            className={`w-20 h-20 ${service.color} neo-border rounded-2xl flex items-center justify-center mb-6`}
          >
            {service.icon}
          </div>
          <h3 className='text-2xl font-black mb-4'>{service.title}</h3>
          <p className='text-gray-600'>
            {i === 0 && '在信息过载的时代，重新理解AI的边界与可能。'}
            {i === 1 && '不追逐工具，而是让工具成为表达与效率的延伸。'}
            {i === 2 && '从使用者走向构建者，慢慢建立自己的方法论。'}
          </p>
        </div>
      ))}
    </div>
  </section>
)

export const Portfolio = () => {
  const navigate = useNavigate()

  const handleToPortfolio = () => {
    navigate('/portfolio')
  }

  return (
    <section className='py-20 px-6 max-w-7xl mx-auto'>
      <div className='neo-card bg-white p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-neo-pink -translate-y-1/2 translate-x-1/2 rotate-45 neo-border' />
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-neo-blue translate-y-1/2 -translate-x-1/2 -rotate-12 neo-border' />

        <div className='flex-1 space-y-6 z-10'>
          <h2 className='text-5xl font-black leading-tight'>
            展示 <br />
            <span className='bg-neo-yellow px-2 neo-border'>我的创作</span> 作品
          </h2>
          <p className='text-gray-600 text-lg'>
            这里汇集了我个人的探索与实践，每件作品都是对思考、技术和可能性的尝试。。
          </p>
          <button
            className='bg-black text-white neo-button rounded-xl'
            onClick={handleToPortfolio}
          >
            查看我的项目
          </button>
        </div>

        <div className='flex-1 w-full lg:w-auto z-10'>
          <div className='neo-card bg-white p-4 space-y-4 border-neo-pink'>
            <div className='h-4 bg-black rounded-full w-3/4' />
            <div className='h-4 bg-gray-200 rounded-full w-full' />
            <div className='bg-neo-yellow h-24 rounded-2xl neo-border' />
            <div className='flex gap-4'>
              <div className='bg-neo-blue h-10 flex-1 rounded-xl neo-border' />
              <div className='bg-neo-green h-10 flex-1 rounded-xl neo-border' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        {/* <Services /> */}
        {/* <Portfolio /> */}
      </main>
    </>
  )
}
