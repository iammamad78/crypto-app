import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading, currency }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
              <th>Graph</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({
  coin: {
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
  currency,
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}
      </td>
      <td>{total_volume}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} />
      </td>
    </tr>
  );
};
