import { Role } from './role.model';

export interface User {
  username: string;
  uuid?: string;
  role: Role;
}
