import { Resolvers } from "../../../types/resolvers";
import {MutationPostMessageArgs, PostMessageResponse} from "../../../types/graphql";
import Message from "../../../entities/Message";

const resolvers: Resolvers = {
    Mutation: {
        PostMessage: async (_, args: MutationPostMessageArgs, { req }): Promise<PostMessageResponse> => {
            const { ReqUser } = req;
            try {
                await Message.create({ ...args, senderId: ReqUser.id }).save();
                return {
                    ok: true,
                    channelId: args.channelId,
                    content: args.content,
                    error: null
                };
            } catch(error) {
                return {
                    ok: false,
                    channelId: null,
                    content: null,
                    error: error.message
                };
            }
        }
    }
};

export default resolvers;