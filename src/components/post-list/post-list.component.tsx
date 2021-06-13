import { Post } from '../../types/index.types';

import { PostCard } from '../post-card/post-card.component';

import './post-list.styles.scss';

type PostListProps = {
  postsList: Post[];
};

export const PostList = ({ postsList }: PostListProps) => {
  return (
    <div className="post-list-container">
      {postsList.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
