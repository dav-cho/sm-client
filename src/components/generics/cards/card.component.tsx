import './styles/card.styles.scss';

type CardProps<apiItemData> = {
  itemData: apiItemData;
  properties: (keyof apiItemData)[];
};

export const Card = <T,>({ itemData, properties }: CardProps<T>) => {
  return (
    <div className="card-container">
      {properties.map((property, index) => (
        <h3 key={index}>
          {property}: {itemData[property]}
        </h3>
      ))}
    </div>
  );
};
