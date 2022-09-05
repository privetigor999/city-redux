import React from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountOfPlayers,
  getNamesOfPlayers,
} from "../../features/playersSlice";
import { isStartedGame } from "../../features/startSlice";
const WelcomePage = () => {
  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");
  const [player3, setPlayer3] = React.useState("");

  const dispatch = useDispatch();

  const handleChooseCountPlayers = (num) => {
    dispatch(getCountOfPlayers(num));
  };

  const countOfPlayers = useSelector((state) => state.players.countOfPlayers);

  const startGame = () => {
    let players = [];
    if (countOfPlayers === 2) {
      players = [
        { name: player1, id: Math.random(), cities: [] },
        { name: player2, id: Math.random(), cities: [] },
      ];
    }
    if (countOfPlayers === 3) {
      players = [
        { name: player1, id: Math.random(), cities: [] },
        { name: player2, id: Math.random(), cities: [] },
        { name: player3, id: Math.random(), cities: [] },
      ];
    }
    dispatch(getNamesOfPlayers(players));
    dispatch(isStartedGame(true));
  };
  return (
    <div className={styles.welcome}>
      <div className={styles.wrapper}>
        <div className={styles.counterPlayers}>
          <b>Выберите количество игроков</b>
          <div>
            <button
              className="waves-effect waves-light btn buttonPlayers"
              onClick={() => handleChooseCountPlayers(2)}
            >
              2
            </button>
            <button
              className="waves-effect waves-light btn buttonPlayers"
              onClick={() => handleChooseCountPlayers(3)}
            >
              3
            </button>
          </div>
        </div>
        {countOfPlayers != 0 && (
          <div className={styles.playersNames}>
            <b>Введите имена игроков</b>
            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="Игрок 1"
                onChange={(event) => setPlayer1(event.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="Игрок 2"
                onChange={(event) => setPlayer2(event.target.value)}
              />
            </div>
            {countOfPlayers === 3 && (
              <div className={styles.inputField}>
                <input
                  type="text"
                  placeholder="Игрок 3"
                  onChange={(event) => setPlayer3(event.target.value)}
                />
              </div>
            )}
          </div>
        )}
        {countOfPlayers === 2 && player1 != false && player2 != false && (
          <button
            className="waves-effect waves-light btn btn-large acceptBtn"
            onClick={startGame}
          >
            GO
          </button>
        )}

        {countOfPlayers === 3 &&
          player1 != false &&
          player2 != false &&
          player3 != false && (
            <button
              className="waves-effect waves-light btn btn-large acceptBtn"
              onClick={startGame}
            >
              GO
            </button>
          )}
      </div>
    </div>
  );
};

export default WelcomePage;
