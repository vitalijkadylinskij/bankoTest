import { FC, ReactNode } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

type orientation = 'horizontal' | 'vertical'

interface ContainerComponentProps {
  title?: string
  children: ReactNode
  withBg: boolean
}

const ContainerComponent: FC<ContainerComponentProps> = ({
  title,
  children,
  withBg,
}) => {
  return (
    <div
      className={
        withBg ? 'h-full w-full rounded-lg border bg-grey-300/40 p-1.5' : ''
      }
    >
      {title ? (
        <div className="my-2 ml-4 flex items-center">
          <div className="text-xl font-bold leading-24 text-black-800">
            {title}
          </div>
        </div>
      ) : (
        ''
      )}
      {children}
    </div>
  )
}

interface ContainerHeaderProps {
  children: ReactNode
}

const ContainerHeader: FC<ContainerHeaderProps> = ({ children }) => (
  <div className="my-1 ml-4 flex">{children}</div>
)

interface ContainerBodyProps {
  isScrolling: boolean
  orientation?: orientation
  children: ReactNode
}

const ContainerBody: FC<ContainerBodyProps> = ({
  isScrolling,
  orientation,
  children,
}) => {
  return isScrolling ? (
    <ScrollArea className="whitespace-nowrap rounded-lg border bg-white">
      {children}
      <ScrollBar orientation={orientation} />
    </ScrollArea>
  ) : (
    <div className="whitespace-nowrap rounded-lg border bg-white">
      {children}
    </div>
  )
}

export { ContainerComponent, ContainerHeader, ContainerBody }
