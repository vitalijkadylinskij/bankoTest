export interface CreditListData {
  client_id: string
  contract_id: string
  debtor_type: 'Розничный' | 'Корпоративный' | string
  credit_type: 'Потребительский' | string
  product_type: 'Залоговый' | string
  VBS: string
  RAM: string
  RTAM: string
  currency: '$' | '€' | '₽' | string
  PD: string
  LGD: string
}
