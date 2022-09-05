import React from "react";
import styles from "./styles.module.scss";
const Player = ({ player }) => {
  return (
    <div className={styles.player}>
      <h5>{player.name}</h5>
      <ul>
        {player.cities.map((city) => (
          <li key={Math.random()}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
