import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import { Navbar } from './Components/NavBar/Navbar';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { HelmetProvider } from 'react-helmet-async';
import { Alert } from './Pages/Contact/Alert';


export const AppContext = createContext()

const Layout = () =>{
  const [ currentNav, setCurrentNav ] = useState(0)  
  const [ smallScreen, setSmallScreen ] = useState(false)  
  const [ mediumScreen, setMediumScreen  ] = useState(false)  
  const [ showALert, setShowAlert ] = useState(false)
  const [ alertMessage, setAlertMessage ] = useState('')
  const [ alertType, setAlertType ] = useState('')

  useEffect(() =>{
    setInterval(() => {
      const mediaQuery = window.matchMedia('(max-width:950px)');
      setMediumScreen(mediaQuery.matches);
      
      const handleMediaQueryChange = (event) =>{
        setMediumScreen(event.matches)
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      
      
      return () =>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, 200);

    setInterval(() => {

      const mediaQuery = window.matchMedia('(max-width:500px)');
      setSmallScreen(mediaQuery.matches);
      
      const handleMediaQueryChange = (event) =>{
        setSmallScreen(event.matches)
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      
      
      return () =>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, 200);
    
  }, [])
  

  return(
    <div className='app'>
      <AppContext.Provider value={{currentNav, setCurrentNav, smallScreen, mediumScreen , showALert, setShowAlert, alertMessage, setAlertMessage, setAlertType}}>

        <HelmetProvider>

          <div className='d-flex w-100'>
            <Navbar />
            <Outlet />
            {
              showALert ? 
              <Alert alertMessage={alertMessage} alertType={alertType} setShowAlert={setShowAlert}/> : ''
            }
          </div>
        </HelmetProvider>
          {/* <Footer /> */}
      </AppContext.Provider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      }
      // ,{
      //   path: '/about',
      //   element: <About />
      // },
      // {
      //    path: '/services',
      //   // element: <Services />
      // }
      ,
      {
        path: '/*',
        element: <h4 className='parent' style={{
          marginTop: 100+'px',
          marginLeft: 50+'px'
        }}>Page not found <Link to='/'>return to the home page</Link></h4>
      }
    ]
  }
])

function App() {
  

  return (
    <div className='App'>
      <div>
        <RouterProvider router={router} />

      </div>
    </div>
  );


}
export default App;
         