export interface Payment {
  ID: number
  Merchant: string
  Status: 'completed' | 'processing' | 'failed'
  Amount: number
  CreatedAt: string
}
