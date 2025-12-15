import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

const tg = window.Telegram.WebApp;

function App() {

  console.log(window);

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
