import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import {verificationTarget} from "../types/types";

const PHONE = "PHONE";
const EMAIL = "EMAIL";

/*
    id: index of verification
    target: phone | email
    payload: incoming key
    key: auth key that server is holding to compare with the payload
    used: check if the key is used
*/

@Entity()
class Verification extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", enum: [PHONE, EMAIL]})
    target: verificationTarget;

    @Column({ type: "text" })
    payload: string;

    @Column({ type: "text" })
    key: string;

    @Column({ type: "text", default: false })
    used: boolean;

    @CreateDateColumn()
    createdAt: string;
    
    @UpdateDateColumn()
    updatedAt: string;

    @BeforeInsert()
    create_key(): void {
        if (this.target === PHONE || this.target === EMAIL) {
            this.key = Math.floor(Math.random() * 100000).toString();
        }
    }
}

export default Verification;