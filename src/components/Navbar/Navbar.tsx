import { Link } from '@tanstack/react-router'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC } from 'react'

interface NavbarProps {
  navItems: { [key: string]: string }
}

export const Navbar: FC<NavbarProps> = ({ navItems }) => {
  return (
    <nav className={`w-[28rem] transition-all duration-300 ease-in-out`}>
      <Tabs defaultValue="" className="w-full">
        <TabsList className="flex-start w-full">
          {Object.entries(navItems).map(([key, value]) => (
            <TabsTrigger key={key} value={key}>
              <Link to={`/${key}`}>{value}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  )
}
