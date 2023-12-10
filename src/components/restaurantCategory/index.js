import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box ,Typography,AccordionDetails,AccordionSummary,Accordion} from '@mui/material';
import ItemList from './ItemList';

function RestaurantCategory({data,expanded, onChange }) {
  
    
  return (
    <Box sx={{margin:"10px"}} >
     <Accordion sx={{background:"#F0F8FF"}}
        expanded={expanded}
        onChange={onChange}
     >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography variant='inherit'><b>{data?.title} ({data?.itemCards.length})</b></Typography>
        </AccordionSummary>
       <AccordionDetails >
          <Typography>
            <ItemList items={data?.itemCards}/>
          </Typography>
        </AccordionDetails>
      </Accordion>   
    </Box>
  )
}

export default RestaurantCategory