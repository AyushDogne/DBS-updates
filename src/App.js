import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './pages/Header'
import MainBody from './pages/MainBody'
import Footer from './pages/Footer'
// import { motion } from "framer-motion"
import * as motion from "framer-motion/client"

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBody/>
      <Footer/>


      {/* Aos
      gsap
      framer motion */}


    </div>
  );
}

export default App;
