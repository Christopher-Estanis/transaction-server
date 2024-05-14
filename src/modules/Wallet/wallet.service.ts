import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { PrismaService } from 'src/prisma.service'

import { CreateWalletDTO } from './DTOs/createWallet.dto'

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
