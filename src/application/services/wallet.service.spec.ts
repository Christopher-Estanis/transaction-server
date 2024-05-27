import { InMemoryWalletRepository } from '../../../test/respositories/InMemoryWalletRepository'
import { WalletProps } from '../entities/Wallet/Wallet'
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
      expect(wallets.wallets).toEqual([])
    })

    it('should return an array of wallets when wallets exist', async () => {
      const walletData: Array<WalletProps> = [
        {
          balance: 100,
          cpf: '12345678900',
          email: 'test@example.com',
          fullName: 'John Doe',
          password: 'password123',
          type: 1,
        },
        {
          balance: 200,
          cpf: '98765432100',
          email: 'test2@example.com',
          fullName: 'Jane Doe',
          password: 'password456',
          type: 2,
        },
      ]
      await walletRepository.create(walletData[0])
      await walletRepository.create(walletData[1])
      const walletsList = await walletService.list()
      walletsList.wallets.forEach(
        (wallet: WalletProps & { id: string }, index: number) => {
          expect(wallet.balance).toBe(walletData[index].balance)
          expect(wallet.cpf).toBe(walletData[index].cpf)
          expect(wallet.email).toBe(walletData[index].email)
          expect(wallet.fullName).toBe(walletData[index].fullName)
          expect(wallet.password).toBe(walletData[index].password)
          expect(wallet.type).toBe(walletData[index].type)
        },
      )
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
      expect(wallets.list.wallets[0].balance).toBe(createWalletDTO.balance)
      expect(wallets.list.wallets[0].cpf).toBe(createWalletDTO.cpf)
      expect(wallets.list.wallets[0].email).toBe(createWalletDTO.email)
      expect(wallets.list.wallets[0].fullName).toBe(createWalletDTO.fullName)
      expect(wallets.list.wallets[0].password).toBe(createWalletDTO.password)
      expect(wallets.list.wallets[0].type).toBe(createWalletDTO.type)
    })

    it('should throw an error if email already exists', async () => {
      const createWalletDTO: WalletProps = {
        balance: 100,
        cpf: '12345678900',
        email: 'test@example.com',
        fullName: 'John Doe',
        password: 'password123',
        type: 1,
      }
      await walletService.create(createWalletDTO)

      await expect(walletService.create(createWalletDTO)).rejects.toThrow(
        'Email aready exists!',
      )
    })

    it('should throw an error if CPF already exists', async () => {
      const createWalletDTO1: WalletProps = {
        balance: 100,
        cpf: '12345678900',
        email: 'test1@example.com',
        fullName: 'John Doe',
        password: 'password123',
        type: 1,
      }
      const createWalletDTO2: WalletProps = {
        balance: 100,
        cpf: '12345678900',
        email: 'test2@example.com',
        fullName: 'Jane Doe',
        password: 'password123',
        type: 1,
      }
      await walletService.create(createWalletDTO1)

      await expect(walletService.create(createWalletDTO2)).rejects.toThrow(
        'CPF aready exists!',
      )
    })
  })
})
