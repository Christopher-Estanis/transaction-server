import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { CreateWalletDTO } from 'src/application/DTOs/createWallet.dto'
import { PrismaService } from 'src/infra/prisma.service'

@Injectable()
export class WalletService {
  constructor(private readonly prismaService: PrismaService) {}

  async list() {
    return await this.prismaService.wallet.findMany()
  }

  async create(createWalletDTO: CreateWalletDTO) {
    createWalletDTO.id = randomUUID()
    return await this.prismaService.wallet.create({
      data: createWalletDTO,
    })
  }
}
