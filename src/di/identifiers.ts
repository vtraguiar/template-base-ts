/**
 * Constants used in dependence injection.
 *
 * @abstract
 */
export abstract class Identifier {
    public static readonly APP: any = Symbol.for('App')

    // Controllers
    public static readonly HOME_CONTROLLER: any = Symbol.for('HomeController')

    // Services
    public static readonly USER_SERVICE: any = Symbol.for('UserService')
    
    // Repositories
    public static readonly USER_REPOSITORY: any = Symbol.for('UserRepository')

    // Models
    public static readonly USER_ENTITY: any = Symbol.for('UserEntity')
    public static readonly USER_REPO_MODEL: any = Symbol.for('UserRepoModel')

    // Mappers
    public static readonly USER_ENTITY_MAPPER: any = Symbol.for('UserEntityMapper')
    // Background Services
    public static readonly RABBITMQ_EVENT_BUS: any = Symbol.for('EventBusRabbitMQ')
    public static readonly RABBITMQ_CONNECTION_FACTORY: any = Symbol.for('RabbitMQConnectionFactory')
    public static readonly RABBITMQ_CONNECTION: any = Symbol.for('RabbitMQConnection')
    public static readonly MONGODB_CONNECTION_FACTORY: any = Symbol.for('MongoDBConnectionFactory')
    public static readonly MONGODB_CONNECTION: any = Symbol.for('MongoDBConnection')
    public static readonly BACKGROUND_SERVICE: any = Symbol.for('BackgroundService')

    // Log
    public static readonly LOGGER: any = Symbol.for('CustomLogger')
}
