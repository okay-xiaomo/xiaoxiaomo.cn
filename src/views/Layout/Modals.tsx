import { useState } from 'react'
import { NoticeModal } from '@/components/NoticeModal'
import coverImage from '@/assets/notices/mp-qrcode.jpg'

export const Modals = () => {
  const [noticeModalVisible, setNoticeModalVisible] = useState(true)

  return (
    <>
      {/* 弹窗 */}
      {noticeModalVisible && (
        <NoticeModal
          title={
            <span className='text-2xl'>
              个人小程序{' '}
              <span className='bg-[#4d90fe] text-xl text-white px-2 py-0.5 border-[3px] border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
                V2.0 版
              </span>{' '}
              震撼上线！
            </span>
          }
          date='2026.04.13'
          content={
            <span>
              经历了3天的爆肝开发，全新的个人小程序和大家见面了。直接对UI进行重构，同时还上线了最近很火的{' '}
              <span className='text-xl text-amber-400 font-bold'>【SBTI】</span>{' '}
              人格测试，欢迎来体验！
            </span>
          }
          imageContent={coverImage}
          onViewDetails={() => setNoticeModalVisible(false)}
        />
      )}
    </>
  )
}
