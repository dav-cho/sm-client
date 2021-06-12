export interface User {
  id: string;
  email: string;
  username: string;
  created: string;
  last_login: string;
  posts?: Post[];
  comments?: Comment[];
}

export interface Post {
  id: string;
  title: string;
  body: string;
  published: string;
  author: string;
  author_id: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  title: string;
  body: string;
  published: string;
  author: string;
  author_id: string;
  post: string;
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

export type FormData = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
};
