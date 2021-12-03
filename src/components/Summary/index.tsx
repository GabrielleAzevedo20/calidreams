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
                    <p>Hello Katy Tour</p>
                    <img src={ tattooImg } alt="Meia Entradas" />
                </header>
                <strong> Meia Entrada </strong>
            </div>

            <div>
                <header>
                    <p>California Dreams Tour</p>
                    <img src={ tattoosImg } alt="Entrada Inteira" />
                </header>
                <strong> Entrada Inteira </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Prismatic World Tour</p>
                    <img src={ tattoossImg } alt="Esgotados" />
                </header>
                <strong> Esgotados </strong>
            </div>
        </Container>
    )
}