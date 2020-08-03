import {
    BaseEntity,
    CreateDateColumn,
    Entity, 
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Channel from "./Channel";
import User from "./User";

@Entity()
class UserChannel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.userChannels, {primary: true})
    user: User;
    
    @ManyToOne(type => Channel, Channel => Channel.userChannels, {primary: true})
    channel: Channel;

    @CreateDateColumn()
    createdAt: string;
    
    @UpdateDateColumn()
    updatedAt: string;
}

export default UserChannel;