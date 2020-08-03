import {
    BaseEntity,
    CreateDateColumn,
    Entity, 
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Team from "./Team";
import User from "./User";

@Entity()
class UserTeam extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, user => user.userTeams, {primary: true})
    user: User;
    
    @ManyToOne(type => Team, team => team.userTeams, {primary: true})
    team: Team;

    @CreateDateColumn()
    createdAt: string;
    
    @UpdateDateColumn()
    updatedAt: string;
}

export default UserTeam;