import React, { useState,useEffect } from "react";
import CardComponent,{withPromotedLabel} from "./CardComponent";
import "./Body.css";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import {RES_LIST_URL} from "../../utills/constants";
import useOnlineStatus from "../../utills/custom hooks/useOnlineStatus";
import { Box, Button, Grid, TextField } from "@mui/material";
//import { data } from "../../utills/mockData";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [ searchText,setSearchText] = useState("")

  const RestaurantCardPromotedLabel = withPromotedLabel(CardComponent);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () => {
      const data = await fetch(
        RES_LIST_URL
      );
      const json = await data.json();
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setListOfRestraunt(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };

    const HandleTopRated=()=>{
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4
      );
      setFilteredRestaurant(filteredList);
    }

    const HandleFilterRes=()=>{
      const filteredRes= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
      console.log(filteredRes);
      setFilteredRestaurant(filteredRes);
    }
    const isOnline = useOnlineStatus();
    if(isOnline === false){
      return <h1>Please look at the internet connection</h1>
    }
    
    if(listOfRestaurants?.length === 0){
      return <Shimmer/>
    }

    
  return (
    <Box sx={{padding:{xs:0,md:"20px"},margin:"2rem"}}>
      <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' }, marginBottom: "1rem", justifyContent: "center" }}>
        
        <TextField
          label="Search Restaurant"
          type="text"
          className="search-bar"
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value) }}
          sx={{ 
            marginBottom: { xs: "1rem", md: 0 }, 
            width: { xs: '100%', md: "350px" }, 
            marginRight: { xs: 0, md: "1rem" }, 
          }}
        />

        <Box sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' } }}>
          <Button
            variant="outlined"
            onClick={HandleFilterRes}
            sx={{ width: '100%', marginRight: { xs: 0, md: "1rem" },marginBottom:{xs:"0.5rem",md:0} }}
          >
            Search
          </Button>

          <Button
            variant="outlined"
            onClick={HandleTopRated}
            sx={{
               width: '100%',
               marginRight: { xs: 0, md: "1rem" }, 
               display: { xs: 'none', md: "inline-block" },
              }}
          >
            Top Rated Restaurants
          </Button>

          <Button
            variant="outlined"
            color="warning"
            onClick={() => { setFilteredRestaurant(listOfRestaurants); setSearchText("") }}
            sx={{ 
              width: '100%',
              marginTop:{xs:"0.5rem",md:0} 
            }}
          >
            Clear
          </Button>
        </Box>
      </Box>

      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"}}>
        {filteredRestaurant?.map((x) => (
          
          <div key={x.info.id}>
            <Link to={"/restaurants/"+x.info.id} style={{textDecoration:"none",color:"black"}}>
              {
                x.info.veg? <RestaurantCardPromotedLabel resData={x?.info}/> : <CardComponent
                resData={x?.info}/>
              }
          
          </Link>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default BodyComponent;
