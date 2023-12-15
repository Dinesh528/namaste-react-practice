import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CDN_URL } from '../../utills/constants'
import { addItem } from '../../appStore/slice/cartSlice/cartSlice'

function ItemList({items}) {
    //console.log(items)

    const dispatch = useDispatch();

    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }

  return (
    <div >
            {items.map(item => (
                <>
                <Box key={item.card.info.id} sx={{ display: "flex", alignItems: "center" ,padding:"10px"}} data-testid="foodItems">
                    <Box sx={{ flex: 1 }}>
                        <Typography 
                            variant='body1' 
                            sx={{ pt: 1 }}>
                            <b>{item.card.info.name} - 
                                ₹{item.card.info.defaultPrice ? 
                                 item.card.info.defaultPrice / 100 :
                                 item.card.info.price / 100}</b>
                        </Typography>
                        <Box sx={{ pt: 2, pb: 2 }}>
                            <Typography 
                                variant='body2'>
                                <b>Description:</b> <br></br>
                                {item.card.info.description}
                            </Typography>
                        </Box>
                        
                    </Box>
                   
                    <div style={{position:"relative"}}>
                        <img src={CDN_URL + item.card.info.imageId} style={{ width: "100px", height: "100px" }} />
                        <Button 
                            variant='contained' 
                            color='success' 
                            sx={{position:"absolute",right:"15px",top:"60px"}}
                            onClick={()=>handleAddItem(item)}
                            > 
                            + Add
                            </Button>
                    </div>
                    
                </Box>
                <hr key={`hr-${item.card.info.id}`}></hr>
                </>
            ))}
        </div>
  )
}

export default ItemList