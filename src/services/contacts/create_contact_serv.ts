import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { IContactRequest } from "../../interfaces/contacts_int";
import { Contacts } from "../../models/contacts_model";
import { User } from "../../models/user_model";

export const createContactServ = async ({
  email,
  full_name,
  telephone,
  userId,
}: IContactRequest): Promise<Contacts> => {
  const contactsRepository = AppDataSource.getRepository(Contacts);
  const usersRepository = AppDataSource.getRepository(User);

  const user = await usersRepository.findOneBy({
    id: userId,
  });

  if (!user) throw new AppError("User not found", 404);

  const contact = contactsRepository.create({
    email: email,
    full_name: full_name,
    telephone: telephone,
    user: user,
  });

  await contactsRepository.save(contact);

  return contact;
};
