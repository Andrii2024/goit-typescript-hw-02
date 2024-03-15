/*
  У вас є перелік UserRole, який використовується для
   класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, 
  який зіставлятиме кожну роль користувача з її описом.
*/

type PartialRoleDescription = Partial<Record<UserRole, string>>;

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: PartialRoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
