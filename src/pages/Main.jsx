import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <div className="bg-[#F2F2F2] h-full">
        <div className="min-h-screen overflow-hidden">
          <Navbar/>
          <Outlet/> 
          </div>
          <Footer />
      </div>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};