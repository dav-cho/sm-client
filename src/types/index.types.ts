export interface User {
  id: string;
  email: string;
  username: string;
  created: string;
  last_login: string;
}

export interface Post {
  author: string;
  title: string;
  body: string;
}

export interface AuthUser {
  email: string;
  username: string;
  date_joined: string;
  last_login: string;
  password?: string;
  loggedIn: boolean;
}

export type RegisterFormData = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
};
