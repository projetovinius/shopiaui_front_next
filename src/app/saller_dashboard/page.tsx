import { Box, Button, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Poppins } from "next/font/google";
import { PieChart } from "@mui/x-charts/PieChart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function SallerDashBoard() {
    const router = useRouter()

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        height: "90%",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "1.5rem",
          color: "#324C63",
        }}
      >
        Bem vindo(a) a sua área de trabalho!
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "1.2rem",
            textAlign: "start",
            color: "#324C63",
          }}
        >
          Comece agora a gerência da sua loja,de forma simplificada!
        </Typography>
      </Typography>
      <Divider />
      <Box
        sx={{
          // marginY: '24px',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          // gap: '14px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            gap: "120px",
          }}
        >
          {/* Adicionar produtos */}
          <Button
            onClick={() => router.push('')}
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // marginY: '14px',
              borderRadius: "6px",
              textTransform: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#189950",
                  backgroundColor: "#baffd8",
                  padding: "14px",
                  borderRadius: "100%",
                }}
              >
                <AddShoppingCartIcon />
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#324C63",
                }}
              >
                Adicionar produtos
              </Typography>
            </Box>
          </Button>

          {/* Personalizar loja */}
          <Button
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginY: "54px",
              borderRadius: "6px",
              textTransform: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#947a00",
                  backgroundColor: "#ffec99",
                  padding: "14px",
                  borderRadius: "100%",
                }}
              >
                <StoreIcon />
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#324C63",
                }}
              >
                Personalizar loja
              </Typography>
            </Box>
          </Button>

          {/* Vitrine de produtos */}
          <Button
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginY: "54px",
              borderRadius: "6px",
              textTransform: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#0796e8",
                  backgroundColor: "#b3e2fc",
                  padding: "14px",
                  borderRadius: "100%",
                }}
              >
                <HomeIcon />
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#324C63",
                }}
              >
                Vitrine de produtos
              </Typography>
            </Box>
          </Button>
        </Box>
      </Box>
      <Box />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: "2.6rem",
            color: "#324C63",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          Resumo das vendas
          <Box
            sx={{
              paddingLeft: "24px",
              flexGrow: 1,
            }}
          >
            <Divider />
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "24px",
          padding: "0 34px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "1.2rem",
              color: "#324C63",
            }}
          >
            Categorias Mais Vendidas:
          </Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-around",
            width: "60%",
            height: "200px",
            padding: "24px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                borderBottom: "1px solid #324C63",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.8rem",
                  color: "#324C63",
                }}
              >
                Total das vendas:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  color: "#189950",
                }}
              >
                R$ 200,00
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
                gap: "14px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#324C63",
                }}
              >
                Total de produtos vendidos:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "2.0rem",
                  color: "#078ee8",
                }}
              >
                30
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                borderBottom: "1px solid #324C63",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.8rem",
                  color: "#324C63",
                }}
              >
                Total de Clientes:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  color: "#189950",
                }}
              >
                15
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
                gap: "14px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "#324C63",
                }}
              >
                Total de pedidos realizados:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  textAlign: "center",
                  fontSize: "2.0rem",
                  color: "#078ee8",
                }}
              >
                20
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
