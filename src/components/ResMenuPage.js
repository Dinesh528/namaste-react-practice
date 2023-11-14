import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResmenu from '../utills/custom hooks/useResmenu';
import RestaurantCategory from './restaurantCategory'
import { Box, Typography } from '@mui/material';

 const ResMenuPage = () => {

    const {resId} = useParams();
    //console.log(resId);
   const resInfo = useResmenu(resId);
    if(resInfo === null){
        return <Shimmer/>;
    }

    const {name} = resInfo?.cards[0]?.card?.card?.info
//     const { itemCards } =
//     resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//    console.log(itemCards)
const { itemCards } =
resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    //console.log(categories)

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
    <Typography variant='h3' >{name}</Typography>
    <Typography variant='h4'>Menu</Typography>
    {/* <Box>
        {itemCards?.map((res) => (
            <Typography variant='body1' style={{listStyle:"none"}} key={res.card.info.id}>{res.card.info.name} - Rs.{res.card.info.price / 100}</Typography>
        ))}
    </Box> */}
    <Box sx={{width:"70%"}}>
        {categories.map((category) => (<RestaurantCategory data={category?.card?.card} key={category.id}/>))}

    </Box>
</Box>
  )
}

export default ResMenuPage