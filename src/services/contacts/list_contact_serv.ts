import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { User } from "../../models/user_model";

export const listContactUserServ = async (userId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  const contactsUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!contactsUser) {
    throw new AppError("Contacts not found", 404);
  }

  return contactsUser;
};
