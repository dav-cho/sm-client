export interface User {
  email: string;
  username: string;
  password?: string;
  // signedIn?: boolean;
}

export interface Post {
  author: string;
  title: string;
  body: string;
}
