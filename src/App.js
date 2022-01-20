import './App.css';
import Navbar from './components/Navbar/Navbar';
import dotsHor from './assets/dots_horizontal.png';
import dotsVer from './assets/dots_vertical.png';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img
        className="dotshor"
        src={dotsHor}
        alt=""
        role="presentation"
        width={360}
      />
      <img
        className="dotsver"
        src={dotsVer}
        alt=""
        role="presentation"
        width={250}
      />
      <div className="quiz">
        <Button onClick={() => console.log('click')}>Start Quiz</Button>
      </div>
    </div>
  );
}

export default App;
