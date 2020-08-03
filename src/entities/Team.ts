import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, 
    OneToMany,
    ManyToOne,
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
} from "typeorm";
import Channel from "./Channel"
import UserTeam from "./UserTeam";
import User from "./User";


@Entity()
class Team extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", unique: true, nullable: false})
    name: string;

    @OneToMany(type => UserTeam, userTeam => userTeam.team)
    userTeams: UserTeam[];

    @ManyToOne(type => User, user => user.ownedTeams, {nullable: false})
    owner: User;
    @Column()
    ownerId: number;

    @OneToMany(type => Channel, channel => channel.team)
    channels: Channel[];

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}

export default Team;