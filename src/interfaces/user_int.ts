export interface IUserRequest {
  name_and_surname: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name_and_surname?: string;
  email?: string;
  password?: string;
}
