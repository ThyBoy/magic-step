import "./ItemComponent.css";

export default function ItemComponent(props) {
  const { imgUrl, itemName, price, properties, seller } = props.itemDetails;
  return (
    <div className="d-flex mb-3 ">
      <div className="temp">
        {props.width ? (
          <img
            className="item-img"
            style={{ width: `${props.width}%` }}
            src={imgUrl}
            alt={itemName}
          />
        ) : (
          <img className="item-img" src={imgUrl} alt={itemName} />
        )}
      </div>
      <div className="pt-4">
        <h4>{itemName}</h4>
        <p className="m-0">{"$" + price}</p>
        <p className="m-0">{properties}</p>
        <p className="m-0">{seller}</p>
      </div>
    </div>
  );
}
