import { Role } from './role.model';

export interface IUser {
  username: string;
  uuid?: string;
  role: Role;
}
