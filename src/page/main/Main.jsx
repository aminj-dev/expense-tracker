import React from "react";
import { Balance } from "../../component/Balance";
import { IncomeExpenses } from "../../component/IncomeExpenses";
import { TransactionList } from "../../component/TransactionList";
import { AddTransaction } from "../../component/AddTransaction";
import { Header } from "../../component/Header";

export const Main = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </>
  );
};
