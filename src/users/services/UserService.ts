import { hashPassword } from '@/utils/hashPassword'
import { commonError } from '@/utils/commonError'
import { UserRepository } from '@/users/repositories/UserRepository'
import { InterfaceUser } from '@/users/entities/User'

class UserService {
  constructor(private repository: UserRepository) {}

  async create(data: InterfaceUser) {
    const userAlreadyExist = await this.repository.findByEmail(data.email)
    if (userAlreadyExist) {
      return commonError('This email already exist.', 400)
    }
    const newUser = {
      ...data,
      password: hashPassword(data.password)
    }

    const result = await this.repository.create(newUser)
    return result
  }

  async index() {
    const result = await this.repository.findAll()
    return result
  }
}

export { UserService }
