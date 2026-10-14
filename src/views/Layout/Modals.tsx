import { useState } from 'react'
import { NoticeModal } from '@/components/NoticeModal'
// import { QuickNotice } from '@/components/QuickNotice'
const coverImage = 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/images/mp.png'

export const Modals = () => {
  const [noticeModalVisible, setNoticeModalVisible] = useState(true)

  return (
    <>
      {/* 通知弹窗 */}
      {noticeModalVisible && (
        <NoticeModal
          title={
            <span className='text-2xl'>
              个人小程序{' '}
              <span className='inline-block transform -translate-y-[4px] bg-[#4d90fe] text-xl text-white px-2 py-0.5 border-[3px] border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
                v3.x 版
              </span>{' '}
              震撼上线！
            </span>
          }
          date='2026.10.14'
          content={
            <span>
              经历了多天的爆肝开发，全新的个人小程序和大家见面了。直接对UI进行重构，使用免费开源的{' '}
              <span className='text-xl text-amber-500 font-bold'>【UniHalo v3.x】</span>{' '}
              部署，欢迎来体验！
            </span>
          }
          imageContent={coverImage}
          onViewDetails={() => setNoticeModalVisible(false)}
        />
      )}

      {/* 固定面板 */}

      {/* 小通知面板 */}
      {/* <QuickNotice
        title='通知公告'
        content='最新通知，及时更新'
        onButtonClick={() => setNoticeModalVisible(true)}
      /> */}
    </>
  )
}
