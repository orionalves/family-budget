import { InterfaceUser } from '@/users/entities/User'
import { Model } from 'mongoose'

class UserRepository {
  constructor(private model: Model<InterfaceUser>) {}

  async create(data: InterfaceUser) {
    return this.model.create(data)
  }

  async findById(id: string) {
    return this.model.findById(id)
  }

  async findAll() {
    return this.model.find()
  }

  async findByEmail(email: string) {
    return this.model.findOne({ email })
  }
}

export { UserRepository }
