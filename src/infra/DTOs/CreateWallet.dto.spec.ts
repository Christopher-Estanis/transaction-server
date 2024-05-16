import { validate } from 'class-validator'

import { CreateWalletDTO } from './createWallet.dto'

describe('CreateWalletDTO', () => {
  it('should validate a valid DTO', async () => {
    const dto = new CreateWalletDTO()
    dto.id = '1'
    dto.email = 'test@example.com'
    dto.cpf = '12345678901'
    dto.fullName = 'John Doe'
    dto.password = 'StrongPassword#123'
    dto.type = 1
    dto.balance = 100

    const errors = await validate(dto)

    expect(errors.length).toBe(0)
  })

  it('should fail validation with missing required fields', async () => {
    const dto = new CreateWalletDTO()

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })

  it('should fail validation with invalid email', async () => {
    const dto = new CreateWalletDTO()
    dto.email = 'invalid-email'

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })

  it('should fail validation with invalid CPF', async () => {
    const dto = new CreateWalletDTO()
    dto.cpf = 'invalid-cpf'

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })

  it('should fail validation with invalid password', async () => {
    const dto = new CreateWalletDTO()
    dto.password = 'weakpassword'

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })

  it('should fail validation with invalid wallet type', async () => {
    const dto = new CreateWalletDTO()
    dto.type = 999 // assuming 999 is not a valid wallet type

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })

  it('should fail validation with invalid balance', async () => {
    const dto = new CreateWalletDTO()
    dto.balance = -100 // assuming negative balance is not allowed

    const errors = await validate(dto)
    expect(errors.length).toBeGreaterThan(0)
  })
})
