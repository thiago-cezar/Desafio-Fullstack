import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { IContactUpdate } from "../../interfaces/contacts_int";
import { Contacts } from "../../models/contacts_model";

export const updateContactServ = async (
  { email, full_name, telephone }: IContactUpdate,
  id: string,
): Promise<Contacts> => {
  const Repository = AppDataSource.getRepository(Contacts);

  const findContact = await Repository.findOneBy({
    id,
  });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await Repository.update(id, {
    full_name,
    email,
    telephone,
  });

  const contact = await Repository.findOneBy({
    id,
  });

  return contact!;
};
