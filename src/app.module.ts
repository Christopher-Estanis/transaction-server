import { Module } from '@nestjs/common'

import { ControllerModule } from './infra/controllers/controllers.module'
import { DatabaseModule } from './infra/database/database.module'
import { PrototypeModule } from './infra/prototype/prototype.module'

@Module({
  imports: [DatabaseModule, ControllerModule, PrototypeModule],
})
export class AppModule {}
