import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import EmptyPage from './components/EmptyPage';
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import DiskApi from './components/DiskApi';
import { Navigate } from 'react-router-dom';



function App() {

  const [token, setToken] = useState(null);

  // useEffect(() => {

  //   if (!localStorage.getItem('access_token')) {
  //     yandexInit(setToken)
  //     setToken(localStorage.getItem('access_token'))
  //   }
  //   setToken(localStorage.getItem('access_token'))
  // }, [token, setToken])

  return (
    <Routes>
      <Route path='/' element={<Nav
        setToken={setToken}
        token={token} />} >
        <Route path='/' element={<DiskApi />} />
        <Route path='/auth' element={<Auth
          token={token}
          setToken={setToken} />} />
        <Route path='/empty' element={<EmptyPage />} />
        <Route path='*' element={<Navigate to='/' replace={true} />} />
      </Route>
    </Routes >
  );
}

export default App;
