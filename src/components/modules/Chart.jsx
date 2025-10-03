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
  console.log(chart);

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>

      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types}>
          <button>Prices</button>
          <button>Market Caps</button>
          <button>Total Volume</button>
        </div>
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
