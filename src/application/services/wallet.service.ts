import { Injectable } from '@nestjs/common'

import { Wallet, WalletProps } from '../entities/Wallet/Wallet'
import { WalletRepository } from '../repositories/WalletRepository'

@Injectable()
export class WalletService {
  constructor(private readonly walletRepository: WalletRepository) {}

  async list() {
    return await this.walletRepository.findMany()
  }

  async create(createWalletDTO: WalletProps) {
    const wallet = new Wallet({
      balance: createWalletDTO.balance,
      cpf: createWalletDTO.cpf,
      email: createWalletDTO.email,
      fullName: createWalletDTO.fullName,
      password: createWalletDTO.password,
      type: createWalletDTO.type,
    })
    await this.walletRepository.create(wallet)

    return wallet
  }
}
