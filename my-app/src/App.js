import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  useEffect(() => {
    document.body.classList.add('body');
  }, []);
  return (
    <>
      <h1 className='header'>The Bio Generator App</h1>
      <Main/>
    </>
  );
}

export default App;
