import React from 'react';
import { Summary } from '../Summary';
import { EventTable } from '../EventsTable';
import { Container } from './styles';


export function Dashboard() {
    return(
        <Container>
            <Summary />
            <EventTable />
        </Container>
    )
}