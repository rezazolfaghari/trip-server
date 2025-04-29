// src/types/user/user.type.ts

export type UserId = string;

export interface UserDTO {
  id: UserId;
  name: string;
  email: string;
}