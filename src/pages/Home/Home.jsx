import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const config = {
  headers: { "Content-type": "application/json" },
};

export default function Home() {
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
  let { guid } = useParams();
  const navigate = useNavigate();
  const verify = async () => {
    try {
      await axios
        .create({
          baseURL:
            "https://dynamicliveconversationapi.azurewebsites.net/api/ONasSurvey/EmpleadosSurveyOnas/",
        })
        .get(`/${guid}`, config)
        .then((res) => {
          console.log(res);
          setData(res.data);
          setSuccess(true);
        });
    } catch (error) {
      console.log(error);
      navigate("/thanks");
    }
  };

  const click = () => {
    navigate("/policy");
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("companyInfo", JSON.stringify(data));
    } else {
      verify();
    }
  }, [success]);
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
