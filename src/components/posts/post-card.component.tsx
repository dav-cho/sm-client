import { useHistory } from 'react-router-dom';

import { Post } from '../../types/index.types';
import { formatDate } from '../../utils/helpers';
import { deleteApi } from '../../utils/api.utils';

import './styles/post-card.styles.scss';

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { push } = useHistory();

  const handleDeleteClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const res = await deleteApi('posts', post.id);
    console.log('~ RESPONSE STATUS', res?.status);
  };

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
        <button
          className="post-card-button"
          onClick={() => push(`/posts/${post.id}`)}
        >
          detail
        </button>
        <button
          className="post-card-button"
          onClick={() => push(`posts/${post.id}/edit`)}
        >
          edit
        </button>
        <button className="post-card-button" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
};

/**
 * TODO:
 **/

// const checkEditPermissions = () => {
//   if (!user || !post) return;
//   console.log('~ USER ID', user.id);
//   console.log('~ AUTHOR ID', post.author_id);

//   return user.id === post.author_id ? true : false;
// };

// const handleEditClick = () => {
//   if (checkEditPermissions()) {
//     push(`posts/${post.id}/edit`);
//   } else {
//     return (
//       <Redirect to={{ pathname: '/error', state: { type: 'access' } }} />
//     );
//   }
// };
