import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface DataTableViewOptionsProps<TData, TTitles> {
  table: Table<TData>
  titles: TTitles
}

export function DataTableViewOptions<TData, TTitles>({
  table,
  titles,
}: DataTableViewOptionsProps<TData, TTitles>) {
  const { t } = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto hidden h-8 lg:flex">
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          {t('customTable.toolbar.view')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[9rem]">
        <DropdownMenuLabel>Отобразить колонки</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(value)}
              >
                {titles[column.id as keyof TTitles] as React.ReactNode}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
