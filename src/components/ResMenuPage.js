import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResmenu from '../utills/custom hooks/useResmenu';
import RestaurantCategory from './restaurantCategory'
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

 const ResMenuPage = () => {

    const {resId} = useParams();
    //console.log(resId);
   const resInfo = useResmenu(resId);

   const [expanded, setExpanded] = useState(null);


    if(resInfo === null){
        return <Shimmer/>;
    }

    const {name} = resInfo?.cards[0]?.card?.card?.info

// const { itemCards } =
// resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    

    const handleAccordionChange = (index) => {
      setExpanded(index === expanded ? null : index);
    };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
    <Typography variant='h3' >{name}</Typography>
    <Typography variant='h4'>Menu</Typography>
   
    <Box sx={{width:"70%"}}>
        {categories.map((category,index) => (
          <RestaurantCategory 
            data={category?.card?.card} 
            key={category.card.card.title}
            expanded={index === expanded}
            onChange={() => handleAccordionChange(index)}
          />))}

    </Box>
</Box>
  )
}

export default ResMenuPage