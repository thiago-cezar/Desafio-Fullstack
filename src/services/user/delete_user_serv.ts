import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { User } from "../../models/user_model";

export const deleteUserServ = async (
  id: string
): Promise<User | Array<string | number>> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  await userRepository.delete(id);

  return ["User deleted", 204];
};
