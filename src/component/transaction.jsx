import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amounts < 0 ? "-" : "+";

    return ( 
        <li className={transaction.amounts < 0 ? "negative" : "positive"}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amounts)}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  );
}


