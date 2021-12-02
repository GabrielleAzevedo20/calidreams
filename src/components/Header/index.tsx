
import logoImg from '../../assets/logoImg.svg'
import { Content } from './styles'

interface HeaderProps {
  onOpenNewEventsModal: () => void;
}

export function Header({ onOpenNewEventsModal }: HeaderProps) {
    return(
        
            <Content>
              <img src={logoImg} alt="Katy Perry" />
              <button type="button" onClick={onOpenNewEventsModal}>
                Novo Evento
              </button>
            </Content>
    )
}