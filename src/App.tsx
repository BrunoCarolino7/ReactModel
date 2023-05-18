import React, { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

export function App() {

  const [newTransactionModal, setNewTransactionModal] = useState(false)

  function openNewTransactionModal() {
    setNewTransactionModal(true)
  }

  function closeNewTransactionModal() {
    setNewTransactionModal(false)
  }

  return (
    <>
      <Header x={openNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal x={newTransactionModal} onRequestClose={closeNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}