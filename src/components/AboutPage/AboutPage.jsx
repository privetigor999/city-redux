import React from "react";
import styles from "./styles.module.scss";
const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutBlock}>
        <p>
          Данное приложение создано для увлекательнного времяпровождения двух
          или трех людей. А так же мне, как создателю этого приложения - для
          практики Redux ToolKit.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
