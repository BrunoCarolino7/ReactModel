import { useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container, Th } from "./styles";

export function TransactionsTable() {

    const { transactions } = useContext(TransactionsContext)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <Th>Título</Th>
                        <Th>Valor</Th>
                        <Th>Categoria</Th>
                        <Th>Data</Th>
                    </tr>
                </thead>

                <tbody>

                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}













// const [preco, setPreco] = useState('');
// //uma mutação-lista
// const [lista, setLista] = useState([]);

// //função que cria o objeto da lista e adiciona à lista
// function CriaLista() {
//     const newLista = {
//         titulo: titulo,
//         categoria: categoria,
//         preco: preco,
//         time: new Date().toLocaleTimeString("pt-BR", {
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//         }),
//     }
//     setLista((prevState) => [...prevState, newLista]);
// }



// <div>
// <label>Titulo</label>
// <input type='text' onChange={(x) => setTitulo(x.target.value)} />

// <label>Preço</label>
// <input type='number' onChange={(x) => setPreco(x.target.value)} />

// <label>Categoria</label>
// <input type='text' onChange={(x) => setCategoria(x.target.value)} />

// <button type="button" onClick={CriaLista}>Criar</button>

// {/* {lista.map((listas) => <Card key={listas.time} titulo={listas.name} preco={listas.preco} categoria={listas.categoria} />)} */}
// </div>