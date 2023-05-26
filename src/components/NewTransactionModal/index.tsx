import { FormEvent, useState } from 'react';
import './styles';
import Modal from 'react-modal';
import { Botao, Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/Fechar.svg';
import entrada from '../../assets/Entradas.svg';
import saida from '../../assets/Saídas.svg';
import { api } from '../../Services/api';

interface NewTransactionModalProps {
    x: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ x, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = ({
            title,
            value,
            category,
            type
        })
        api.post('/transactions', data) //importando api (inserindo valores dos inputs na rota transactions)
    }

    return (
        <Modal
            isOpen={x}
            onRequestClose={onRequestClose}
            overlayClassName={"react-modal-overlay"}
            className={"react-modal-content"}>

            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container onSubmit={handleCreateNewTransaction} >

                <h2>Cadastrar Transação</h2>

                <input
                    placeholder='Titulo'
                    type='text'
                    value={title}
                    onChange={x => setTitle(x.target.value)}
                />

                <input placeholder='Valor'
                    type='number'
                    value={value}
                    onChange={x => setValue(Number(x.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        //className={type == 'deposit' ? 'active' : ''}
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={entrada} />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={saida} />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                    type='text'
                    value={category}
                    onChange={x => setCategory(x.target.value)}
                />

                <Botao type='submit'>Cadastrar</Botao>
            </Container>
        </Modal >
    )
}