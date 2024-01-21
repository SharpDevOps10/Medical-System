import { User } from 'src/entitites/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail (email: string): Promise<User> {
    return this.findOne({ where: { email } });
  }

  async createUser (email: string, username: string, password: string): Promise<User> {
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = password;

    return this.save(user);
  }

  async deleteUser (id: string): Promise<void> {
    await this.delete(id);
  }
}