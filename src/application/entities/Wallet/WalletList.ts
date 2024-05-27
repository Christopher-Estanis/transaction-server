import { Wallet } from './Wallet'

export interface WalletProps {
  email: string
  cpf: string
  fullName: string
  password: string
  type: number
  balance: number
}

export class WalletList {
  private readonly wallets: Array<Wallet>

  constructor(walletProps: Array<WalletProps>) {
    this.wallets = walletProps?.map((wallet) => new Wallet(wallet))
  }

  get length() {
    return this.wallets.length
  }

  get list() {
    return {
      wallets: this.wallets.map((wallet) => wallet.toObj),
      headers: Wallet.toObjHeaders,
    }
  }
}
