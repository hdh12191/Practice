import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [coin, setCoin] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const getMoney = (event) => setMoney(event.target.value);
  const getCoin = (event) => setCoin(event.target.value);

  console.log(coin);
  console.log(money);
  console.log(money / coin);
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={getCoin}>
          <option value="0"> Select your coin!</option>
            {coins.map((coin, index) => (
              <option value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <input
            onChange={getMoney}
            value={money}
            placeholder="Write your dollars"
            type="number"
          />
        </div>
      )}

      <div>
        <h4>You can get {coin !== 0 ? money / coin : 0} coins!</h4>
      </div>
    </div>
  );
}

export default App;
