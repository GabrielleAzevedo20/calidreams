import { useEffect, useState } from "react";

import api from "../../services/api";
import { Container } from "./styles";


interface IEvent {
    id: string;
    nomeevento: string;
    local: string;
    diasemana: string;
    horario: string;
    like: string;
    dislike: string;
}

export function EventTable() {
    const [events, setEvents] = useState<IEvent[]>([])

    useEffect(() => {
        api.get('events')
        .then(response => setEvents(response.data))
    }, [])

    async function deleteEvento(id: string) {
        await api.delete<IEvent>(`/events/${id}`);
    }


    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>Local</th>
                        <th>Dia da Semana</th>
                        <th>Horário</th>
                        <th>Like</th>
                        <td>Dislike</td>
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
                            <td>{event.like}</td>
                            <td>{event.dislike}</td>
                            <td>
                                <button onClick={() => deleteEvento(event.id)}>Deletar evento</button>
                                <button onClick={(async () => {
                                    await api.post(`/events/like/${event.id}`)
                                    api.get('/events').then( l => {setEvents(l.data)})})}>Like</button>
                                    
                                    
                                <button onClick={(async () => {
                                    await api.post(`/events/dislike/${event.id}`)
                                    api.get('/events').then( d => {setEvents(d.data)})
                        })}>Dislike</button>
                            </td>
                        </tr>
                        </tbody>
                        
                    ))}
                </tbody>
                

            </table>
        </Container>
    )
}

