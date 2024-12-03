export interface PDData {
  monthPDData: [
    {
      range: string
      type: 'cPD' | 'mPD'
      values: {
        [key: string]: number
      }
    },
  ]
  quarterPDData: [
    {
      range: string
      type: 'cPD' | 'mPD'
      values: {
        [key: string]: number
      }
    },
  ]
  yearlyPDData: [
    {
      range: string
      type: 'cPD' | 'mPD'
      values: {
        [key: string]: number
      }
    },
  ]
}
