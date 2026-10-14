import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import type { NavBar as INavBar } from '@/types/layout'
import { useFancybox } from '@/hooks/useFancybox'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { Pet } from './Pet'
import { useWebUpdate } from '@/hooks/useUpdate'
import { UpdateModal } from '@/components/UpdateModal'
import { RoadBillboard } from '@/components/RoadBillboard'
import { Modals } from './Modals'
const WxQrcode = 'https://gcore.jsdelivr.net/gh/uni-halo/uni-halo-static@main/images/mp.png'

export const Layout = () => {
  const location = useLocation()
  const [hasNewVersion, refresh, versionInfo, updateInfo, setHasNewVersion] =
    useWebUpdate()

  const onNavBarChange = (navBar: INavBar) => {
    if (navBar.id === 'update') {
      setHasNewVersion(true)
    }
  }

  const [fancyboxRef] = useFancybox({})

  return (
    <main ref={fancyboxRef}>
      <div className='w-full min-h-screen selection:bg-neo-yellow selection:text-black'>
        {/* 导航栏 */}
        <NavBar onChange={onNavBarChange} />

        {/* 子路由渲染位置 */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        {/* 页脚 */}
        <Footer />

        {/* 宠物 */}
        <Pet />
      </div>

      {/* 路牌 */}
      <RoadBillboard
        title=''
        content={
          <>
            新版UI已上线，使用{' '}
            <span className='font-bold text-amber-500'>【UniHalo v3.x】</span>{' '}
            免费开源项目部署，欢迎体验。
          </>
        }
        tag='微信小程序：小莫唐尼'
        imageUrl={WxQrcode}
      />

      {/* 更新弹窗 */}
      {hasNewVersion && (
        <UpdateModal
          updateInfo={updateInfo}
          versionInfo={versionInfo}
          title={`发现新版本 v ${updateInfo?.version ?? '1.0.0'}`}
          onCancel={() => setHasNewVersion(false)}
          onOk={() => refresh()}
        />
      )}

      {/* 其他弹窗 */}
      <Modals />
    </main>
  )
}
