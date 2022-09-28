import React, { useState, useEffect } from "react";
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
import axios from "axios";

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
const name = ["value", "frecuency"];
const arr = [1, 2, 3, 4];
export default function Fourth() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [checked, setChecked] = useState(false);
  const [connexion, setConnexion] = useState({
    questionId: "3fa85f64-5717-4963f66afa6",
    options: Array(arr.length).fill({
      conexionType: "",
      value: "",
      frecuency: "",
    }),
  });

  const checkconnexion = () => {
    let success = false;
    for (let opt of connexion.options) {
      if (
        opt.conexionType.length > 0 &&
        opt.value.length > 0 &&
        opt.frecuency.length > 0
      ) {
        success = true;
        break;
      }
    }
    if (success === true) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handledata = (key) => (event) => {
    let prop = event.target.name;
    let tmp = connexion.options.map((item, i) => {
      if (key === i) {
        return { ...item, [prop]: event.target.value };
      } else {
        return item;
      }
    });
    setConnexion({ ...connexion, options: tmp });
  };

  const makeData = () => {
    let data = {
      personId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      companyId: 0,
      surveyId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      questions: state,
      connexion: connexion,
    };
    return data;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let data = makeData();
    try {
      //const response = await axios.post("/api/test", { data: data });
    } catch (error) {
      console.log(error);
    }
    console.log(JSON.stringify(data, null, 4));
    navigate("/fifth");
  };

  useEffect(() => {
    checkconnexion();
  }, [connexion]);

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

          <TableContainer component={Paper} style={{ boxShadow: "none" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      width: "20%",
                      border: "none",
                    }}
                    align="center"
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
                {arr.map((val, key3) => {
                  return (
                    <TableRow key={key3}>
                      <TableCell style={{ border: "none" }} align="center">
                        <FormControl sx={{ width: "100%" }}>
                          <Select
                            id={"outlined-basic"}
                            type="text"
                            name="conexionType"
                            value={connexion.options[key3].conexionType}
                            onChange={handledata(key3)}
                          >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                            <MenuItem value="Información">Información</MenuItem>
                            <MenuItem value="Inspiracional">
                              Inspiracional
                            </MenuItem>
                            <MenuItem value="Transaccional">
                              Transaccional
                            </MenuItem>
                            <MenuItem value="Técnico">Técnico</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      {info.map((val, key4) => {
                        return (
                          <TableCell
                            align="center"
                            style={{ border: "none", padding: "0rem" }}
                            key={key4}
                          >
                            <FormControl sx={{ width: "100%" }}>
                              <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                style={{
                                  flexWrap: "nowrap",
                                  justifyContent: "space-around",
                                }}
                              >
                                {val.data.map((val, key5) => {
                                  return (
                                    <FormControlLabel
                                      value={val}
                                      name={name[key4]}
                                      onChange={handledata(key3)}
                                      style={{ margin: "0" }}
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
                                      key={key5}
                                    />
                                  );
                                })}
                              </RadioGroup>
                            </FormControl>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={styles.bullets}>
            <span></span>
            <span></span>
            <span></span>
            <span className={styles.active}></span>
          </div>

          {checked && (
            <form className={styles.next} onSubmit={submitHandler}>
              <IconButton type="submit" aria-label="next" color="info">
                <ArrowCircleRightOutlinedIcon
                  style={{ fontSize: 50, color: "black" }}
                />
              </IconButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
