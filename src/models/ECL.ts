export interface ECLData {
  moneyData: {
    date: string
    credit: string
    opp: string
  }
  countData: {
    stage1: string[]
    stage2: string[]
    stage3: string[]
    ukn: string[]
  }
}
