import React from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { clickAddCity } from "./../../../features/playersSlice";

const Input = () => {
  const [cityValue, setCityValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isShowWarning, setIsShowWarning] = React.useState(false);
  const dispatch = useDispatch();
  const playerIndex = useSelector((state) => state.players.pickIndexPlayer);
  const playerNames = useSelector((state) => state.players.names);
  const playerName = playerNames[playerIndex].name;
  const cities = useSelector((state) => state.players.cities);
  const lastCity = useSelector(
    (state) => state.players.cities[state.players.cities.length - 1]
  );
  let lastSymbol = lastCity[lastCity.length - 1].toUpperCase();

  const checkInputCity = (city) => {
    if (city[0].toUpperCase() === lastSymbol) {
      return true;
    }
    setIsShowWarning(true);
    setErrorMessage(
      `${playerName}, ваш город должен начинаться на букву ${lastSymbol}`
    );
    return false;
  };

  const handlerClickDone = () => {
    if (cityValue.trim() != false) {
      if (
        cities.indexOf(
          cityValue[0].toUpperCase() + cityValue.slice(1).toLowerCase()
        ) === -1
      ) {
        if (checkInputCity(cityValue)) {
          dispatch(
            clickAddCity(
              cityValue[0].toUpperCase() + cityValue.slice(1).toLowerCase()
            )
          );
          console.log(cities);
          setCityValue("");
          setIsShowWarning(false);
        }
      } else {
        setIsShowWarning(true);
        setErrorMessage(`город ${cityValue} уже был!`);
      }
    }
  };

  const handleChangeValue = (event) => {
    setCityValue(event.target.value);
    setIsShowWarning(false);
  };

  const handlerEnterDown = (event) => {
    if (event.key === "Enter") {
      handlerClickDone();
    }
  };
  return (
    <div className={styles.header}>
      <h5>
        Игрок <b>{playerName}</b>, вам на букву <b>{lastSymbol}</b>
      </h5>
      {cities.length === 1 ? (
        <h6>
          Давайте начнем игру! Пусть первый город будет <b>{lastCity}</b>
        </h6>
      ) : (
        <h6>
          Последний город <b>{lastCity}</b>
        </h6>
      )}

      <div className={styles.inputField}>
        <input
          placeholder="название + Enter"
          value={cityValue}
          onChange={(e) => handleChangeValue(e)}
          onKeyDown={(e) => handlerEnterDown(e)}
        />
        <button
          className={
            cityValue.trim() != false
              ? "waves-effect waves-light btn addCityBtn"
              : "waves-effect waves-light btn addCityBtn disabled"
          }
          onClick={handlerClickDone}
        >
          <i className="large material-icons">check</i>
        </button>
        {isShowWarning && <div className={styles.warning}>{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Input;
