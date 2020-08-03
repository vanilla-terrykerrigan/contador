import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
} from "typeorm";
import { IsEmail } from "class-validator";
import bcrypt from "bcrypt";
import Message from "./Message";
import Team from "./Team";
import UserTeam from "./UserTeam";
import UserChannel from "./UserChannel";

const BCRYPT_ROUNDS = 12;

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsEmail()
    @Column({ type: "text", unique: true, nullable: false})
    email: string;
    
    @Column({ type: "text", unique: true, nullable: false})
    username: string;

    @Column({ type: "text", nullable: false})
    password: string;

    @OneToMany(type => UserTeam, userTeam => userTeam.user)
    userTeams: UserTeam[];

    @OneToMany(type => Team, team => team.owner)
    ownedTeams: Team[];

    @OneToMany(type => Message, message => message.sender)
    messages: Message[];

    @OneToMany(type => UserChannel, userChannel => userChannel.user)
    userChannels: UserChannel[];

    @CreateDateColumn()
    createdAt: string;
    
    @UpdateDateColumn()
    updatedAt: string;
    
    
    //diff betwee async and normal func
    private hash_password(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async save_password(): Promise<void> {
        if (this.password) {
            const hashed_password: string = await this.hash_password(this.password);
            this.password = hashed_password;
        }
    }


    public check_password(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

export default User;