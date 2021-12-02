import { createGlobalStyle } from 'styled-components'
import cottonCandy from '../assets/cottonCandy.jpg'

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #FFC4D0;
  --pink: #FFE6EB;
  --blue: #CBF1F5;
  --blue-light: #A6E3E9;

  --text-title: #DC143C;
  --text-body: #484C7F;
  --shape: #DDB6C6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%
  }
  @media (max-width: 720px) {
    font-size: 87.5%
  }
}

body {
  background: #FFC4D0 url(${cottonCandy}) no-repeat fixed;
  background-size: 1600px 750px;
  -webkit-font-smoothing: antialiased;
}


body, input, textarea, button {
  font-family: 'Roboto' sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disable] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}


.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 0.24rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
}
`