import React, { useRef, useState, useEffect } from "react";
import styles from "./Third.module.css";
import InfoIcon from "@mui/icons-material/Info";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Input,
  Radio,
  RadioGroup,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Relación General:",
    question:
      "1. ¿Cuándo necesitas ayuda en tus responsabilidades a qué personas acudes?",
  },
  {
    title: "Relación Información:",
    question:
      "2. ¿Cuándo necesitas información actualizada y de confianza sobre la empresa a quienes acudes?",
  },
  {
    title: "Relación Inspiracional:",
    question:
      "3. ¿Cuándo necesitas consejos o feedback, quién es la personas indicada para ti?",
  },
  {
    title: "Relación Transaccional:",
    question:
      "4. ¿Cuándo necesitas autorizaciones para continuar con el desarrollo de tus funciones?",
  },
  {
    title: "Relación Técnico:",
    question:
      "5. ¿Cuándo necesitas ayuda especializada para el desarrollo de tus responsabilidades a qué personas acudes?",
  },
  {
    title: "Relación Last:",
    question:
      "6. Cuándo te necesitan o te contactan, ¿generalmente que personas son y que tipo de interacción es?",
  },
];
const name = ["frecuency", "agility", "quality", "closeness"];

const info = [
  {
    title: "Frecuencia",
    data: [
      "Varias veces por semana",
      "1 o mas veces a la semana",
      "1 o mas veces cada 2 semanas",
      "1 vez al mes",
    ],
  },
  {
    title: "Agilidad",
    data: [
      "Con oportunidad de mejora",
      "Cumple Expectativas",
      "Por encima de las expectativas",
    ],
  },
  {
    title: "Calidad",
    data: [
      "Con oportunidad de mejora",
      "Cumple Expectativas",
      "Por encima de las expectativas",
    ],
  },
  {
    title: "Cercanía",
    data: [
      "Relación Cercana",
      "Relación Estrictamente laboral",
      "Relación con fricciones",
    ],
  },
];
export default function Third() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [questions, setQuestions] = useState(
    Array(data.length).fill({
      questionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      general: Array(1).fill({
        name: "",
        frecuency: "",
        agility: "",
        quality: "",
        closeness: "",
      }),
    })
  );

  const click = () => {
    navigate("/fourth", { state: questions });
  };

  const checkquestions = () => {
    let fail = false;
    for (let question of questions) {
      for (let field of question.general) {
        if (
          field.name.length === 0 ||
          field.frecuency.length === 0 ||
          field.agility.length === 0 ||
          field.quality.length === 0 ||
          field.closeness.length === 0
        ) {
          fail = true;
          break;
        }
      }
      if (fail === true) {
        break;
      }
    }
    if (fail === false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  useEffect(() => {
    checkquestions();
  }, [questions]);

  const handledata = (key) => (event) => {
    let prop = event.target.name;
    let tmp = questions.map((item, i) => {
      if (key === i) {
        let ymp = item.general.map((val, y) => {
          if (y === 0) {
            return { ...val, [prop]: event.target.value };
          } else {
            return val;
          }
        });
        return { ...item, general: ymp };
      } else {
        return item;
      }
    });
    setQuestions(tmp);
  };

  const paginationRefs = useRef([]);
  paginationRefs.current = [];

  const handlePage = (event, value) => {
    let element = paginationRefs.current[value - 1];
    element.scrollIntoView({ behavior: "smooth" });
  };

  const addtopaginationRefs = (el) => {
    if (el && !paginationRefs.current.includes(el)) {
      paginationRefs.current.push(el);
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.box}>
        <div className={styles.inner_box}>
          {data.map((val, key1) => {
            return (
              <div key={key1} ref={addtopaginationRefs} className={styles.top}>
                <Stack id={key1}>
                  <Pagination
                    defaultPage={key1 + 1}
                    count={data ? data.length : 1}
                    hidePrevButton
                    hideNextButton
                    size="large"
                    style={{ margin: "0 auto", marginBottom: "1rem" }}
                    color="warning"
                    onChange={handlePage}
                  />
                </Stack>
                <strong>{val.title}</strong>
                <p>{val.question}</p>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            fontWeight: "bold",
                            width: "14%",
                            border: "none",
                          }}
                        >
                          Nombre Empleado
                        </TableCell>
                        {info.map((val, key2) => {
                          return (
                            <TableCell
                              align="center"
                              key={key2}
                              style={{ fontWeight: "bolder", border: "none" }}
                            >
                              {val.title}
                              <IconButton aria-label="info">
                                <InfoIcon style={{ color: "black" }} />
                              </IconButton>

                              <TableRow>
                                {val.data.map((val, key3) => {
                                  return (
                                    <TableCell
                                      key={key3}
                                      align="center"
                                      style={{
                                        fontSize: "0.55rem",
                                        color: "grey",
                                        fontWeight: "bold",
                                        border: "none",
                                      }}
                                      sx={{
                                        width: "30%",
                                        lineHeight: "1rem",
                                        padding: "0.1rem",
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
                          <FormControl>
                            <Input
                              id={"outlined-basic"}
                              type="text"
                              name="name"
                              value={questions[key1].general[0].name}
                              onChange={handledata(key1)}
                            />
                          </FormControl>
                        </TableCell>

                        {info.map((val, key4) => {
                          return (
                            <TableCell
                              align="center"
                              style={{ border: "none", padding: "0rem" }}
                              key={key4}
                            >
                              <FormControl>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                >
                                  {val.data.map((val, key5) => {
                                    return (
                                      <FormControlLabel
                                        name={name[key4]}
                                        value={val}
                                        onChange={handledata(key1)}
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
                                        style={{ margin: "1rem" }}
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
              </div>
            );
          })}

          <div className={styles.bullets}>
            <span></span>
            <span></span>
            <span className={styles.active}></span>
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
        </div>
      </div>
    </div>
  );
}
