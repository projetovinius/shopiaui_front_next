import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreatedTypeProduct from "../form_category/formCategory";
import FormProduto from "../form_produto/formProduct";
import { Stack } from "@mui/material";

const steps = ["Categoria", "Produto"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <CreatedTypeProduct />;
      case 1:
        return <FormProduto />;
      case 2:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src="https://media.istockphoto.com/id/496603666/pt/vetorial/%C3%ADcone-plana-verifica%C3%A7%C3%A3o.jpg?s=612x612&w=0&k=20&c=59xwMZUHiaI53N1ouEYGjVsdbanq4iXqiU_MppilZ7M="
              alt="Sucesso"
              style={{ width: "150px", marginBottom: "16px" }}
            />
            <Typography
              variant="h4"
              sx={{ color: "#4caf50", marginBottom: "16px", fontWeight: "bold" }}
            >
              Cadastro realizado com sucesso!
            </Typography>
            <Typography variant="body1" sx={{ color: "#334d63",marginBottom: "24px" }}>
              Seu produto foi cadastrado com sucesso.
            </Typography>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          const isCompleted = activeStep > index;

          return (
            <Step key={label} {...stepProps} completed={isCompleted}>
              <StepLabel
                {...labelProps}
                sx={{
                  "& .MuiStepLabel-root": {
                    color: activeStep === index
                      ? "#0f8df5"
                      : isCompleted
                      ? "#4caf50"
                      : "#757575",
                  },
                  "& .MuiStepLabel-label": {
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: isCompleted ? "#4caf50" : undefined,
                  },
                  "& .MuiStepLabel-label.Mui-active": {
                    fontWeight: "bold",
                    color: "#0f8df5",
                  },
                  "& .MuiStepIcon-root": {
                    color: activeStep === index
                      ? "#0f8df5"
                      : isCompleted
                      ? "#4caf50"
                      : "#bdbdbd",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          {getStepContent(2)}
          <div
            className="flex flex-row item-center gap-10 "
          >
            
          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            sx={{
              backgroundColor: "#0f8df5",
              textTransform: "none",
              fontSize: "1.2rem",
            }}
          >
            Cadastrar Novo Produto
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => console.log("Ver Produtos")}
            sx={{
              textTransform: "none",
              fontSize: "1.2rem",
            }}
          >
            Ver Produtos
          </Button>
          </div>

        </div>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, color: "#ffe169" }}>
            {getStepContent(activeStep)}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep > 0 && (
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: 1,
                  width: "223px", 
                  textTransform: "none",
                  color: "#0f8df5",
                  fontSize: "1.2rem",
                }}
              >
                Voltar
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  width: "223px",
                  height: "45px",
                  textTransform: "none",
                  fontSize: "1.2rem",
                  backgroundColor: "#0f8df5",
                }}
              >
                Cadastrar
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  width: "223px",
                  height: "45px",
                  textTransform: "none",
                  backgroundColor: "#FFE069",
                  color: "#334d63",
                  boxShadow: "none",
                  fontSize: "1.2rem",
                }}
              >
                Prosseguir
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
