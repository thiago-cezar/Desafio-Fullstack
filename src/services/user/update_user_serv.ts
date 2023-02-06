import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { IUserUpdate } from "../../interfaces/user_int";
import { User } from "../../models/user_model";

export const updateUserServ = async (
  { name_and_surname, email, password }: IUserUpdate,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    name_and_surname,
    email,
    password: password ? await hash(password, 10) : findUser.password,
  });

  const user = await userRepository.findOneBy({
    id,
  });

  return user!;
};
