import { Post } from '../../types/index.types';
import { formatDate } from '../../utils/helpers';

import './post-card.styles.scss';

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card-container">
      <h3>post title: {post.title}</h3>
      <h3>author: {post.author}</h3>
      <h3>date: {formatDate(post.published)}</h3>
      <h3>body: {post.body}</h3>
    </div>
  );
};
