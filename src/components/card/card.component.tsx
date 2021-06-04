import { Post, User } from '../../models/api.models';

import './card.styles.scss';

type CardProps = {
  postData?: Post;
};
export const Card = ({ postData }: CardProps) => {
  return (
    <div className="card-container">
      {postData && (
        <>
          <h3>title: {postData.title}</h3>
          <h4>author id: {postData.author}</h4>
          <p>{postData.body}</p>
        </>
      )}
    </div>
  );
};
