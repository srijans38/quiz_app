import { useEffect, useState } from 'react';
import styles from './Timer.module.css';

export default function Timer({ action = 'play' }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (action === 'pause') return;
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [action]);

  return (
    <div className={styles.timer_container}>
      <div className={styles.value_container}>
        <p>{String(Math.floor(time / 60)).padStart(2, '0')}</p>
        <p>MIN</p>
      </div>
      <div>:</div>
      <div className={styles.value_container}>
        <p>{String(time % 60).padStart(2, '0')}</p>
        <p>SEC</p>
      </div>
    </div>
  );
}
