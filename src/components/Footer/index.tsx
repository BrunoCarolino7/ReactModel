import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import './styles';
import { Container } from './styles';

export function Footer() {

    const { createUser } = useContext(TransactionsContext);

    const [name, setName] = useState('');
    const [idade, setIdade] = useState(0);

    async function handleCreate(event: FormEvent) {
        event.preventDefault();

        await createUser({
            name,
            idade,
        })
    }

    return (
        <Container onSubmit={handleCreate}>

            <input
                placeholder='Titulo'
                type='text'
                value={name}
                onChange={x => setName(x.target.value)}
            />

            <input
                placeholder='Titulo'
                type='text'
                value={idade}
                onChange={x => setIdade(Number(x.target.value))}
            />

            <button type='submit'>Criar</button>

        </Container>
    )
}