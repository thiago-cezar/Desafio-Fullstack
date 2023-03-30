import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { IUserLogin } from "../../interfaces/user_int";
import { User } from "../../models/user_model";

export const loginServ = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    {
      expiresIn: "1d",
      subject: user.id,
    },
    process.env.SECRET_KEY as string
  );
  return token;
};
