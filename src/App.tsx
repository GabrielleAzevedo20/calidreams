import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { NewEventModel } from './components/NewEventModal';

export function App() {
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false)

  function handleOpenNewEventModal() {
    setIsNewEventModalOpen(true)
  }

  function handleCloseNewEventModal() {
    setIsNewEventModalOpen(false)
  }

  
  return (
    <div className="App">
      <Header onOpenNewEventsModal={handleOpenNewEventModal} />
      <Dashboard />
      <NewEventModel isOpen={isNewEventModalOpen} onRequestClose={handleCloseNewEventModal}/>

      <GlobalStyle />
    </div>
  );
}

export default App;
