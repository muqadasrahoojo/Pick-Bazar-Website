import './App.css';
import HeroSection from './componnets/Herosection/HeroSection';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      < Header />
      < HeroSection />
    </div>
  );
}

export default App;
