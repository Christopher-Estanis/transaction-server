import { Wallet } from '../../src/application/entities/Wallet/Wallet'
import { WalletRepository } from '../../src/application/repositories/WalletRepository'

export class InMemoryWalletRepository implements WalletRepository {
  private readonly wallets: Array<Wallet> = []

  async create(wallet: Wallet): Promise<void> {
    this.wallets.push(wallet)
  }

  async findMany(): Promise<Array<Wallet>> {
    return this.wallets
  }

  async existsEmail(email): Promise<boolean> {
    return !!this.wallets.find((wallet) => wallet.email === email)
  }

  async existsCPF(cpf) {
    return !!this.wallets.find((wallet) => wallet.cpf === cpf)
  }
}
