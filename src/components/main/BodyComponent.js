import React, { useState,useEffect } from "react";
import CardComponent,{withPromotedLabel} from "./CardComponent";
import { data } from "../../utills/mockData";
import "./Body.css";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import {RES_LIST_URL} from "../../utills/constants";
import useOnlineStatus from "../../utills/custom hooks/useOnlineStatus";

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
    <div className="container">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-bar" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={HandleFilterRes}
            >Search</button>
        </div>
        <button onClick={HandleTopRated} className="filter-btn bg-slate-600">
          Top Rated Resturants
        </button>
        <button onClick={()=>{setFilteredRestaurant(listOfRestaurants); setSearchText("")}}>Clear</button>
      </div>

      <div className="card-container">
        {filteredRestaurant?.map((x) => (
          
          <div key={x.info.id}>
            <Link to={"/restaurants/"+x.info.id}>
              {
                x.info.veg? <RestaurantCardPromotedLabel resData={x?.info}/> : <CardComponent
                resData={x?.info}/>
              }
          
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
