import { Injectable } from '@nestjs/common'

import { Wallet, WalletProps } from '../entities/Wallet/Wallet'
import { WalletRepository } from '../repositories/WalletRepository'

@Injectable()
export class WalletService {
  constructor(private readonly walletRepository: WalletRepository) {}

  async list() {
    return await this.walletRepository.findMany()
  }

  async create(walletProps: WalletProps) {
    const wallet = new Wallet(walletProps)

    const existsEmail = await this.walletRepository.existsEmail(wallet.email)
    if (existsEmail) throw Error('Email aready exists!')

    const existsCPF = await this.walletRepository.existsCPF(wallet.cpf)
    if (existsCPF) throw Error('CPF aready exists!')

    await this.walletRepository.create(wallet)

    return wallet
  }
}
