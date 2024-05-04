import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
//import fondo from '../assets/44.jpg'



function App() {


  return (
    <>
      <div className="bg-[#F2F2F2] h-full">
        <div className="min-h-screen overflow-hidden">
          <Navbar />
          <Index />
          </div>
          <Footer />
      </div>
    </>
  )
}

export default App
