export class UserEntity {
    private id?: string
    private username?: string
    private password?: string
    private email?: string
    private created_at?: Date

    public getId(): string | undefined {
        return this.id
    }

    public setId(value: string | undefined) {
        this.id = value
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

    public getCreatedAt(): Date | undefined {
        return this.created_at
    }

    public setCreatedAt(value: Date | undefined) {
        this.created_at = value
    }
}