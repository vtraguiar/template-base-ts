import { IQuery } from './query.interface'
import { IRepository } from './repository.interface'
import { User } from 'application/domain/model/user'

export interface IUserRepository extends IRepository<User> {
    
    getByEmail(email: string | number, query: IQuery): Promise<User>

    checkExist(user: User): Promise<boolean>
}