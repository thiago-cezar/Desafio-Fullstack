export interface IContactRequest {
  full_name: string;
  email: string;
  telephone: string;
  userId: string;
}

export interface IContactUpdate {
  full_name?: string;
  email?: string;
  telephone?: number;
}
