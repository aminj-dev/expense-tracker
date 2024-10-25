import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction => transaction.amounts));
  let total = amounts.reduce((allAmounts, newAmount) => (allAmounts += newAmount), 0).toFixed(2);
  
  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

