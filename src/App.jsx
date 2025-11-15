import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HireMe from './components/HireMe';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="relative overflow-x-hidden">
        {/* Background gradient image */}
        <img
          className="absolute top-0 right-0 opacity-60 z-0"
          src="/gradient.png"
          alt=""
        />
        <div
          className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
          shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] z-0"
        ></div>
        <section id="about" className='pt-24'>
          <Hero/>
        </section>
        <Projects/>
        <Recommendations/>
        <section id="HireMe" className="pt-24">
          <HireMe />
        </section>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
