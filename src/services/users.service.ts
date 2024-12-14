import { Service } from 'typedi';
import { User } from '@interfaces/users.interface';
import { UserModel } from '@models/users.model';

@Service()
export class HomeService {
  public async findAllUser(): Promise<User[]> {
    const users: User[] = UserModel;
    return users;
  }
}
