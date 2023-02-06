import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { IUserRequest } from "../../interfaces/user_int";
import { User } from "../../models/user_model";

export const createUserServ = async ({
  name_and_surname,
  email,
  password,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  if (!password) {
    throw new AppError("Password is missing", 401);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name_and_surname,
    email,
    password: hashedPassword,
  });

  await userRepository.save(user);

  return user;
};
