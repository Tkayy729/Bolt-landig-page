import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/landingPage/landingPage';

function App() {
  return (
    <div className='custom-container custom-container vh-100 '>
    <Navbar/>
    <LandingPage />
    </div>
  );
}

export default App;
