import { ISerializable } from '../utils/serializable.interface';
import { Entity } from './entity'

export class User extends Entity implements ISerializable<User>{

    private username?: string
    private password?: string
    private email?: string

    constructor(username?: string, password?: string, email?: string, id?: string) {
        super(id)
    }

    public getUsername(): string | undefined {
        return this.username
    }

    public setUsername(value: string | undefined) {
        this.username = value
    }

    public getPassword(): string | undefined {
        return this.password
    }

    public setPassword(value: string | undefined) {
        this.password = value
    }

    public getEmail(): string | undefined {
        return this.email
    }

    public setEmail(value: string | undefined) {
        this.email = value
    }

    public serialize(): any {
        return {
            id: super.getId(),
            username: this.username,
            password: this.password,
            email: this.email,
        }
    }

    public toJSON(): string {
        return this.serialize()
    }

    public deserialize(json: any): User {
        if (!json) return this
        if (typeof json === 'string') json = JSON.parse(json)

        if (json.id) this.setId(json.id)
        if (json.username) this.setUsername(json.username)
        if (json.password) this.setPassword(json.password)
        if (json.email) this.setEmail(json.email)
        
        
        return this
    }


}