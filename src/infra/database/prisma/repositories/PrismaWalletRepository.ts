import { Wallet } from '../../../../application/entities/Wallet/Wallet'
import { WalletRepository } from '../../../../application/repositories/WalletRepository'
import { PrismaService } from '../prisma.service'

export class PrismaWalletRepository implements WalletRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(wallet: Wallet): Promise<void> {
    console.log({ prisma: this.prismaService })
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
    console.log({ prisma: this.prismaService })
    const wallets = await this.prismaService.wallet.findMany()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return wallets.map((wallet) => new Wallet(wallet))
  }
}
