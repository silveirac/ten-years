import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.position = "fixed"
},[])
  return (
    <GlobalProvider>
      <Outlet/>
    </GlobalProvider>
  )
}

export default App
