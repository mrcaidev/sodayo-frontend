import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PrintIcon from "@mui/icons-material/Print";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { OrderType } from "constants/order-type.constant";

interface Props {
  setOrderType(type: OrderType): void;
}

export function SelectOrderType({ setOrderType }: Props) {
  return (
    <Grid container width="100%" spacing={2}>
      <Grid item xs={6} sm={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOrderType(OrderType.takeout)}
          sx={{ aspectRatio: "1/1", flexDirection: "column" }}
        >
          <LocalShippingIcon sx={{ display: "block", fontSize: 60 }} />
          <Typography component="h2" variant="h5" sx={{ my: 2 }}>
            外卖
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOrderType(OrderType.express)}
          sx={{ aspectRatio: "1/1", flexDirection: "column" }}
        >
          <FastfoodIcon sx={{ display: "block", fontSize: 60 }} />
          <Typography component="h2" variant="h5" sx={{ my: 2 }}>
            快递
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOrderType(OrderType.shop)}
          sx={{ aspectRatio: "1/1", flexDirection: "column" }}
        >
          <ShoppingCartIcon sx={{ display: "block", fontSize: 60 }} />
          <Typography component="h2" variant="h5" sx={{ my: 2 }}>
            超市
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOrderType(OrderType.print)}
          sx={{ aspectRatio: "1/1", flexDirection: "column" }}
        >
          <PrintIcon sx={{ display: "block", fontSize: 60 }} />
          <Typography component="h2" variant="h5" sx={{ my: 2 }}>
            打印
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOrderType(OrderType.other)}
          sx={{ aspectRatio: "1/1", flexDirection: "column" }}
        >
          <MoreHorizIcon sx={{ display: "block", fontSize: 60 }} />
          <Typography component="h2" variant="h5" sx={{ my: 2 }}>
            其它
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
