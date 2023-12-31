import { Request, Response } from 'express'
import { userSchemaValidation } from '@/utils/validations/userSchemaValidation'
import { UserService } from '@/users/services/UserService'

class UserController {
  constructor(private service: UserService) {}

  async create(request: Request, response: Response) {
    const { body } = request
    const bodyIsValid = await userSchemaValidation(body)
    if (bodyIsValid.error) {
      return response.status(bodyIsValid.status).json(bodyIsValid)
    }

    const result = await this.service.create(body)

    if ('error' in result) {
      return response.status(result.status).json(result)
    }

    return response.status(201).json(result)
  }
}

export { UserController }
