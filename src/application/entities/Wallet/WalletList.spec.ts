import { Wallet, WalletProps } from './Wallet'
import { WalletList } from './WalletList'

// Dados de teste
const walletProps1: WalletProps = {
  email: 'user1@example.com',
  cpf: '12345678901',
  fullName: 'User One',
  password: 'password1',
  type: 1,
  balance: 1000,
}

const walletProps2: WalletProps = {
  email: 'user2@example.com',
  cpf: '10987654321',
  fullName: 'User Two',
  password: 'password2',
  type: 2,
  balance: 2000,
}

describe('WalletList', () => {
  let walletList: WalletList

  beforeEach(() => {
    walletList = new WalletList([walletProps1, walletProps2])
  })

  test('should initialize with correct number of wallets', () => {
    expect(walletList.length).toBe(2)
  })

  test('should correctly map wallet properties', () => {
    const list = walletList.list

    expect(list.wallets.length).toBe(2)
    expect(list.wallets[0].email).toBe(walletProps1.email)
  })

  test('should return correct headers', () => {
    const list = walletList.list
    expect(list.headers).toEqual(Wallet.toObjHeaders)
  })
})
