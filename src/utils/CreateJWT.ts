import jwt from "jsonwebtoken";

const createJWT = (userId: number): string => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || "");
  return token;
};

export default createJWT;