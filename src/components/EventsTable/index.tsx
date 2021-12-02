import { useEffect, useState } from "react";

import api from "../../services/api";
import { Container } from "./styles";


interface IEvent {
    nomeevento: string;
    local: string;
    diasemana: string;
    horario: string;
}

export function EventTable() {
    const [events, setEvents] = useState<IEvent[]>([])

    useEffect(() => {
        api.get('events')
        .then(response => setEvents(response.data))
    }, [])
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        
                        <th>Evento</th>
                        <th>Local</th>
                        <th>Dia da Semana</th>
                        <th>Horário</th>
                    </tr>
                </thead>

                <tbody>
                    {events.map(event => (
                    
                        <tbody>
                        <tr>
                            <td>{event.nomeevento}</td>
                            <td>{event.local}</td>
                            <td>{event.diasemana}</td>
                            <td>{event.horario}</td>
                        </tr>
                        </tbody>
                        
                    ))}
                </tbody>
                

            </table>
        </Container>
    )
}

