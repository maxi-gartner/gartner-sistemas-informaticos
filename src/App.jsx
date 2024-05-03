import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'



function App() {


  return (
    <>
      <div className="bg-slate-800 h-full">
        <div className="fullScreen h-screen overflow-hidden">
          <Navbar />
          <Index />
          </div>
          <Footer />
      </div>
    </>
  )
}

export default App
