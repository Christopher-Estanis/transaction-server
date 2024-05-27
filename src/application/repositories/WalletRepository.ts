import { Wallet } from '../entities/Wallet/Wallet'
import { WalletList } from '../entities/Wallet/WalletList'

export abstract class WalletRepository {
  abstract create(wallet: Wallet): Promise<void>

  abstract findMany(): Promise<WalletList | null>

  abstract existsEmail(email: string): Promise<boolean>

  abstract existsCPF(cpf: string): Promise<boolean>
}
