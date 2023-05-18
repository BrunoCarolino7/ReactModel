import { Container } from "./styles";
import Entradas from '../../assets/Entradas.svg';
import Saídas from '../../assets/Saídas.svg';
import total from '../../assets/total.svg';

export function Summary() {
    return (
        <Container>
            <div className="box">

                <div className="box1">
                    <div className="box-items">
                        <small>Entradas</small>
                        <img src={Entradas} alt="entradas" />
                    </div>
                    <strong>R$ 17.400,00</strong>
                </div>

                <div className="box2">
                    <div className="box-items">
                        <small>Saídas</small>
                        <img src={Saídas} alt="saídas" />
                    </div>
                    <strong>R$ 12.278,17</strong>
                </div>

                <div className="box3">
                    <div className="box-items">
                        <small>Total</small>
                        <img src={total} alt="total" />
                    </div>
                    <strong>R$ 1.522,33</strong>
                </div>

            </div>
        </Container>
    )
}