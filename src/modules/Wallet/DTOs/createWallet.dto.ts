import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator'

import { WalletTypeEnum } from '../WalletTypeEnum'

export class CreateWalletDTO {
  id: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
  cpf: string

  @IsNotEmpty()
  @IsString()
  fullName: string

  @IsNotEmpty()
  @IsStrongPassword()
  password: string

  @IsNotEmpty()
  @IsEnum(WalletTypeEnum)
  type: number

  @IsNotEmpty()
  @IsNumber()
  balance: number
}
