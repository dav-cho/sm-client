import { Post } from '../../types/index.types';
import { formatDate } from '../../utils/helpers';

import './post-detail.styles.scss';

type PostDetailProps = {
  post: Post;
};

export const PostDetail = ({post}: PostDetailProps) => {
  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
  };

  return (
    <div className="post-detail-container">
      <h2>post detail</h2>
      <div className="post-detail-info">
        <h3 className="post-detail-title">post info:</h3>
        <ul>
          <li>
            id: <b>{post.id}</b>
          </li>
          <li>
            by: <b>{post.author}</b>
          </li>
          <li>
            account: <b>{post.author_id}</b>
          </li>
          <li>
            date: <b>{formatDate(post.published)}</b>
          </li>
        </ul>
        <div className="reactions">
          <h4>post reactions:</h4>
        </div>
      </div>
      <div className="post-detail-body">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <div className="post-detail-extras">
        {post.comments &&
          post.comments.map(comment => (
            <div key={comment.id} className="post-detail-comments">
              <ul>
                <li>
                  <strong>{comment.title}</strong>
                </li>
                <li>id: {comment.id}</li>
                <li>body: {comment.body}</li>
                <li>author: {comment.author}</li>
                <li>author id: {comment.author_id}</li>
                <li>published: {formatDate(comment.published)}</li>
              </ul>
            </div>
          ))}
      </div>
      <div className="post-detail-button-container">
        <button className="post-detail-button">like/react</button>
        <button className="post-detail-button">comment</button>
        <button onClick={handleEditClick} className="post-detail-button">
          edit
        </button>
      </div>
    </div>
  );
};
