import { Container } from "./styles";
import Entradas from '../../assets/Entradas.svg';
import Saídas from '../../assets/Saídas.svg';
import total from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../hooks/TransactionsContext";


export function Summary() {

    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }
        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div className="box">

                <div className="box1">
                    <div className="box-items">
                        <small>Entradas</small>
                        <img src={Entradas} alt="entradas" />
                    </div>
                    <strong>{summary.deposits}</strong>
                </div>

                <div className="box2">
                    <div className="box-items">
                        <small>Saídas</small>
                        <img src={Saídas} alt="saídas" />
                    </div>
                    <strong>{summary.withdraws}</strong>
                </div>

                <div
                    className="box3"
                >
                    <div className="box-items">
                        <small>Total</small>
                        <img src={total} alt="total" />
                    </div>
                    <strong>{summary.total}</strong>
                </div>

            </div>
        </Container>
    )
}