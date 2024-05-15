import { Wallet } from '../../src/application/entities/Wallet/Wallet'
import { WalletRepository } from '../../src/application/repositories/WalletRepository'

export class InMemoryWalletRepository implements WalletRepository {
  private readonly wallet: Array<Wallet> = []

  async create(wallet: Wallet): Promise<void> {
    this.wallet.push(wallet)
  }

  async findMany(): Promise<Array<Wallet>> {
    return this.wallet
  }
}
