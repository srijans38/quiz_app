import React, { useContext } from 'react';
import { DispatchContext, StateContext } from '../../utils/quizReducer';
import Button from '../Button/Button';
import styles from './Results.module.css';

export default function Results() {
  let { correctAnswers, totalQuestions, endTime, startTime } =
    useContext(StateContext);

  const dispatch = useContext(DispatchContext);
  return (
    <div className={styles.results_container}>
      <div className={styles.results_values}>
        <div>
          <p>{Math.floor((correctAnswers / totalQuestions) * 100)}%</p>
          <p>Accuracy</p>
        </div>
        <div>
          <p>
            {(
              (endTime - startTime - 1300 * totalQuestions) /
              totalQuestions /
              1000
            ).toFixed(1)}
            s
          </p>
          <p>Avg Speed</p>
        </div>
      </div>
      <Button onClick={() => dispatch({ type: 'reset' })}>Play Again</Button>
    </div>
  );
}
