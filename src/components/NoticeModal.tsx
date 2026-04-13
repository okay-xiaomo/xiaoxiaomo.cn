import clsx from 'clsx'
import React from 'react'

interface NoticeModalProps {
  /** 公告标题 */
  title: string | React.ReactNode
  /** 公告日期 */
  date: string
  /** 公告内容 */
  content: string | React.ReactNode
  /** 图片内容，可选 */
  imageContent?: string | React.ReactNode
  /** 查看详情按钮点击事件 */
  onViewDetails?: () => void
  /** 关闭按钮点击事件 */
  onClose?: () => void
}

/**
 * 公告模态框组件
 * 基于Neo-brutalist风格设计，提供醒目的公告展示
 */
export const NoticeModal: React.FC<NoticeModalProps> = ({
  title,
  date,
  content,
  imageContent,
  onViewDetails,
  onClose,
}) => {
  return (
    <>
      <div className='fixed inset-0 z-90 w-screen h-screen bg-black/50 backdrop-blur-md'></div>
      <div
        className={clsx(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-full max-w-lg bg-white border-[4px] border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300',
        )}
      >
        {/* 装饰性元素：顶部的胶带贴纸 */}
        <div className='absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#ff6b9e] border-[3px] border-black rotate-[-3deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center z-10'>
          <span className='font-black tracking-widest text-white text-sm'>
            通知公告
          </span>
        </div>

        {/* 内部内容区域 */}
        <div className='p-6 sm:p-10 pt-12'>
          {/* 头部：标签与日期 */}
          <div className='flex justify-between items-center mb-6'>
            <div className='bg-[#fcdc4d] border-[3px] border-black px-4 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-sm font-black flex items-center gap-2'>
              <span className='w-2.5 h-2.5 rounded-full bg-black animate-pulse'></span>
              最新发布
            </div>
            <div className='font-bold text-black border-b-[3px] border-black border-dashed pb-1'>
              {date}
            </div>
          </div>

          {/* 图文区：图片占位/容器  aspect-[16/9] */}
          <div className='w-full bg-white border-[4px] border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group mb-8 flex items-center justify-center'>
            {typeof imageContent === 'string' ? (
              <img
                src={imageContent}
                className='w-full h-full object-contain'
                alt='公告配图'
              />
            ) : (
              imageContent
            )}
          </div>

          {/* 图文区：文本内容 */}
          <div className='mb-8'>
            <h1 className='text-3xl sm:text-4xl font-black mb-4 leading-tight'>
              {title}
            </h1>

            <p className='text-lg font-bold text-gray-700 leading-relaxed mb-4'>
              {content}
            </p>

            {/* 模仿原图底部波浪线的点缀 */}
            <p className='text-base font-bold text-gray-600 underline decoration-wavy decoration-[#4d90fe] decoration-2 underline-offset-4'>
              微信小程序搜索🔍{' '}
              <span className='mx-1 font-bold text-green-500 text-lg'>
                小莫唐尼
              </span>{' '}
              快来体验全新的功能吧！
            </p>
          </div>

          {/* 底部：行动号召 (CTA) 按钮组 */}
          <div className='flex flex-wrap gap-4 items-center'>
            {/* 主按钮 */}
            {onViewDetails && (
              <button
                className='bg-black text-white border-[3px] border-black rounded-xl px-8 py-2.5 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition-all hover:bg-gray-800 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] active:translate-y-1 active:shadow-none'
                onClick={onViewDetails}
              >
                知道啦
              </button>
            )}

            {/* 次按钮 (参考微信按钮风格) */}
            {onClose && (
              <button
                className='bg-[#2cd06b] text-black border-[3px] border-black rounded-xl px-6 py-2.5 font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none flex items-center gap-2'
                onClick={onClose}
              >
                关闭
              </button>
            )}
          </div>
        </div>

        {/* 装饰性笑脸图标，呼应原图右侧的徽章 */}
        <div className='absolute -right-6 -bottom-6 w-16 h-16 bg-[#ff6b9e] rounded-full border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center z-10 rotate-12 hover:rotate-45 transition-transform duration-300'>
          <svg
            className='w-8 h-8 text-black'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}
