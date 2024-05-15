export interface WalletProps {
  id: string
  email: string
  cpf: string
  fullName: string
  password: string
  type: number
  balance: number
}

export class Wallet {
  private readonly props: WalletProps

  constructor(props: WalletProps) {
    this.props = props
  }

  get id() {
    return this.props.id
  }

  set id(id: string) {
    this.props.id = id
  }

  get email() {
    return this.props.email
  }

  set email(email: string) {
    this.props.email = email
  }

  get cpf() {
    return this.props.cpf
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf
  }

  get fullName() {
    return this.props.fullName
  }

  set fullName(fullName: string) {
    this.props.fullName = fullName
  }

  get password() {
    return this.props.password
  }

  set password(password: string) {
    this.props.password = password
  }

  get type() {
    return this.props.type
  }

  set type(type: number) {
    this.props.type = type
  }

  get balance() {
    return this.props.balance
  }

  set balance(balance: number) {
    this.props.balance = balance
  }
}
