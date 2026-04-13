import React from 'react'
import clsx from 'clsx'

interface QuickNoticeProps {
  /** 公告标题 */
  title: string | React.ReactNode
  /** 公告内容 */
  content: string | React.ReactNode
  /** 标签文本，默认"HOT UPDATE" */
  tag?: string
  /** 图片URL，可选 */
  imageUrl?: string
  /** 按钮文本，默认"立刻升级" */
  buttonText?: string
  /** 按钮点击事件 */
  onButtonClick: () => void
}

/**
 * 快速公告卡片组件
 * 基于Neo-brutalist风格设计，提供小巧紧凑的公告展示
 */
export const QuickNotice: React.FC<QuickNoticeProps> = ({
  title,
  content,
  tag = 'HOT UPDATE',
  imageUrl,
  buttonText = '立刻升级',
  onButtonClick,
}) => {
  return (
    <>
      <div
        className={clsx(
          'fixed top-0 left-6 z-10 w-full max-w-[320px] bg-[#fff9c4] border-[4px] border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl rotate-2 hover:-rotate-1 origin-top transition-transform duration-300 ease-in-out z-10',
        )}
      >
        {/* 图钉设计 (Pushpin) */}
        <div className='absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20'>
          {/* 图钉主体 */}
          <div className='w-10 h-10 bg-[#ff4a4a] rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative flex items-center justify-center z-10 cursor-pointer hover:bg-[#ff2020] transition-colors'>
            {/* 图钉左上角的高光 (反光) */}
            <div className='absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-white rounded-full opacity-80'></div>
            {/* 图钉中心的凹陷感圆点 */}
            <div className='w-2 h-2 bg-black rounded-full opacity-20'></div>
          </div>
          {/* 图钉的针刺穿纸张留下的"洞/阴影" */}
          <div className='w-2 h-2 bg-black rounded-full -mt-2 opacity-80'></div>
        </div>

        {/* 顶部标签 */}
        <div className='mt-4 mb-3 flex justify-center'>
          <span className='bg-[#a855f7] text-white px-3 py-1 border-[2.5px] border-black rounded-md text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]'>
            {tag}
          </span>
        </div>

        {/* 紧凑型图文区：图片占位 */}
        <div className='w-full aspect-[4/3] bg-[#06b6d4] border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group mb-4 flex items-center justify-center cursor-pointer'>
          {imageUrl ? (
            <img
              src={imageUrl}
              className='w-full h-full object-cover'
              alt='公告配图'
            />
          ) : (
            <div className='text-center group-hover:scale-110 transition-transform duration-200'>
              <svg
                className='w-10 h-10 mx-auto text-black'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                ></path>
              </svg>
            </div>
          )}
        </div>

        {/* 文本内容区 */}
        <div className='text-center mb-4'>
          <h2 className='text-xl font-black mb-2 text-black leading-tight'>
            {title}
          </h2>
          <p className='text-sm font-bold text-gray-700 leading-snug'>
            {content}
          </p>
        </div>

        {/* 底部：小巧的 CTA 按钮 */}
        <button
          className='w-full bg-[#fcdc4d] text-black border-[3px] border-black rounded-lg py-2.5 font-black text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-[#fbbf24] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2'
          onClick={onButtonClick}
        >
          {buttonText}
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            ></path>
          </svg>
        </button>

        {/* 装饰：右下角小折角效果的替代方案（用几条横线模拟纸张质感） */}
        <div className='absolute bottom-2 right-2 flex flex-col gap-1 opacity-20'>
          <div className='w-4 h-[2px] bg-black'></div>
          <div className='w-2 h-[2px] bg-black ml-auto'></div>
        </div>
      </div>
    </>
  )
}
