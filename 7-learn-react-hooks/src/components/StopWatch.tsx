import { useState, useRef } from 'react';

export default function StopWatch() {
  const [startTime, setStartTime] = useState<number>();
  const [now, setNow] = useState<number>();
  const intervalRef = useRef<NodeJS.Timer>();
  const stopButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setNow(Date.now()));

    stopButtonRef.current?.focus();
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const secondsPasswd = startTime && now ? (now - startTime) / 1000 : 0;

  return (
    <>
      <h1>Time passwd: {secondsPasswd.toFixed(3)}</h1>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop} ref={stopButtonRef}>
        Stop
      </button>
    </>
  );
}
