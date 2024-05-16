import { Module } from '@nestjs/common'

import { ControllerModule } from './infra/controllers/controllers.module'
import { DatabaseModule } from './infra/database/database.module'

@Module({
  imports: [DatabaseModule, ControllerModule],
})
export class AppModule {}
