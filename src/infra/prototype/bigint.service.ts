/* eslint-disable no-extend-native */
import { Injectable, OnApplicationBootstrap } from '@nestjs/common'

@Injectable()
export class BigIntService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    // @ts-expect-error
    BigInt.prototype.toJSON = function () {
      return this.toString()
    }
  }
}
