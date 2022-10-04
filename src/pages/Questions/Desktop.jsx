import React, { useRef, useState, useEffect } from "react";
import styles from "./Desktop.module.css";
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
  Autocomplete,
  Radio,
  RadioGroup,
  IconButton,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
const employe = ["one", "two", "three", "four"];
export default function Desktop() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [success, setSuccess] = useState(false);
  const [questions, setQuestions] = useState(
    Array(data.length).fill({
      questionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      general: Array(4).fill({
        name: "",
        frecuency: "",
        agility: "",
        quality: "",
        closeness: "",
      }),
    })
  );
  const paginationRefs = useRef([]);

  const theme = createTheme({
    palette: {
      blue: {
        main: "#00b0f0",
      },
    },
  });

  const next = () => {
    let filter = questions.map((item, index) => {
      let tmp = [];
      for (let i of item.general) {
        if (
          i.name.length !== 0 &&
          i.frecuency.length !== 0 &&
          i.agility.length !== 0 &&
          i.quality.length !== 0 &&
          i.closeness.length !== 0
        ) {
          tmp.push(i);
        }
      }
      return { ...item, general: tmp };
    });
    setSuccess(true);
    setQuestions(filter);
  };

  const handledelete = (key) => {
    let tmp = questions.map((item, i) => {
      if (key === i) {
        let ymp = [...item.general];
        ymp.splice(ymp.length - 1, 1);
        return { ...item, general: ymp };
      } else {
        return item;
      }
    });
    setQuestions(tmp);
  };

  const handlePage = (event, value) => {
    let element = paginationRefs.current[value - 1];
    element.scrollIntoView({ behavior: "smooth" });
  };

  const addtopaginationRefs = (el) => {
    if (el && !paginationRefs.current.includes(el)) {
      paginationRefs.current.push(el);
    }
  };

  const checkquestions = () => {
    let fail = false;
    for (let question of questions) {
      if (
        question.general[0].name.length === 0 ||
        question.general[0].frecuency.length === 0 ||
        question.general[0].agility.length === 0 ||
        question.general[0].quality.length === 0 ||
        question.general[0].closeness.length === 0
      ) {
        fail = true;
        break;
      }
    }
    if (fail === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  const handledata = (key, row) => (event) => {
    let prop = event.target.name;
    let tmp = questions.map((item, i) => {
      if (key === i) {
        let ymp = item.general.map((val, y) => {
          if (y === row) {
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

  const handleselect = (key, index, value) => {
    let prop = "name";
    let tmp = questions.map((item, i) => {
      if (key === i) {
        let ymp = item.general.map((val, y) => {
          if (y === index) {
            return { ...val, [prop]: value !== null ? value : "" };
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

  const handleadd = (key) => {
    let tmp = questions.map((item, i) => {
      if (key === i) {
        let ymp = [...item.general];
        ymp.push({
          name: "",
          frecuency: "",
          agility: "",
          quality: "",
          closeness: "",
        });
        return { ...item, general: ymp };
      } else {
        return item;
      }
    });
    setQuestions(tmp);
  };

  useEffect(() => {
    if (success) {
      navigate("/connexion", { state: questions });
    }
    checkquestions();
  }, [questions]);

  return (
    <div className={styles.inner_box}>
      {data.map((val, key1) => {
        return (
          <div key={key1} className={styles.top} ref={addtopaginationRefs}>
            <Stack id={key1}>
              <ThemeProvider theme={theme}>
                <Pagination
                  defaultPage={key1 + 1}
                  count={data ? data.length : 1}
                  hidePrevButton
                  hideNextButton
                  className={styles.pagination}
                  size="large"
                  onChange={handlePage}
                  color="blue"
                />
              </ThemeProvider>
            </Stack>
            <h2>{val.title}</h2>
            <p>{val.question}</p>
            <TableContainer component={Paper} style={{ boxShadow: "none" }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontWeight: "bold",
                        width: "14%",
                        border: "none",
                        padding: "0",
                        paddingBottom: "2rem",
                      }}
                      align="center"
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
                  {questions[key1].general.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          style={{ border: "none", padding: "0.2rem" }}
                          align="center"
                        >
                          <Autocomplete
                            id="combo-box-demo"
                            options={employe}
                            clearOnEscape
                            value={questions[key1].general[index].name}
                            onChange={(event, value) => {
                              handleselect(key1, index, value);
                            }}
                            isOptionEqualToValue={(option, value) =>
                              option.id === value.id
                            }
                            noOptionsText={"No Employe Found"}
                            renderInput={(params) => (
                              <TextField {...params} label="Name" />
                            )}
                          />
                        </TableCell>
                        {info.map((val, key4) => {
                          return (
                            <TableCell
                              align="center"
                              style={{
                                border: "none",
                                borderRight:
                                  key4 !== info.length - 1
                                    ? "2px solid #00B0F0"
                                    : "none",
                                padding: "0rem",
                              }}
                              key={key4}
                            >
                              <FormControl style={{ width: "100%" }}>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                  style={{
                                    flexWrap: "nowrap",
                                    justifyContent: "space-around",
                                  }}
                                  onChange={handledata(key1, index)}
                                  value={
                                    questions[key1].general[index][name[key4]]
                                  }
                                >
                                  {val.data.map((val, key5) => {
                                    return (
                                      <FormControlLabel
                                        name={name[key4]}
                                        value={val}
                                        control={
                                          <Radio
                                            color="primary"
                                            sx={{
                                              "& .MuiSvgIcon-root": {
                                                fontSize: 16,
                                              },
                                            }}
                                          />
                                        }
                                        key={key5}
                                        style={{ margin: "0" }}
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
            {questions[key1].general.length < 10 && (
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                style={{
                  marginLeft: "1.5rem",
                  marginTop: "2rem",
                  color: "#00b0f0",
                  border: "none",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  handleadd(key1);
                }}
              >
                Agregar
              </Button>
            )}
            {questions[key1].general.length > 4 && (
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="error"
                style={{
                  marginLeft: "3rem",
                  marginTop: "2rem",
                }}
                onClick={() => {
                  handledelete(key1);
                }}
              >
                Delete
              </Button>
            )}
          </div>
        );
      })}

      <div className={styles.move}>
        {checked && (
          <IconButton aria-label="next" color="info" onClick={next}>
            <ArrowCircleRightOutlinedIcon
              style={{ fontSize: 50, color: "black" }}
            />
          </IconButton>
        )}
      </div>
      <div className={styles.bullets}>
        <span></span>
        <span></span>
        <span className={styles.active}></span>
        <span></span>
      </div>
    </div>
  );
}
