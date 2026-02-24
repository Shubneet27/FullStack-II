import { Card, CardContent, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CardComponent = ({ product }) => {
  const { dispatch } = useContext(AppContext);

  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography>₹{product.price}</Typography>

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: product })
          }
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
