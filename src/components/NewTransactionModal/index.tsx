import './styles';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/Fechar.svg';
import entrada from '../../assets/Entradas.svg';
import saida from '../../assets/Saídas.svg';


interface NewTransactionModalProps {
    x: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ x, onRequestClose }: NewTransactionModalProps) {

    return (
        <Modal isOpen={x} onRequestClose={onRequestClose} overlayClassName={"react-modal-overlay"} className={"react-modal-content"}>

            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder='Titulo'></input>
                <input placeholder='Valor' type='number'></input>

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={entrada} />
                        <span>Entrada</span>
                    </button>

                    <button type='button'>
                        <img src={saida} />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>


                <input placeholder='Categoria' type='text'></input>
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}