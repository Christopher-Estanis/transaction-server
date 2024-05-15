import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'

import { CreateWalletDTO } from '../../DTOs/CreateWallet.dto'
import { Wallet } from '../../entities/Wallet/Wallet'
import { WalletRepository } from '../../repositories/WalletRepository'

@Injectable()
export class WalletService {
  constructor(private readonly walletRepository: WalletRepository) {}

  async list() {
    return await this.walletRepository.findMany()
  }

  async create(createWalletDTO: CreateWalletDTO) {
    const wallet = new Wallet({
      id: randomUUID(),
      balance: createWalletDTO.balance,
      cpf: createWalletDTO.cpf,
      email: createWalletDTO.email,
      fullName: createWalletDTO.fullName,
      password: createWalletDTO.password,
      type: createWalletDTO.type,
    })
    await this.walletRepository.create(wallet)
  }
}
