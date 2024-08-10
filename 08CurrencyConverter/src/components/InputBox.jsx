/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 text-left font-bold">
        <label
          htmlFor={amountInputId}
          className="text-black/70 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          type="number"
          id={amountInputId}
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="outline-none w-full bg-transparent py-1.5"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/50 text-sm font-bold mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1.5 py-1.5 bg-gray-200 hover:bg-gray-300 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
