import { useEffect } from "react";
import { api } from "../../Services/api";
import { Container, Th } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <Th>Título</Th>
                        <Th>Preço</Th>
                        <Th>Categoria</Th>
                        <Th>Data</Th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="valor">R$ 12000,00</td>
                        <td>Venda</td>
                        <td>13/07/2010</td>
                    </tr>
                    <tr>
                        <td>Alugel</td>
                        <td className="saque">R$ -1100,00</td>
                        <td>Gasto</td>
                        <td>13/07/2010</td>
                    </tr>
                    <tr>
                        <td>Mercado</td>
                        <td className="saque">R$ -860,12</td>
                        <td>Gasto</td>
                        <td>13/07/2010</td>
                    </tr>
                </tbody>

            </table>
        </Container>
    )
}
