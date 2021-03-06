import  { Resolvers } from "../../../types/resolvers";
import User from "../../../entities/User";
import {GetUserResponse} from "../../../types/graphql";
import authResolver from "../../../utils/authResolver";


const resolvers: Resolvers = {
    Query: {
        GetUser: authResolver(async (_, args, { req }): Promise<GetUserResponse> => {
            const { id } = args;
            const user = await User.findOne({where: { id }})
            if (user) {
                return {
                    ok: true,
                    error: null,
                    user: user
                }
            } else {
                return {
                    ok: false,
                    error: "user not found",
                    user: null
                }
            }
        })
    }
}

export default resolvers;