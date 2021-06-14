import { Link, useHistory } from 'react-router-dom';

import { Post } from '../../types/index.types';
import { formatDate } from '../../utils/helpers';

import { PostDetail } from './post-detail.component';

import './styles/post-card.styles.scss';

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { push } = useHistory();

  const handleDetailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('~ handleDetailClick');
    push(`posts/${post.id}`);
    return <PostDetail post={post} />;
  };

  // const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   push(`posts/${post.id}`);
  //   // return <Link to={`posts/${post.id}`} />;
  // };

  return (
    <div className="post-card-container">
      <div className="post-card-info">
        <h3 className="post-card-title">post info:</h3>
        <ul>
          <li>
            id: <b>{post.id}</b>
          </li>
          <li>
            author: <b>{post.author}</b>
          </li>
          <li>
            author_id: <b>{post.author_id}</b>
          </li>
          <li>
            published: <b>{formatDate(post.published)}</b>
          </li>
          {post.updated && (
            <li>
              updated: <b>{formatDate(post.updated)}</b>
            </li>
          )}
        </ul>
        {post.reactions.length > 0 && (
          <div className="post-reactions">
            <h4>post reactions:</h4>
          </div>
        )}
      </div>
      <div className="post-card-body">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div className="post-card-extras">
        {post.comments &&
          post.comments.map(comment => (
            <div key={comment.id} className="post-card-comments">
              <ul>
                <li>
                  <strong>{comment.title}</strong>
                </li>
                <li>id: {comment.id}</li>
                <li>body: {comment.body}</li>
                <li>author: {comment.author}</li>
                <li>author_id: {comment.author_id}</li>
                <li>published: {formatDate(comment.published)}</li>
                {comment.updated && (
                  <li>updated: {formatDate(comment.updated)}</li>
                )}
              </ul>
            </div>
          ))}
      </div>
      <div className="post-card-button-container">
        <button className="post-card-button">like/react</button>
        <button className="post-card-button">comment</button>
        <button className="post-card-button" onClick={handleDetailClick}>
          detail
        </button>
        {/* <button onClick={handleEditClick} className="post-card-button"> */}
        <button className="post-card-button">
          <Link to={`posts/${post.id}`}>edit</Link>
        </button>
      </div>
    </div>
  );
};
