import { FormEvent, useContext, useState } from 'react';
import './styles';
import Modal from 'react-modal';
import { Botao, Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/Fechar.svg';
import entrada from '../../assets/Entradas.svg';
import saida from '../../assets/Saídas.svg';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    x: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ x, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useContext(TransactionsContext);

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            category,
            type,
            amount
        })

        setType('deposit');
        setTitle('');
        setAmount(0);
        setCategory('');

        onRequestClose();
        //transactions.push(data); Não posso mudar, adicionar um dado no array por conta da imutabilidade no stado
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
                    value={amount}
                    onChange={x => setAmount(Number(x.target.value))}
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