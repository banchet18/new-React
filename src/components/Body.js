import RestaurantCard from "./RestaurantCard";
import restaurantList from "./utils.js/restaurantList";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            restaurantList = restaurantList.filter((res) => {
              return res.data.avgRating > 4;
            });
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
