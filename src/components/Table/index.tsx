import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container, Th } from "./styles";

export function TransactionsTable() {

    const { users } = useContext(TransactionsContext);
    const { transactions } = useContext(TransactionsContext);

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

                    {transactions.map(user => (
                        <tr key={user.id}>

                            <td>{user.title}</td>
                            <td>{user.amount}</td>
                            <td>{user.category}</td>
                            <td>{user.createdAt}</td>

                        </tr>
                    ))}

                    {users.map(user => (
                        <tr key={user.id}>

                            <td>{user.name}</td>
                            <td>{user.idade}</td>

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