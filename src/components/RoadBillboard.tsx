import clsx from 'clsx'
import React from 'react'

interface RoadBillboardProps {
  /** 路牌标题 */
  title: string | React.ReactNode
  /** 路牌内容 */
  content: string | React.ReactNode
  /** 标签文本，默认"# NEW FEATURE" */
  tag?: string | React.ReactNode
  /** 图片URL，可选 */
  imageUrl?: string | React.ReactNode
  /** 点击事件处理函数 */
  onClick?: () => void
}

/**
 * 路牌组件
 * 基于Neo-brutalist风格设计，提供手举牌式的公告展示
 */
export const RoadBillboard: React.FC<RoadBillboardProps> = ({
  title,
  content,
  tag = '微信公众号',
  imageUrl,
}) => {
  return (
    <div
      className={clsx(
        'fixed -bottom-22 left-4 hidden flex flex-col items-center group transition-transform duration-300 ease-out hover:-translate-y-4',
        '2xl:flex xl:hidden',
      )}
    >
      {/* 顶部：内容展板 (The Board) */}
      <div className='relative z-10 w-64 bg-white border-[4px] border-black rounded-3xl p-5 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300'>
        {/* 装饰性元素：固定胶带 */}
        <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#ff6b9e] border-[3px] border-black rotate-[4deg] text-xs text-center'>
          {' '}
          公告{' '}
        </div>

        {/* 图文区：图片占位 */}
        <div className='w-full bg-[#06b6d4] border-[3px] border-black rounded-xl mb-4 overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center'>
          {/* 内部网格线装饰 */}
          <div
            className='absolute inset-0 opacity-20'
            style={{
              backgroundImage:
                'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px',
            }}
          ></div>

          {typeof imageUrl === 'string' ? (
            <img
              data-fancybox='gallery'
              src={imageUrl}
              className='w-full h-full object-cover z-10 cursor-pointer'
              alt='路牌'
              title='点我查看大图'
            />
          ) : (
            /* 模拟图片内容的 Icon */
            <svg
              className='w-14 h-14 text-black z-10 group-hover:scale-110 transition-transform'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
              ></path>
            </svg>
          )}
        </div>

        {/* 图文区：文本内容 */}
        <div className='px-2 text-center'>
          {/* 标签 */}
          <div className='inline-block bg-[#fcdc4d] border-[2.5px] border-black px-3 py-0.5 rounded-full text-xs font-black mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'>
            {tag}
          </div>

          <h2 className='text-2xl font-black text-black mb-2 tracking-wide'>
            {title}
          </h2>

          <p className='text-sm font-bold text-gray-600 leading-relaxed'>
            {content}
          </p>
        </div>
      </div>

      {/* 底部：支撑杆/手柄 (The Pole) */}
      <div
        className={clsx(
          'relative z-0 w-8 h-[220px] bg-[#d97706] border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-b-full -mt-4',
        )}
      >
        {/* 棍子上的木纹高光点缀 */}
        <div className='absolute top-8 left-1.5 w-1.5 h-16 bg-white opacity-30 rounded-full'></div>
        {/* 模拟持握区域的防滑胶条 */}
        <div className='absolute bottom-6 w-full h-[60px] border-t-[4px] border-b-[4px] border-black bg-[#475569] flex flex-col justify-evenly'>
          <div className='w-full h-1 bg-black opacity-40'></div>
          <div className='w-full h-1 bg-black opacity-40'></div>
          <div className='w-full h-1 bg-black opacity-40'></div>
        </div>
      </div>
    </div>
  )
}
