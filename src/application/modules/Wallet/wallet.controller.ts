import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateWalletDTO } from 'src/application/DTOs/createWallet.dto'

import { WalletService } from './wallet.service'

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  async list() {
    return this.walletService.list()
  }

  @Post()
  async create(@Body() body: CreateWalletDTO) {
    return this.walletService.create(body)
  }
}
