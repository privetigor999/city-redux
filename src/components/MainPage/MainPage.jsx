import React from "react";
import WelcomePage from "../WelcomePage/WelcomePage";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import Input from "./Input/Input";
import Player from "./Player/Player";
const MainPage = () => {
  const isStarted = useSelector((state) => state.start.isStarted);
  const playersList = useSelector((state) => state.players.names);
  return (
    <div className={styles.wrapper}>
      {!isStarted ? (
        <WelcomePage />
      ) : (
        <div>
          <Input />
          <div className={styles.playersList}>
            {playersList.map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
