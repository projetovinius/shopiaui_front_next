"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Stack from "@mui/material/Stack";
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { createdProduct } from "../apis/apiProduto/create-product";
import CreatedTypeProduct from "../form_category/formCategory";
import { AuthContext } from "@/contexts/AuthContext";
import useGetCategoriesQuery from "@/hooks/queries/useGetCategoriesQuery";
import useCreateCategoryForm from "@/hooks/useCreateCategoryForm";
import useCreateProductForm from "@/hooks/useCreateProductForm";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#324C63",
    },
    warning: {
      main: "#000",
    },
    secondary: {
      main: "#FFE069",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    button: {
      fontWeight: 500,
      textTransform: "none",
      fontSize: "18px",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
  },
});

// const createdProductForm = z.object({
//     name: z.string().min(1).max(30),
//     description: z.string().min(1).max(144),
//     price: z.number(),
//     quantity: z.number(),
//     category_id: z.number(),
//   })

export type CreatedProductForm = {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category_id: number;
};

export default function FormProduto() {
  const { token } = React.useContext(AuthContext);
  const { data = [], isLoading } = useGetCategoriesQuery(token);
  const { register, handleSubmit, control } = useForm<CreatedProductForm>({
    // resolver: zodResolver(createdProductForm)
  });
  const { handleOnSubmit } = useCreateProductForm(token);

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="w-[100%] mr-[200px] flex flex-col pt-7"
    >
      <ThemeProvider theme={theme}>
        <div className="flex flex-row w-[100%]  h-[60vh] items-center justify-between gap-24  ">
          <div className="w-full  flex flex-col items-center justify-center gap-[17px]">
            <FormControl
              sx={{
                width: '100%'
              }}
            >
              <TextField
                id="outlined-basic"
                label="Nome do Produto"
                color="warning"
                variant="outlined"
                {...register("name")}
              />
            </FormControl>

            <FormControl
              sx={{
                width: '100%'
              }}
            >
              <TextField
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                color="warning"
                rows={5}
                defaultValue=""
                {...register("description")}
              />
            </FormControl>
          </div>

          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
            }}
          >
            <FormControl sx={{ width: '100%' }}>
              <TextField
                label="Preço do Produto"
                id="outlined-start-adornment"
                color="warning"
                {...register("price")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">
                Tipo de Produto
              </InputLabel>
              <Controller
                name="category_id"
                control={control}
                defaultValue={1}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    color="warning"
                    label="Categoria do Produto"
                  >
                    {data.map((option: any) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <TextField
                id="outlined-basic"
                label="Quantidade Disponível"
                variant="outlined"
                {...register("quantity")}
              />
            </FormControl>
          </Box>
        </div>
        <div></div>
      </ThemeProvider>
    </form>
  );
}
