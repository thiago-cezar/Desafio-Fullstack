import AppDataSource from "../../data-source";
import { User } from "../../models/user_model";

export const listUsersServ = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users;
};
