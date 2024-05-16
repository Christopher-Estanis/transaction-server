import { InMemoryWalletRepository } from '../../../test/respositories/InMemoryWalletRepository'
import { Wallet, WalletProps } from '../entities/Wallet/Wallet'
import { WalletService } from './wallet.service'

describe('WalletService', () => {
  let walletService: WalletService
  let walletRepository: InMemoryWalletRepository

  beforeEach(() => {
    walletRepository = new InMemoryWalletRepository()
    walletService = new WalletService(walletRepository)
  })

  describe('list', () => {
    it('should return an empty array when no wallets exist', async () => {
      const wallets = await walletService.list()
      expect(wallets).toEqual([])
    })

    it('should return an array of wallets when wallets exist', async () => {
      const walletData: Array<Wallet> = [
        new Wallet({
          balance: 100,
          cpf: '12345678900',
          email: 'test@example.com',
          fullName: 'John Doe',
          password: 'password123',
          type: 1,
        }),
        new Wallet({
          balance: 200,
          cpf: '98765432100',
          email: 'test2@example.com',
          fullName: 'Jane Doe',
          password: 'password456',
          type: 2,
        }),
      ]
      await walletRepository.create(walletData[0])
      await walletRepository.create(walletData[1])
      const wallets = await walletService.list()
      expect(wallets).toEqual(walletData)
    })
  })

  describe('create', () => {
    it('should create a wallet', async () => {
      const createWalletDTO: WalletProps = {
        balance: 100,
        cpf: '12345678900',
        email: 'test@example.com',
        fullName: 'John Doe',
        password: 'password123',
        type: 1,
      }
      await walletService.create(createWalletDTO)
      const wallets = await walletRepository.findMany()
      expect(wallets.length).toBe(1)
      expect(wallets[0].balance).toBe(createWalletDTO.balance)
      expect(wallets[0].cpf).toBe(createWalletDTO.cpf)
      expect(wallets[0].email).toBe(createWalletDTO.email)
      expect(wallets[0].fullName).toBe(createWalletDTO.fullName)
      expect(wallets[0].password).toBe(createWalletDTO.password)
      expect(wallets[0].type).toBe(createWalletDTO.type)
    })
  })
})
