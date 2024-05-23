import { Body, Controller, Get, Post } from '@nestjs/common'

import { WalletService } from '../../application/services/wallet.service'
import { CreateWalletDTO } from '../DTOs/CreateWallet.dto'

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  async list() {
    return this.walletService.list()
  }

  @Post()
  async create(@Body() body: CreateWalletDTO) {
    const wallet = await this.walletService.create(body)
    return wallet
  }
}
