import { ColumnDef, Row } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/CustomTableComponents/DataTableColumnHeader'

export interface Credit {
  client_id: string
  contract_id: string
  debtor_type: string
  credit_type: string
  product_type: string
  VBS: string
  RAM: string
  RTAM: string
  currency: string
  PD: string
  LGD: string
}

const customFilterFn = (
  row: Row<Credit>,
  columnId: string,
  filterValue: unknown
) => {
  if (Array.isArray(filterValue)) {
    return filterValue.includes(row.getValue(columnId))
  }
  return row.getValue(columnId) === filterValue
}

export const columns: ColumnDef<Credit>[] = [
  {
    accessorKey: 'client_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID клиента" />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('client_id')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'contract_id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID договора" />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('contract_id')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'debtor_type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Тип должника" />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('debtor_type')}
      </div>
    ),
    enableSorting: false,
    enableHiding: true,
    filterFn: customFilterFn,
  },
  {
    accessorKey: 'credit_type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Вид кредита" />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('credit_type')}
      </div>
    ),
    enableSorting: false,
    enableHiding: true,
    filterFn: customFilterFn,
  },
  {
    accessorKey: 'product_type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Вид продукта" />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('product_type')}
      </div>
    ),
    enableSorting: false,
    enableHiding: true,
    filterFn: customFilterFn,
  },
  {
    accessorKey: 'VBS',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ВБС" allowHide={true} />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('VBS')}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'RAM',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="СР" allowHide={true} />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('RAM')}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'RTAM',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="СПР" allowHide={true} />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('RTAM')}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'currency',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Валюта" />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('currency')}
      </div>
    ),
    enableHiding: true,
    enableSorting: false,
  },
  {
    accessorKey: 'PD',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="PD" allowHide={true} />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('PD')}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: 'LGD',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="LGD" allowHide={true} />
    ),
    cell: ({ row }) => (
      <div className="flex h-10 items-center justify-center">
        {row.getValue('LGD')}
      </div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
]

export const debtor_types = [
  {
    value: 'Розничный',
    label: 'Розничный',
  },
  {
    value: 'Другой',
    label: 'Другой',
  },
]

export const credit_types = [
  {
    value: 'Потребительский',
    label: 'Потребительский',
  },
  {
    value: 'Автокредит',
    label: 'Автокредит',
  },
]

export const product_types = [
  {
    value: 'Залоговый',
    label: 'Залоговый',
  },
  {
    value: 'Беззалоговый',
    label: 'Беззалоговый',
  },
]

export const titles = {
  client_id: 'ID клиента',
  contract_id: 'ID договора',
  debtor_type: 'Тип должника',
  credit_type: 'Вид кредита',
  product_type: 'Вид продукта',
  VBS: 'ВБС',
  RAM: 'ПР',
  RTAM: 'СПР',
  currency: 'Валюта',
  PD: 'PD',
  LGD: 'LGD',
}
