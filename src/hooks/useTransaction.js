import { useReducer } from "react";
import AppReducer from "../context/AppReducer";

export const useTransaction = () => {
    const initialState = { transactions: [] }
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // actions
    const deleteTransaction = (id) => {
        dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
        });
    }

    return {
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }
}