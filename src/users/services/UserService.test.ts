import { describe, it, vi, expect } from 'vitest'
import { InterfaceUser } from '@/users/entities/User'
import { UserRepository } from '@/users/repositories/UserRepository'
import { UserService } from '@/users/services/UserService'
import { commonError } from '@/utils/commonError'

const repositoryMock = {
  create: vi.fn(),
  findById: vi.fn(),
  findAll: vi.fn(),
  findByEmail: vi.fn()
}

const paramsMock = {
  name: 'teste',
  email: 'teste@teste.com',
  password: '123'
}

// System under test
const sut = new UserService(repositoryMock as unknown as UserRepository)

describe('UserService', () => {
  it('should be able to return an error if user already exists', async () => {
    vi.spyOn(repositoryMock, 'findByEmail').mockResolvedValue(paramsMock)

    const result = await sut.create(paramsMock as unknown as InterfaceUser)
    const expected = commonError('This email already exist.', 400)

    expect(result).toStrictEqual(expected)
  })

  it('should be able to create a user', async () => {
    vi.spyOn(repositoryMock, 'findByEmail').mockResolvedValue(false)
    vi.spyOn(repositoryMock, 'create').mockResolvedValue(paramsMock)

    const result = await sut.create(paramsMock as unknown as InterfaceUser)
    const expected = paramsMock

    expect(result).toStrictEqual(expected)
  })
})
