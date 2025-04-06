import { useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from './components/ui'
import './App.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App;
