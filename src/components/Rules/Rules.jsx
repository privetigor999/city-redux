import React from "react";
import styles from "./styles.module.scss";
const Rules = () => {
  return (
    <div className={styles.rulesWrapper}>
      <div className={styles.rules}>
        <p>
          В "Города" играют двое и более человек, в которой каждый участник в
          свою очередь называет реально существующий город любой страны,
          название которого начинается на ту букву, которой оканчивается
          название предыдущего участника.
        </p>
        <h5>Пример:</h5>
        <ul>
          <li>
            Игрок1 : Москв<span className={styles.lastSymbolRed}>А</span>
          </li>
          <li>
            Игрок2 : <span className={styles.lastSymbolRed}>А</span>страха
            <span className={styles.lastSymbolGreen}>Н</span>ь
          </li>
          <li>
            Игрок1 : <span className={styles.lastSymbolGreen}>Н</span>орильс
            <span className={styles.lastSymbolBlue}>К</span>
          </li>
          <li>
            Игрок2 : <span className={styles.lastSymbolBlue}>К</span>оломн
            <span className={styles.lastSymbolViolet}>А</span>
          </li>
          <li>
            Игрок1 : <span className={styles.lastSymbolViolet}>А</span>нкар
            <span className={styles.lastSymbol}>А</span>
          </li>
        </ul>
        <p>
          Игра оканчивается, когда очередной участник не может назвать нового
          города.
        </p>
      </div>
    </div>
  );
};

export default Rules;
