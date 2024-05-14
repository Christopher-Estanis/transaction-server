import { Module } from '@nestjs/common'

import { WalletModule } from './modules/Wallet/wallet.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [WalletModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
