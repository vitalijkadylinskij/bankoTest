import { Header } from '@/components/Header/Header'
import { FC } from 'react'
import { navItems, userData } from './index'

interface HeaderProps {
  isCollapsed: boolean
}

export const HeaderModule: FC<HeaderProps> = ({ isCollapsed }) => {
  return (
    <Header isCollapsed={isCollapsed} navItems={navItems} userData={userData} />
  )
}
