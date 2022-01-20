import { useContext, useState } from 'react';
import { DispatchContext, StateContext } from '../../utils/quizReducer';
import Button from '../Button/Button';
import styles from './QuizContainer.module.css';

export default function QuizContainer() {
  const { questions, currentQuestion, totalQuestions, currentAnswer } =
    useContext(StateContext);

  const dispatch = useContext(DispatchContext);
  const [answer, setAnswer] = useState('');
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
        <p className={styles.question}>{questions[currentQuestion].question}</p>
      </div>
      <div className={styles.bottom_section}>
        <div className={styles.answer_container}>
          <h4>ANSWER</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: 'submitAnswer', payload: answer });
              setAnswer('');
            }}
          >
            <input
              type="text"
              name="answer"
              id="answer"
              autoFocus
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
