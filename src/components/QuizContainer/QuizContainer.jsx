import { useContext, useRef, useState } from 'react';
import { DispatchContext, StateContext } from '../../utils/quizReducer';
import Button from '../Button/Button';
import RightLottie from '../RightLottie/RightLottie';
import WrongLottie from '../WrongLottie/WrongLottie';
import styles from './QuizContainer.module.css';

export default function QuizContainer() {
  const { questions, currentQuestion, totalQuestions } =
    useContext(StateContext);

  const dispatch = useContext(DispatchContext);
  const [answer, setAnswer] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.top_section}>
        <div>
          <h4>TOPIC</h4>
          <h4>{questions[currentQuestion].category}</h4>
        </div>
      </div>
      <div>
        <h4>
          QUESTION {currentQuestion + 1} of {totalQuestions}
        </h4>
        <div
          className={styles.questionContainer}
          style={{ gridTemplateColumns: `repeat(${totalQuestions}, 100%)` }}
          onTransitionEnd={(e) => {
            setIsDisabled(false);
            inputRef.current.focus();
          }}
        >
          {questions.map((q) => (
            <p
              className={styles.question}
              key={q._id}
              style={{ transform: `translate(-${currentQuestion * 100}%)` }}
            >
              {q.question}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.bottom_section}>
        {isCorrect && <RightLottie />}
        {isCorrect === false && <WrongLottie />}
        <div className={styles.answer_container}>
          <h4>ANSWER</h4>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (
                questions[currentQuestion].answer.toLowerCase() ===
                answer.toLowerCase()
              ) {
                setIsCorrect(true);
              } else {
                setIsCorrect(false);
              }
              await new Promise((resolve) => setTimeout(resolve, 1300));
              dispatch({ type: 'submitAnswer', payload: answer });
              setIsCorrect(null);
              setIsDisabled(true);
              setAnswer('');
            }}
          >
            <input
              type="text"
              name="answer"
              id="answer"
              ref={inputRef}
              autoFocus
              disabled={isDisabled}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className={styles.answer}
              placeholder="Type Answer..."
            />
          </form>
        </div>
        <div className={styles.solution}>
          <p>Stuck ?</p>
          <Button>See Solution</Button>
        </div>
      </div>
    </div>
  );
}
