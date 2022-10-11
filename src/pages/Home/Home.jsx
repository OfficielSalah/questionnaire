import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import Navbar from "../../components/Navbar";

const config = {
  headers: { "Content-type": "application/json" },
};

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  let { code } = queryString.parse(location.search);
  if (!code) {
    navigate("/thanks");
  }
  let personId = code?.split("/")[0];
  let versionId = code?.split("/")[1];

  const verify = async () => {
    try {
      await axios
        .create({
          baseURL:
            "https://dynamicliveconversationapi.azurewebsites.net/api/OnasSurvey/",
        })
        .get(`${personId}/${versionId}`, config)
        .then((res) => {
          localStorage.setItem(
            "urlInfo",
            JSON.stringify({ personId: personId, versionId: versionId })
          );
          setData(res.data[0]);
          setSuccess(true);
        });
    } catch (error) {
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
      <Navbar logo={data?.logo} />
      <div className={styles.inner_box}>
        <h3>
          Hola <strong className={styles.red}>{data?.nombrePersona}</strong>
        </h3>
        <p>
          Bienvenido a nuestra herramienta de recolección de datos para el
          desarrollo del análisis de redes organizacionales que
          <strong className={styles.red + " " + styles.top}>
            {" "}
            {data?.empresa}{" "}
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
