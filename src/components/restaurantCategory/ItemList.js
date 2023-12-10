import { Box, Typography } from '@mui/material'
import React from 'react'
import { CDN_URL } from '../../utills/constants'

function ItemList({items}) {
    console.log(items)
  return (
    <div >
            {items.map(item => (
                <>
                <Box key={item.card.info.id} sx={{ display: "flex", alignItems: "center" ,padding:"10px"}}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant='body1' sx={{ pt: 1 }}><b>{item.card.info.name} - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</b></Typography>
                        <Box sx={{ pt: 2, pb: 2 }}>
                            <Typography variant='body2'><b>Description:</b> <br></br>{item.card.info.description}</Typography>
                        </Box>
                    </Box>
                    <img src={CDN_URL + item.card.info.imageId} style={{ width: "100px", height: "100px" }} />
                </Box>
                <hr></hr>
                </>
            ))}
        </div>
  )
}

export default ItemList