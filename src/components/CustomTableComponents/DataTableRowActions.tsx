import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Label {
  value: string
  label: string
}

interface DataTableRowActionsProps<TData extends { label: string }> {
  row: Row<TData>
  labels: Label[]
}

export function DataTableRowActions<TData extends { label: string }>({
  row,
  labels,
}: DataTableRowActionsProps<TData>) {
  const task = row.original
  const { t } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[10rem]">
        <DropdownMenuItem>{t('customTable.actions.edit')}</DropdownMenuItem>
        <DropdownMenuItem>{t('customTable.actions.favorite')}</DropdownMenuItem>
        <DropdownMenuItem>
          {t('customTable.actions.forChecking')}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{t('customTable.actions.delete')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
