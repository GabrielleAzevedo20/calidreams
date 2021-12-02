import { useState, FormEvent } from 'react';
import api from '../../services/api'

import Modal from 'react-modal'
import closeSVG from '../../assets/close.svg'
import { Container } from './styles'

interface NewEventModelProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewEventModel({ isOpen, onRequestClose }: NewEventModelProps) {

    const [nomeevento, setNomeEvento] = useState('')
    const [local, setLocal] = useState('')
    const [diasemana, setDiaSemana] = useState('')
    const [horario, setHorario] = useState('')
    const [type, setType] = useState('eventss')

    async function handleCreateNewEvent(event: FormEvent){
        event.preventDefault();

        const data = {
            nomeevento, 
            local,
            diasemana,
            horario,
            type
        }

        await api.post('/events', data);

        setNomeEvento('')
        setLocal('')
        setDiaSemana('')
        setHorario('')
        setType('eventss')

        alert('Novo evento cadastrado com sucesso')
    }

    


    return(
            <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                    <button type="button" onClick={onRequestClose} className="react-modal-close">
                        <img src={closeSVG} alt="Fechar modal" />
                    </button>
                    
            <Container onSubmit={handleCreateNewEvent}>
                <h2>Cadastrar evento</h2>

                <input type="text" placeholder="Nome"
                    value={nomeevento}
                    onChange={event => setNomeEvento (event.target.value)}
                />

                <input type="text" placeholder="Dia da Semana"
                    value={diasemana}
                    onChange={event => setDiaSemana(event.target.value)}
                    />

                <input type="text" placeholder="Local"
                    value={local}
                    onChange={event => setLocal (event.target.value)}
                />

                <input type="text" placeholder="Horario"
                    value={horario}
                    onChange={event => setHorario(event.target.value)}
                />
                

                <button type="submit">Cadastrar</button>
            </Container>
    </Modal>
    )
}