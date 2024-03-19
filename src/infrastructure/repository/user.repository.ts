import { UserEntity } from 'infrastructure/entity/user.entity'
import { User } from 'application/domain/model/user'
import { BaseRepository } from './base/base.repository'
import { IUserRepository } from 'application/port/user.repository.interface'
import { inject, injectable } from 'inversify'
import { Identifier } from 'di/identifiers'
import { IQuery } from 'application/port/query.interface'
import { IEventBus } from 'infrastructure/port/event.bus.interface'
import { ILogger } from 'utils/custom.logger'
import { IEntityMapper } from 'infrastructure/entity/mapper/entity.mapper.interface'


@injectable()
export class UserRepository extends BaseRepository<User, UserEntity> implements IUserRepository {
    constructor(
        @inject(Identifier.USER_REPO_MODEL) protected readonly userModel: any,
        @inject(Identifier.USER_ENTITY_MAPPER) protected readonly userMapper: IEntityMapper<User, UserEntity>,
        @inject(Identifier.RABBITMQ_EVENT_BUS) protected readonly _rabbitMQEventBus: IEventBus,
        @inject(Identifier.LOGGER) protected readonly logger: ILogger
    ){
        super(userModel, userMapper, logger)
    }


    getByEmail(email: string | number, query: IQuery): Promise<User> {
    }

    checkExist(user: User): Promise<boolean> {
     return true   
    }
}