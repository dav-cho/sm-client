import { Card } from './card.component';

import './styles/card-list.styles.scss'

type CardListProps<apiListData> = {
  listData: apiListData[];
  properties: (keyof apiListData)[];
};

export const CardList = <dataType,>({
  listData,
  properties,
}: CardListProps<dataType>) => {
  // console.log('~ listData', listData);

  return (
    <div className="card-list-container">
      {listData.map((item, index) => (
        <Card key={index} itemData={item} properties={properties} />
      ))}
    </div>
  );
};
