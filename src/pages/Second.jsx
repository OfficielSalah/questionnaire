import React, { useState } from "react";
import styles from "./Second.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

export default function Second() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const click = () => {
    navigate("/third");
  };
  const previous = () => {
    navigate("/");
  };
  const handlechange = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.screen}>
      <div className={styles.box}>
        <div className={styles.inner_box}>
          <h3>
            <strong style={{ fontWeight: "bold" }}>
              Política de tratamiento de datos
            </strong>
          </h3>
          <p className={styles.top}>
            La información capturada por nuestro sistema será utilizada
            expresamente para uso interno de la compañía y será usada
            exclusivamente el desarrollo de este ejercicio.
          </p>
          <p className={styles.top}>
            Para conocer mas acerca de nuestra política de tratamiento de datos
            puede hacer clic en el siguiente{" "}
            <strong
              style={{
                color: "blue",
                fontStyle: "italic",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              enlace
            </strong>
          </p>
          <div className={styles.check}>
            <Checkbox onChange={handlechange} />
            <p style={{ color: "grey ", marginLeft: "2rem" }}>
              ¿Autoriza el manejo y uso de información personal según los
              descrito en el Política, el Manual Institucional y la Ley 1581 de
              Protección de Datos Personales?
            </p>
          </div>

          <div className={styles.bullets}>
            <span></span>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.next}>
            {checked && (
              <IconButton aria-label="next" color="info" onClick={click}>
                <ArrowCircleRightOutlinedIcon
                  style={{ fontSize: 50, color: "black" }}
                />
              </IconButton>
            )}
          </div>
          <div className={styles.previous}>
            <IconButton aria-label="previous" color="info" onClick={previous}>
              <ArrowCircleLeftOutlinedIcon
                style={{ fontSize: 50, color: "black" }}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
