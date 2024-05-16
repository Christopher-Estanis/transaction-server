import { Module } from '@nestjs/common'

import { WalletService } from '../../application/services/wallet.service'
import { DatabaseModule } from '../database/database.module'
import { WalletController } from './wallet.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [WalletController],
  providers: [WalletService],
})
export class ControllerModule {}
