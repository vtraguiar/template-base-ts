import { User } from "application/domain/model/user";
import { UserEntity } from "../user.entity";
import { IEntityMapper } from "./entity.mapper.interface";

export class UserEntityMapper implements IEntityMapper<User, UserEntity> {
    public transform(item: any): any {
        if (item instanceof User) this.modelToModelEntity
    }


    public modelToModelEntity(item: User):UserEntity {
        const result: UserEntity = new UserEntity()
        if (item.getId()) result.setId(item.getId())
        if (item.getUsername()) result.setUsername(item.getUsername())
        if (item.getPassword()) result.setPassword(item.getPassword())
        if (item.getEmail()) result.setEmail(item.getEmail())
        return result
    }

    modelEntityToModel(item: UserEntity): User {
        const result: User = new User()
        result.setId(item.getId())
        if (item.getUsername()) result.setUsername(item.getUsername())
        if (item.getPassword()) result.setPassword(item.getPassword())
        if (item.getEmail()) result.setEmail(item.getEmail())
        if (item.getCreatedAt()) result.setCreatedAt(item.getCreatedAt())
        return result
    }

    public jsonToModel(json: any): User {
        const result: User = new User()
        if (!json) return result
        if (json.id !== undefined) result.setId(json.id)
        if (json.username !== undefined) result.setUsername(json.username)
        if (json.password !== undefined) result.setPassword(json.password)
        if (json.email !== undefined) result.setEmail(json.email)
        return result 
    }


}