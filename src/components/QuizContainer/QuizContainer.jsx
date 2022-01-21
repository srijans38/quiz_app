import { useContext, useState } from 'react';
import { DispatchContext, StateContext } from '../../utils/quizReducer';
import Button from '../Button/Button';
import styles from './QuizContainer.module.css';

export default function QuizContainer() {
  const { questions, currentQuestion, totalQuestions } =
    useContext(StateContext);

  const dispatch = useContext(DispatchContext);
  const [answer, setAnswer] = useState('');
  const [isDisabled, setIsDiasbled] = useState(false);
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
            setIsDiasbled(false);
          }}
        >
          {questions.map((q) => (
            <p
              className={styles.question}
              style={{ transform: `translate(-${currentQuestion * 100}%)` }}
            >
              {q.question}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.bottom_section}>
        <div className={styles.answer_container}>
          <h4>ANSWER</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: 'submitAnswer', payload: answer });
              setIsDiasbled(true);
              setAnswer('');
            }}
          >
            <input
              type="text"
              name="answer"
              id="answer"
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
