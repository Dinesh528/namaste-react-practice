import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import ItemList from "../restaurantCategory/ItemList";
import { clearCart } from "../../appStore/slice/cartSlice/cartSlice";

const Cart = ()=>{

    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return(
        <div >
            <Box display="flex" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Typography variant="h4" sx={{textAlign:"center",mr:"1rem"}}>Cart</Typography>
                <Button variant="outlined" onClick={handleClearCart}>Clear Cart</Button>
            </Box>
           
            <Box 
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width: "60%", 
                    margin: "0 auto",
                }}>
                <ItemList items={cartItems}/>
            </Box>
            <Box 
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                {cartItems.length === 0 && (<Typography variant="h4">Please add some reciepes </Typography>)}
            </Box>
        </div>
    )
}

export default Cart;