import {
    BaseEntity,
    CreateDateColumn,
    Entity, 
    OneToMany,
    ManyToOne,
    Column,
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
} from "typeorm";
import Message from "./Message";
import Team from "./Team";
import UserChannel from "./UserChannel";


@Entity()
class Channel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToMany(type => Message, message => message.channel)
    messages: Message[];

    @Column({type: "text" })
    name: string;

    @ManyToOne(type => Team, team => team.channels, {nullable: false})
    team: Team;
    @Column()
    teamId: number;

    @OneToMany(type => UserChannel, userChannel => userChannel.channel)
    userChannels: UserChannel[];

    @Column({ type: "boolean", default: false, nullable: false})
    shared: boolean;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}

export default Channel;