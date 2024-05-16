import { Module } from '@nestjs/common'

import { WalletRepository } from '../../application/repositories/WalletRepository'
import { PrismaService } from './prisma/prisma.service'
import { PrismaWalletRepository } from './prisma/repositories/PrismaWalletRepository'

@Module({
  providers: [
    PrismaService,
    {
      provide: WalletRepository,
      useClass: PrismaWalletRepository,
    },
  ],
  exports: [WalletRepository],
})
export class DatabaseModule {}
