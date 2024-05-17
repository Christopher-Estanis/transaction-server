import { Wallet } from '../entities/Wallet/Wallet'

export abstract class WalletRepository {
  abstract create(wallet: Wallet): Promise<void>

  abstract findMany(): Promise<Array<Wallet>>

  abstract existsEmail(email: string): Promise<boolean>

  abstract existsCPF(cpf: string): Promise<boolean>
}
