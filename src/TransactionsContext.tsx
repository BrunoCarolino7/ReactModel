import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./Services/api";

//Tipagem
interface TransactionsProp {
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}
interface TransactionsProvider {
    children: ReactNode; //sempre vincular o children com ReactNode
}
type TransactionInput = Omit<TransactionsProp, 'id' | 'createdAt'>;

interface TransactionsData {
    transactions: TransactionsProp[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsData>(
    {} as TransactionsData
);

//Função principal
export function TransactionsProvider({ children }: TransactionsProvider) {

    //dados da rota
    const [transactions, setTransactions] = useState<TransactionsProp[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));
    }, []) //vamos na rota de transaction, listamos todas as transactions com 'get'


    //preciso ter acesso à essa função no NewTransactionModal, então TransactionsContext não pode ter no 'value' só 'transactions', preciso também passar a
    //função para ter acesso la em NewTransactionModal
    function createTransaction(transaction: TransactionInput) {

        api.post('/transactions', transaction) //importando api (inserindo valores dos inputs na rota transactions)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}


