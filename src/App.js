import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GrowthCard from './components/GrowthCard';
import ChooseUs from './components/ChooseUs';
import Wellness from './components/Wellness';
import OurClients from './components/OurClients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <HeroSection/>
       <GrowthCard/>
       <ChooseUs/>
       <Wellness/>
       <OurClients/> 
       <Footer/>
       


    </div>
  );
}

export default App;
