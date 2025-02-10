import { getAssetsList } from "../../data/server.js";
import "./coins.css";
import { useEffect, useState } from "react";

import { CoinRow } from "../CoinRow";

export function Coins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getAssets() {
      setHasError(false);
      setLoading(true);
      try {
        const result = await getAssetsList();

        setData(result);
      } catch (e) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    getAssets();
  }, []);

  return (
    <>
      {loading ? <div>Loading...</div> : null}
      {hasError ? <div>An error occurred..</div> : null}
      <div className="coins">
        <div className="coins-row">
          <div>Rank</div>
          <div>Name</div>
          <div>Price</div>
          <div>Market Cap</div>
        </div>
        {data.map((itemData) => {
          return <CoinRow data={itemData} key={itemData.id} />;
        })}
      </div>

      <a
        href="https://google.com"
        id="more"
        onClick={async (event) => {
          event.preventDefault();

          const result = await getAssetsList();

          setData(result);
        }}
      >
        View More
      </a>
    </>
  );
}
