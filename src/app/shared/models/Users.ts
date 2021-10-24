import { Role } from './Role';

export interface ResponseServiceUsers {
  ok: boolean;
  message: string;
  data: User[]
}

export interface User {
  _id: string;
  Nameuser: string;
  Name: string;
  Role: Role[];
}


