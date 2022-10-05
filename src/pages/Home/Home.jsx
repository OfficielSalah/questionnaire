import React from "react";
import styles from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/policy");
  };
  return (
    <div className={styles.screen}>
      <div className={styles.inner_box}>
        <h3>
          Hola <strong className={styles.red}>nombre_persona</strong>
        </h3>
        <p>
          Bienvenido a nuestra herramienta de recolección de datos para el
          desarrollo del análisis de redes organizacionales que
          <strong className={styles.red + " " + styles.top}>
            {" "}
            nombre_empresa{" "}
          </strong>
          esta desarrollando.
        </p>
        <p className={styles.top}>
          A continuación te formularemos{" "}
          <strong style={{ fontWeight: "bold" }}>seis</strong> preguntas, que te
          tomaran alrededor de 10 minutos responder.
        </p>
        <p className={styles.top}>
          Esta información nos ayudara a entender las redes internas de
          colaboración y como potencializar el impactos positivos que estas
          tienen en el desarrollo de las funciones de las diversas áreas
          funcionales y de los empelados que las componen.
        </p>
        <div className={styles.bullets}>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.next}>
          <IconButton aria-label="next" color="info" onClick={click}>
            <ArrowCircleRightOutlinedIcon
              style={{ fontSize: 50, color: "black" }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
