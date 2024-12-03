import { FC } from 'react'
import { Navbar } from '@/components/Navbar/Navbar'
import { ImportComponent } from '@/components/ImportComponent/ImportComponent'
import UserNav from '@/components/UserNav/UserNav'

interface HeaderProps {
  isCollapsed: boolean
  navItems: { [key: string]: string }
  userData: { [key: string]: string }
}

export const Header: FC<HeaderProps> = ({
  isCollapsed,
  navItems,
  userData,
}) => {
  return (
    <header
      className={`top-0 z-10 bg-white shadow transition-all duration-300 ease-in-out`}
    >
      <div
        className={`${isCollapsed ? 'pl-20' : 'pl-4'} flex items-center justify-between pb-5 pt-10`}
        style={{ transition: 'padding-left 0.3s ease-in-out' }}
      >
        <Navbar navItems={navItems} />
        <div className="flex gap-10 pr-14">
          <ImportComponent />
          <UserNav userData={userData} />
        </div>
      </div>
    </header>
  )
}
