import './App.css';
import Navbar from './components/Navbar/Navbar';
import dotsHor from './assets/dots_horizontal.png';
import dotsVer from './assets/dots_vertical.png';
import Button from './components/Button/Button';
import { useEffect, useReducer } from 'react';
import QuizContainer from './components/QuizContainer/QuizContainer';
import {
  DispatchContext,
  initialState,
  quizReducer,
  StateContext,
} from './utils/quizReducer';
import Results from './components/Results/Results';

function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    const url = 'https://api.startladder.co/api/frontend/tasks';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          dispatch({ type: 'setQuestions', payload: data.task_array });
        }
      });
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
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
          <div className="central-container">
            <div className="quiz">
              {state.quizState === 'init' && (
                <Button disabled style={{ alignSelf: 'center' }}>
                  Loading...
                </Button>
              )}
              {state.quizState === 'ready' && (
                <Button
                  onClick={() => dispatch({ type: 'startQuiz' })}
                  style={{ alignSelf: 'center' }}
                >
                  Start Quiz
                </Button>
              )}
              {state.quizState === 'running' && <QuizContainer />}
              {state.quizState === 'completed' && <Results />}
            </div>
          </div>
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
