import { Module } from '@nestjs/common'

import { WalletModule } from './application/modules/Wallet/wallet.module'
import { PrismaService } from './infra/prisma.service'

@Module({
  imports: [WalletModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
