import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./Services/api";


interface Model {
    id: number;
    name: string;
    idade: number;
}
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

type ModelInput = Omit<Model, 'id'>;

interface TransactionsData {
    users: Model[];
    transactions: TransactionsProp[];
    createUser: (user: ModelInput) => Promise<void>;
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsData>(
    {} as TransactionsData
);

//Função principal
export function TransactionsProvider({ children }: TransactionsProvider) {

    //dados da rota
    const [transactions, setTransactions] = useState<TransactionsProp[]>([]);

    const [users, setUser] = useState<Model[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions));
    }, [])

    useEffect(() => {
        api.get('/users')
            .then(response => setUser(response.data.users));
    }, [])

    async function createUser(userModel: ModelInput) {
        const response = await api.post('/users', {
            userModel
        })
        const { transactions } = response.data;

        setUser([...users, transactions])
    }

    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        }) //importando api (inserindo valores dos inputs na rota transactions)
        const { transaction } = response.data;

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ users, transactions, createTransaction, createUser }}>
            {children}
        </TransactionsContext.Provider>
    )
}



