import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BarProps {
  isCollapsed: boolean
  toggleCollapse: () => void
  children: React.ReactNode
}

export function Bar({ isCollapsed, toggleCollapse, children }: BarProps) {
  return (
    <div
      className={`sidebar ${isCollapsed ? 'w-0 overflow-hidden p-0' : 'w-[19rem]'}`}
    >
      <div className="flex h-full flex-col overflow-hidden">
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
      <Button
        onClick={toggleCollapse}
        variant="icon"
        size="icon"
        className={`fixed top-11 z-30 rounded-full border p-1 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'left-4' : 'left-[18rem]'
        }`}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
