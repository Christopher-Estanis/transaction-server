import { Wallet, WalletProps } from './Wallet'

describe('Wallet', () => {
  let wallet: Wallet
  const walletProps: WalletProps = {
    email: 'test@example.com',
    cpf: '123.456.789-00',
    fullName: 'Test User',
    password: 'password123',
    type: 1,
    balance: 100.0,
  }

  beforeEach(() => {
    wallet = new Wallet(walletProps)
  })

  it('should create a new wallet instance', () => {
    expect(wallet).toBeInstanceOf(Wallet)
  })

  it('should correctly get and set id', () => {
    const newId = '2'
    wallet.id = newId
    expect(wallet.id).toBe(newId)
  })

  it('should correctly get and set email', () => {
    const newEmail = 'new@example.com'
    wallet.email = newEmail
    expect(wallet.email).toBe(newEmail)
  })

  it('should correctly get and set cpf', () => {
    const newCpf = '987.654.321-00'
    wallet.cpf = newCpf
    expect(wallet.cpf).toBe(newCpf)
  })

  it('should correctly get and set fullName', () => {
    const newFullName = 'New Test User'
    wallet.fullName = newFullName
    expect(wallet.fullName).toBe(newFullName)
  })

  it('should correctly get and set password', () => {
    const newPassword = 'newpassword123'
    wallet.password = newPassword
    expect(wallet.password).toBe(newPassword)
  })

  it('should correctly get and set type', () => {
    const newType = 2
    wallet.type = newType
    expect(wallet.type).toBe(newType)
  })

  it('should correctly get and set balance', () => {
    const newBalance = 200.0
    wallet.balance = newBalance
    expect(wallet.balance).toBe(newBalance)
  })
})
