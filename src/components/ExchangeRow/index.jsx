export function ExchangeRow(props) {
  const { rank, name, volumeUsd, percentTotalVolume } = props.data;

  return (
    <div className="exchanges-list-row">
      <div>{rank}</div>
      <div>{name}</div>
      <div>{volumeUsd}</div>
      <div>{percentTotalVolume}</div>
    </div>
  );
}
