import './App.css';
import NavBar from './components/NavBar';
import './styles/landingPage.css';
import Intro from './components/Intro';

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavBar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
