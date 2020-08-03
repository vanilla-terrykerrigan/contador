import { Resolvers } from "../../../types/resolvers";
import {MutationCreateTeamArgs, CreateTeamResponse} from "../../../types/graphql";
import Team from "../../../entities/Team";

const resolvers: Resolvers = {
    Mutation: {
        CreateTeam: async (_, args: MutationCreateTeamArgs, { req }): Promise<CreateTeamResponse> => {
            try {
                await Team.create({ ...args, ownerId: req.user.id}).save();
                return {
                    ok: true,
                    error: null
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message
                };
            }
        }
    }
};

export default resolvers;