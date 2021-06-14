import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Post } from '../../types/index.types';
import { formatDate } from '../../utils/helpers';
import { getApiDetail } from '../../utils/api.utils';

import './styles/post-detail.styles.scss';

interface PostDetailProps {
  match: any;
}

export const PostDetail = ({ match }: PostDetailProps) => {
  const [post, setPost] = useState<Post>();
  const { push } = useHistory();
  const { id } = match.params;

  const getPost = useCallback(async () => {
    const post = await getApiDetail('posts', id);

    if (post) setPost(post);
  }, [id]);

  useEffect(() => {
    if (id) getPost();
  }, [id, getPost]);

  return post ? (
    <div className="post-detail-container">
      <span className="post-detail">post detail</span>
      <h2 className="post-detail-title">{post.title}</h2>
      <div className="post-detail-info">
        <h3>post info:</h3>
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
      </div>
      <div className="post-detail-body">
        <h3>post body:</h3>
        <p>{post.body}</p>
        <h3>post reactions:</h3>
        <div className="reactions"></div>
      </div>
      <div className="post-detail-extras">
        <h3>post comments:</h3>
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
        <button
          onClick={() => push(`posts/${post.id}/edit`)}
          className="post-detail-button"
        >
          edit
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};
