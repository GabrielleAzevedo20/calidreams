import { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { BsTrash2Fill } from 'react-icons/bs';
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
                        <ul>
                        <th> Evento </th>
                        <th> Local </th>
                        <th> Dia da Semana </th>
                        <th> Horário </th>
                        <th> Like </th>
                        <th> Dislike </th>
                        <th>Deletar Evento</th>
                        </ul>
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
                                <button onClick={(async () => {
                                    await api.post(`/events/like/${event.id}`)
                                    api.get('/events').then( l => {setEvents(l.data)})})}
                                    >Like <FaThumbsUp /> </button>
                            </td>

                            <td>
                                <button onClick={(async () => {
                                    await api.post(`/events/dislike/${event.id}`)
                                    api.get('/events').then( d => {setEvents(d.data)})
                                    })}>Dislike <FaThumbsDown /> </button>
                            </td>

                            <td>
                                <button onClick={() => deleteEvento(event.id)}
                                >Deletar evento <BsTrash2Fill /> </button>
                            </td>
                        </tr>
                        </tbody>
                        
                    ))}
                </tbody>
                

            </table>
        </Container>
    )
}

