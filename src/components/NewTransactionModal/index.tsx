import './styles';
import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <table>
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Marcos</td>
                        <td>8.5</td>
                    </tr>
                    <tr>
                        <td>Carla</td>
                        <td>9.0</td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    )
}