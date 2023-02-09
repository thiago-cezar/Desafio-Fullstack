import AppDataSource from "../../data-source";
import { AppError } from "../../errors/app_error";
import { Contacts } from "../../models/contacts_model";

export const deleteContactServ = async (id: string) => {
  const Repository = AppDataSource.getRepository(Contacts);

  const findContact = await Repository.findOneBy({
    id: id,
  });
  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }
  await Repository.delete(id);

  return;
};
