import { getExchangesList } from "../../data/server.js";
import "./exchanges.css";
import { useEffect, useState } from "react";
import { ExchangeRow } from "../ExchangeRow";

export function ExchangesList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  console.log({ data });

  useEffect(() => {
    async function getExchangesAnUpdateState() {
      setHasError(false);
      setLoading(true);
      try {
        const result = await getExchangesList();

        setData(result);
      } catch (e) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    getExchangesAnUpdateState();
  }, []);

  return (
    <>
      {loading ? <div>Loading...</div> : null}
      {hasError ? <div>An error occurred..</div> : null}
      <div className="exchanges-list">
        <div className="exchanges-list-row">
          <div>Rank</div>
          <div>Name</div>
          <div>Volume</div>
          <div>Total</div>
        </div>

        {data.map((exchangeData) => {
          return (
            <ExchangeRow data={exchangeData} key={exchangeData.exchangeId} />
          );
        })}
      </div>
    </>
  );
}
