import { UserRepository } from '@/users/repositories/UserRepository.js'
import { UserService } from '@/users/services/UserService.js'
import { UserController } from '@/users/controllers/UserController.js'
import { User } from '@/users/entities/User.js'

class UserModule {
  static getInstance() {
    const repository = new UserRepository(User)
    const service = new UserService(repository)
    const controller = new UserController(service)

    return { repository, controller }
  }
}

const userController = UserModule.getInstance().controller
const userRepository = UserModule.getInstance().repository

export { userController, userRepository }
