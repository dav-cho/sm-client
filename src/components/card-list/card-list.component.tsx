import { Post, User } from '../../models/api.models';

import { Card } from '../card/card.component';

type CardListProps = {
  data: any[];
};

export const CardList = ({ data }: CardListProps) => {
  return (
    <div className="card-list-container">
      {data.map((item: any, index: number) => (
        <Card key={index} postData={item} />
      ))}
    </div>
  );
};
