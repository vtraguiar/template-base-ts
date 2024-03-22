import { IUserService } from 'application/port/user.service.interface'
import { injectable, inject } from 'inversify'
import { IUserRepository } from 'application/port/user.repository.interface'
import { Identifier } from 'di/identifiers'
import { User } from 'application/domain/model/user'
import { UserValidator } from 'application/domain/validator/user.validator'
import { ConflictException } from 'application/domain/exception/conflict.exception'
import { IQuery } from 'application/port/query.interface'

@injectable()
export class UserService implements IUserService {
    constructor(@inject(Identifier.USER_REPOSITORY) private readonly _userRepository: IUserRepository) {
    }

    public async add(user: User): Promise<User> {
        await UserValidator.validate(user)
        const userExist = await this._userRepository.checkExist(user)
        if (userExist) throw new ConflictException('User already has an account...')
        return this._userRepository.create(user)
    }



    public async getAll(query: IQuery): Promise<Array<User>> {
        return this._userRepository.find(query)
    }


    public async getById(id: string | number, query: IQuery): Promise<User> {
        query.filters = { _id: id }
        return this._userRepository.findOne(query)
    }

    public async update(user: User): Promise<User> {
        return this._userRepository.update(user)
    }

    public async remove(id: string | number): Promise<boolean> {
        return this._userRepository.delete(id)
    }
}
