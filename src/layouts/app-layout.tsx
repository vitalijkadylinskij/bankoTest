import { SidebarModule } from '@/modules/SidebarModule/SidebarModule'
import { Outlet } from '@tanstack/react-router'
import React, { useState } from 'react'
import { HeaderModule } from '@/modules/HeaderModule/HeaderModule'

export const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <div
      className={`flex min-h-screen w-full overflow-hidden ${isDialogOpen ? 'blurred' : ''}`}
    >
      <SidebarModule
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <div
        className={`flex flex-grow flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? 'ml-0' : 'ml-[19rem]'
        }`}
      >
        <main className="flex-grow overflow-auto">
          <HeaderModule isCollapsed={isCollapsed} />
          <div
            className={`mx-auto ${isCollapsed ? 'max-w-[95rem] p-12' : 'max-w-[76rem] p-4'}`}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
