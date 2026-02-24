import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";
import { Container, Typography, Button } from "@mui/material";

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  const totalPrice = useMemo(() => {
    return state.cart.reduce((total, item) => total + item.price, 0);
  }, [state.cart]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4">Your Cart</Typography>

      {state.cart.map((item, index) => (
        <div key={index}>
          <Typography>
            {item.name} - ₹{item.price}
          </Typography>

          <Button
            color="error"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: index })
            }
          >
            Remove
          </Button>
        </div>
      ))}

      <Typography variant="h5" sx={{ mt: 3 }}>
        Total: ₹{totalPrice}
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </Button>
    </Container>
  );
};

export default Cart;
