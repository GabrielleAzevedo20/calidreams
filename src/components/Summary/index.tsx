import React from 'react'
import tattooImg from '../../assets/tattoosSvg.svg'
import tattoosImg from '../../assets/tattoossSvg.svg'
import tattoossImg from '../../assets/tattoosssSvg.svg'
import { Container } from "./styles";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Meia Entrada</p>
                    <img src={ tattooImg } alt="Meia Entradas" />
                </header>
                <strong> Meia Entrada </strong>
                <strong>23/09/2011</strong>
            </div>

            <div>
                <header>
                    <p>Entrada Inteira</p>
                    <img src={ tattoosImg } alt="Entrada Inteira" />
                </header>
                <strong> Entrada Inteira </strong>
                <strong>23/09/2011</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Esgotados</p>
                    <img src={ tattoossImg } alt="Esgotados" />
                </header>
                <strong> Esgotados </strong>
                <strong>25/09/2011</strong>
            </div>
        </Container>
    )
}