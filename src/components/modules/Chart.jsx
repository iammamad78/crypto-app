import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Chart.module.css";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  const typeHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      const type = e.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={styles.container}>
      {/* Chart Modal */}
      <div className={styles.chart}>
        {/* modal header */}
        <div className={styles.header}>
          <div className={styles.name}>
            <img src={chart.coin.image} />
            <p>{chart.coin.name}</p>
          </div>

          {/* Close Btn */}
          <div className={styles.cross} onClick={() => setChart(null)}>
            X
          </div>
        </div>
        {/* modal graph */}
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        {/* modal Btns */}
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        {/* modal details */}
        <div className={styles.details}>
          <div>
            <p>Prices: </p>
            <span> ${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span> ${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Cap: </p>
            <span> {chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

function ChartComponent({ data, type }) {
  return (
    <LineChart width={760} height={300} data={data}>
      <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px" />
      <CartesianGrid stroke="#404042" />
      <YAxis dataKey={type} domain={["auto", "auto"]} />
      <XAxis dataKey="date" hide />
      <Legend />
      <Tooltip />
    </LineChart>
  );
}
