import { Injectable } from '@nestjs/common'

import { Wallet } from '../../../../application/entities/Wallet/Wallet'
import { WalletRepository } from '../../../../application/repositories/WalletRepository'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaWalletRepository implements WalletRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(wallet: Wallet): Promise<void> {
    await this.prismaService.wallet.create({
      data: {
        id: wallet.id,
        balance: wallet.balance,
        cpf: wallet.cpf,
        email: wallet.email,
        fullName: wallet.fullName,
        password: wallet.password,
        type: wallet.type,
      },
    })
  }

  async findMany(): Promise<Array<Wallet>> {
    console.log('test', !!this.prismaService?.wallet)
    const wallets = await this.prismaService.wallet.findMany()

    if (!wallets) return null
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return wallets?.map((wallet) => new Wallet(wallet))
  }

  async existsEmail(email: string): Promise<boolean> {
    const existsEmail = await this.prismaService.wallet.findFirst({
      where: { email },
    })

    return !!existsEmail
  }

  async existsCPF(cpf: string): Promise<boolean> {
    const existsCPF = await this.prismaService.wallet.findFirst({
      where: { cpf },
    })

    return !!existsCPF
  }
}
