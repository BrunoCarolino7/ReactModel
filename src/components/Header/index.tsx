import logo from '../../assets/logo.svg';
import { Container, Wrapper } from './styles';
import './styles.ts';

interface HeaderProps {
    x: () => void;
}

export function Header({ x }: HeaderProps) {
    return (
        <Container>
            <Wrapper>
                <img src={logo} alt='logo' />
                <button onClick={x}>Nova Transação</button>
            </Wrapper>
        </Container>
    )
}