import {MutationCreateChannelArgs, CreateChannelResponse} from "../../../types/graphql";
import { Resolvers } from "../../../types/resolvers";
import Channel from "../../../entities/Channel";
import Team from "../../../entities/Team";

const resolvers: Resolvers = {
    Mutation: {
        CreateChannel: async (_, args: MutationCreateChannelArgs, { req }): Promise<CreateChannelResponse> => {
            const {name, shared, teamId} = args;
            console.log(name, shared, teamId)
            const { user } = req;
            try {
                const team = await Team.findOne({id: teamId}, {relations: ["owner"]});
                if (team) {
                    if (team.owner.id === user.id) {
                        await Channel.create(args).save();
                        return {
                            ok: true,
                            error: null
                        }
                    } else {
                        return {
                            ok: false,
                            error: "You must be leader of the team to create channel."
                        }
                    }
                } else {
                    return {
                        ok: false,
                        error: "The Team does not exist"
                    }
                }
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