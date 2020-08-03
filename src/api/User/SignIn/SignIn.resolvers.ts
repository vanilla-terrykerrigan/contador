import { Resolvers } from "../../../types/resolvers";
import { MutationSignInArgs, SignInResponse } from "../../../types/graphql";
import User from "../../../entities/User";
import createJWT from "../../../utils/CreateJWT";


const resolvers: Resolvers = {
    Mutation: {
        SignIn: async (_, args: MutationSignInArgs): Promise<SignInResponse> => {
            const {username, password} = args;
            try {
                const user = await User.findOne({ where: { username } })
                if (!user) {
                    return {
                        ok: false,
                        error: "Wrong username!",
                        token: null
                    };
                }
                const checkPassword = await user.check_password(password);
                if (checkPassword) {
                    console.log("userid when creating jwt : ", user.id, "\n")
                    const token = createJWT(user.id);
                    return {
                        ok: true,
                        error: null,
                        token: token
                    }
                } else {
                    return {
                        ok: false,
                        error: "wrong password!",
                        token: null
                    };
                }
            } catch (error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }
        }
    }
};

export default resolvers;