import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  constructor (private readonly salt: number) {}

  async encrypt (plaintext: string): Promise<string> {
    const hash = await bcrypt.hash(plaintext, this.salt)
    return hash
  }
}
