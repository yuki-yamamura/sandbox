import { useState } from "react";
import Button from "@/components/Button";

import styles from "./index.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((previousCount) => previousCount + 1);
  const decrement = () => setCount((previousCount) => previousCount - 1);

  return (
    <div className={styles.module}>
      <div className={styles.count}>{count}</div>
      <div className={styles.buttonContainer}>
        {/* increment button */}
        <Button type="button" label="-" variant="primary" onClick={decrement} />
        {/* decrement button */}
        <Button type="button" label="+" variant="primary" onClick={increment} />
      </div>
    </div>
  );
};

export default Counter;
