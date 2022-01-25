import { compare, hash } from 'bcryptjs';
import { IhashProvider } from '../models/IHashProvider';

class BcryptHashProvider implements IhashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BcryptHashProvider;
