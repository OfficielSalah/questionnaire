import React, { useState, useEffect } from "react";
import styles from "./Mobile.module.css";
import {
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const data = [
  {
    title: "Relación General",
    question:
      "1. ¿Cuándo necesitas ayuda en tus responsabilidades a qué personas acudes?",
  },
  {
    title: "Relación Información",
    question:
      "2. ¿Cuándo necesitas información actualizada y de confianza sobre la empresa a quienes acudes?",
  },
  {
    title: "Relación Inspiracional",
    question:
      "3. ¿Cuándo necesitas consejos o feedback, quién es la personas indicada para ti?",
  },
  {
    title: "Relación Transaccional",
    question:
      "4. ¿Cuándo necesitas autorizaciones para continuar con el desarrollo de tus funciones?",
  },
  {
    title: "Relación Técnico",
    question:
      "5. ¿Cuándo necesitas ayuda especializada para el desarrollo de tus responsabilidades a qué personas acudes?",
  },
  {
    title: "Relación Last",
    question:
      "6. Cuándo te necesitan o te contactan, ¿generalmente que personas son y que tipo de interacción es?",
  },
];

const info = [
  {
    title: "Frecuencia :",
    data: [
      "Varias veces por semana",
      "1 o mas veces a la semana",
      "1 o mas veces cada 2 semanas",
      "1 vez al mes",
    ],
  },
  {
    title: "Agilidad :",
    data: [
      "Con oportunidad de mejora",
      "Cumple Expectativas",
      "Por encima de las expectativas",
    ],
  },
  {
    title: "Calidad :",
    data: [
      "Con oportunidad de mejora",
      "Cumple Expectativas",
      "Por encima de las expectativas",
    ],
  },
  {
    title: "Cercanía :",
    data: [
      "Relación Cercana",
      "Relación Estrictamente laboral",
      "Relación con fricciones",
    ],
  },
];

const name = ["frecuency", "agility", "quality", "closeness"];

const employe = ["one", "two", "three", "four"];

export default function Mobile() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const [skipped, setSkipped] = useState(new Set());
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

  const theme = createTheme({
    palette: {
      blue: {
        main: "#00b0f0",
      },
    },
  });

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

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (key) => {
    if (
      questions[key].general[0].name.length !== 0 &&
      questions[key].general[0].frecuency.length !== 0 &&
      questions[key].general[0].agility.length !== 0 &&
      questions[key].general[0].quality.length !== 0 &&
      questions[key].general[0].closeness.length !== 0
    ) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    navigate("/connexion", { state: questions });
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.inner_box}>
        <Stepper activeStep={activeStep}>
          {data.map((label, index) => {
            const stepProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={index} {...stepProps}>
                <StepLabel></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === data.length ? (
          <Button
            variant="contained"
            color="blue"
            style={{
              color: "white",
              margin: "10rem 36%",
            }}
            onClick={handleFinish}
          >
            Finish
          </Button>
        ) : (
          <div>
            <Card className={styles.card}>
              <CardContent style={{ padding: "0 2rem 0 2rem" }}>
                <h3 style={{ fontWeight: "bold" }}>{data[activeStep].title}</h3>
                <p>{data[activeStep].question}</p>
                {questions[activeStep].general.map((row, index) => {
                  return (
                    <Accordion key={index}>
                      <AccordionSummary
                        expandIcon={
                          <ArrowDropDownCircleIcon
                            style={{ color: "black", marginLeft: "2rem" }}
                          />
                        }
                        aria-controls={index}
                        id={index}
                      >
                        <div className={styles.input}>
                          <h5>Nombre Empleado</h5>
                          <Autocomplete
                            id="combo-box-demo"
                            options={employe}
                            clearOnEscape
                            value={questions[activeStep].general[index].name}
                            onChange={(event, value) => {
                              handleselect(activeStep, index, value);
                            }}
                            isOptionEqualToValue={(option, value) =>
                              option.id === value.id
                            }
                            style={{ width: "45%" }}
                            noOptionsText={"No Employe Found"}
                            renderInput={(params) => (
                              <TextField {...params} label="Name" />
                            )}
                          />
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className={styles.options}>
                          {info.map((val, key) => {
                            return (
                              <div key={key} className={styles.option}>
                                <div style={{ width: "45%" }}>{val.title}</div>
                                <FormControl>
                                  <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                  >
                                    {val.data.map((value, key5) => {
                                      return (
                                        <FormControlLabel
                                          label={value}
                                          name={name[key]}
                                          value={value}
                                          onChange={handledata(
                                            activeStep,
                                            index
                                          )}
                                          control={
                                            <Radio
                                              color="blue"
                                              sx={{
                                                "& .MuiSvgIcon-root": {
                                                  fontSize: 12,
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
                              </div>
                            );
                          })}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </CardContent>
            </Card>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: 1,
                justifyContent: "space-around",
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Previous Question
              </Button>
              {questions[activeStep].general.length < 10 && (
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "green",
                  }}
                  onClick={() => {
                    handleadd(activeStep);
                  }}
                >
                  Agregar
                </Button>
              )}

              {questions[activeStep].general.length > 4 && (
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => {
                    handledelete(activeStep);
                  }}
                >
                  Delete
                </Button>
              )}

              <Button
                variant="contained"
                color="blue"
                style={{ color: "white" }}
                onClick={() => {
                  handleNext(activeStep);
                }}
              >
                Next Question
              </Button>
            </Box>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
