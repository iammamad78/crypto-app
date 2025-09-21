import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableCoin({ coins }) {
  console.log(coins);

  return (
    <div>
      <table>
        
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24H</th>
            <th>Total Volume</th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <div>
                  <img src={coin.image} />
                  <span>{coin.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>{coin.name}</td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td>{coin.market_cap_change_percentage_24h.toFixed(2)}</td>
              <td>{coin.total_volume.toLocaleString()}</td>
              <td>
                <img
                  src={
                    coin.market_cap_change_percentage_24h > 0
                      ? chartUp
                      : chartDown
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoin;
