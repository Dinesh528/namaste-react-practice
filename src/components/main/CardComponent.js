import React from "react";
import "./CardComponent.css";
import { CDN_URL } from "../../utills/constants";

const CardComponent = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData;

  return (
    <div className="card flex">
      <img src={CDN_URL + cloudinaryImageId} className="card-image" />
      <div className="card-content">
        <div className="card-title">
          <h3>{name.slice(0, 20)}</h3>
        </div>
        <div className="card-description">
          <h4>Cuisines : {cuisines.join(", ").slice(0, 30)}</h4>
          <p>{avgRating} stars</p>
          <p>{costForTwo}</p>
          <p>Area : {areaName} </p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Components
// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (CardComponent)=>{

  // returns a new Enhanced Component
  return (props)=>{
    return(
      <div>
        <label 
          style={{
            position:"absolute",
            background:"green",
            color:"white",
            margin:"0.4rem",
            padding:"0.5rem",
            borderRadius:"10px"
            }}>
          Vegetarian
          </label>

        {/*  {...props} will get all the props send to this component of cardComponent */}
        <CardComponent {...props}/>
      </div>
    )
  }
}

export default CardComponent;
