import { Link } from "react-router-dom";

export function CoinRow(props) {
  const { id, rank, name, priceUsd, marketCapUsd, symbol } = props.data;
  const image = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
  const url = `/assets/${id}`;

  return (
    <div className="coins-row">
      <div>{rank}</div>
      <div className="coin-name">
        <div className="coin-logo">
          <img src={image} alt="" />
        </div>
        <div>
          <Link to={url}>{name}</Link>
        </div>
      </div>
      <div>{priceUsd}</div>
      <div>{marketCapUsd}</div>
    </div>
  );
}
