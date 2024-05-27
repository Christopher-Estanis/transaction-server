import { WalletProps } from '../../src/application/entities/Wallet/Wallet'
import { WalletList } from '../../src/application/entities/Wallet/WalletList'
import { WalletRepository } from '../../src/application/repositories/WalletRepository'

export class InMemoryWalletRepository implements WalletRepository {
  private readonly wallets: Array<WalletProps> = []

  async create(wallet: WalletProps): Promise<void> {
    this.wallets.push(wallet)
  }

  async findMany(): Promise<WalletList> {
    return new WalletList(this.wallets)
  }

  async existsEmail(email): Promise<boolean> {
    return !!this.wallets.find((wallet) => wallet.email === email)
  }

  async existsCPF(cpf) {
    return !!this.wallets.find((wallet) => wallet.cpf === cpf)
  }
}
