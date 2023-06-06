import React, { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

export function App() {

  const [newTransactionModal, setNewTransactionModal] = useState(false)

  function openNewTransactionModal() {
    setNewTransactionModal(true)
  }

  function closeNewTransactionModal() {
    setNewTransactionModal(false)
  }

  return (
    <TransactionsProvider>
      <Header x={openNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal x={newTransactionModal} onRequestClose={closeNewTransactionModal} />
      <Footer />
      <GlobalStyle />
    </TransactionsProvider>
  );
}