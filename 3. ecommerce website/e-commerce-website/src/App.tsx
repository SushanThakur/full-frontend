import { useEffect, useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';


function App() {
  const [isLog, setIsLog] = useState('flase');

  useEffect(() => {
    window.addEventListener('load', () => {
      localStorage.getItem('isLog') ? setIsLog('true') : setIsLog('false');
    })
  }, [isLog])

  const logOut = () => {
    localStorage.setItem('isLog', 'false');
    setIsLog('false');
    // console.log('logout sucessful');
  }

  const logIn = () => {
    localStorage.setItem('isLog', 'true');
    setIsLog('true');
    // console.log('login sucessful');
  }

  return (
    <>

      <BrowserRouter>

        <Header logStatus={isLog} />

        <Routes>

          <Route path='/' element={
            (
              <>
                {/* <h1>This is home page.</h1>
                <button className='m-4 p-4 bg-gray-500' onClick={(isLog === 'true') ? logOut : logIn}>
                  {(isLog === 'true') ? 'Log Out' : 'Log In'}
                </button> */}
                <Home />
              </>
            )
          } />

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
