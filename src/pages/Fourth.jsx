import React from "react";
import styles from "./Fourth.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const info = [
  { title: "Valor", data: ["Valor Agregado", "Bajo Valor Agregado"] },
  {
    title: "Frecuencia",
    data: [
      "Varias veces por semana",
      "1 o mas veces a la semana",
      "1 o mas veces cada 2 semanas",
      "1 vez al mes",
    ],
  },
];

export default function Fourth() {
  const navigate = useNavigate();
  const click = () => {
    navigate("/second");
  };
  const { state } = useLocation();
  console.log(state);
  return (
    <div className={styles.screen}>
      <div className={styles.box}>
        <div className={styles.inner_box}>
          <h3>Valor Agregado en Conexiones :</h3>
          <p className={styles.top}>
            6. Basado en las responsabilidades de tu rol ¿Cuáles tipos de
            conexión consideras que agregan mayor y/o menor valor en el
            desarrollo de tus responsabilidades?
          </p>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      width: "15%",
                      border: "none",
                    }}
                  >
                    Tipo de Conexiones
                  </TableCell>
                  {info.map((val, key1) => {
                    return (
                      <TableCell
                        align="center"
                        key={key1}
                        style={{ fontWeight: "bolder", border: "none" }}
                      >
                        {val.title}
                        <IconButton aria-label="info">
                          <InfoIcon style={{ color: "black" }} />
                        </IconButton>
                        <TableRow>
                          {val.data.map((val, key2) => {
                            return (
                              <TableCell
                                key={key2}
                                align="center"
                                style={{
                                  fontSize: "0.55rem",
                                  color: "grey",
                                  fontWeight: "bold",
                                  border: "none",
                                }}
                                sx={{
                                  width: "25%",
                                  lineHeight: "1rem",
                                  padding: "0.2rem",
                                  border: "none",
                                }}
                              >
                                {val}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ border: "none" }} align="center">
                    <FormControl sx={{ width: "100%" }}>
                      <Select
                        id={"outlined-basic"}
                        type="text"
                        name="name"
                        label="connexion"
                      >
                        <MenuItem value={10}>General</MenuItem>
                        <MenuItem value={20}>Información</MenuItem>
                        <MenuItem value={30}>Inspiracional</MenuItem>
                        <MenuItem value={20}>Transaccional</MenuItem>
                        <MenuItem value={30}>Técnico</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  {info.map((val, key3) => {
                    return (
                      <TableCell
                        align="center"
                        style={{ border: "none", padding: "0rem" }}
                        key={key3}
                      >
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            {val.data.map((val, key4) => {
                              return (
                                <FormControlLabel
                                  value={val}
                                  control={
                                    <Radio
                                      color="warning"
                                      sx={{
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 16,
                                        },
                                      }}
                                    />
                                  }
                                  key={key4}
                                  style={{ margin: "2.5rem", marginTop: "0" }}
                                />
                              );
                            })}
                          </RadioGroup>
                        </FormControl>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className={styles.bullets}>
            <span></span>
            <span></span>
            <span></span>
            <span className={styles.active}></span>
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
    </div>
  );
}
