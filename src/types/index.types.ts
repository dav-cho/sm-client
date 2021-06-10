export interface User {
  email: string;
  username: string;
  date_joined: string;
  last_login: string;
  password?: string;
  // loggedIn: boolean;
}

// export interface User {
//   email: string;
//   username: string;
//   password?: string;
//   // signedIn?: boolean;
// }

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