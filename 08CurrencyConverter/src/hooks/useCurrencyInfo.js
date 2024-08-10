import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/3e44f7b1af900ae2f40fbad0/latest/${currency}`
    )
      // .then((res) => res.json())
      // .then((res) => setData(res.conversion_rates[currency]));

      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates));
  }, [currency]);

  console.log(data);
  return data;
}

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   let date = new Date();
//   console.log(date);
//   // console.log(typeof currency.toLowerCase());
//   console.log(currency);

//   currency = currency.toLowerCase();
//   console.log(currency);

//   date = date.toLocaleDateString().split("/").reverse().join("-");
//   console.log(date);

//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data[currency]);
//       });
//   }, [currency]);

//   console.log(data);
//   return data;
// }

export default useCurrencyInfo;