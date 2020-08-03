const authResolver = resolver => async (parent, args, context, info) => {
    if (!context.req.user) {
      throw new Error("Invalid JWT. Unauthorized Access.");
    }
    const resolved = await resolver(parent, args, context, info);
    return resolved;
  };
  
  export default authResolver;