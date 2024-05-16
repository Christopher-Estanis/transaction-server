/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import supertest from 'supertest'

import { InMemoryWalletRepository } from '../../../test/respositories/InMemoryWalletRepository'
import { AppModule } from '../../app.module'
import { WalletRepository } from '../../application/repositories/WalletRepository'

describe('AppController (e2e)', () => {
  let app: INestApplication
  let walletRepository: InMemoryWalletRepository

  beforeEach(async () => {
    walletRepository = new InMemoryWalletRepository()
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(WalletRepository)
      .useValue(walletRepository)
      .compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/wallet (POST)', async () => {
    return supertest(app.getHttpServer())
      .post('/wallet')
      .send({
        email: 'christopher.estanis5@gmail.com',
        cpf: '46669666803',
        fullName: 'Christopher Estanislau Camargo',
        password: 'SenhatestesW@15',
        type: 1,
        balance: 100,
      })
      .expect(201)
  })
})
