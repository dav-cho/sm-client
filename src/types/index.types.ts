export interface User {
  id: number;
  email: string;
  username: string;
  created: Date;
  last_login: Date;
  posts?: Post[];
  comments?: Comment[];
}

export interface Post {
  id: number;
  title: string;
  body: string;
  published: Date;
  updated?: Date;
  author: Date;
  author_id: number;
  comments: Comment[];
  reactions: Reaction[];
}

export interface Comment {
  id: number;
  title: string;
  body: string;
  published: Date;
  updated?: Date;
  author: string;
  author_id: number;
  post: Post;
}

export interface Reaction {
  id: number;
  title: string;
  body: string;
  published: Date;
  author: string;
  author_id: number;
  post?: Post;
  comment?: Comment;
}
