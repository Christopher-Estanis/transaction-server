import { Module } from '@nestjs/common'

import { BigIntService } from './bigint.service'

@Module({
  providers: [BigIntService],
})
export class PrototypeModule {}
