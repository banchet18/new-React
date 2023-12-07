import RestaurantCard from "./RestaurantCard";
import restaurantList from "./utils.js/restaurantList";
import { useState } from "react";

const Body = () => {
  const [restaurantList] = useState();

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            restaurantList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(restaurantList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard resdata={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
