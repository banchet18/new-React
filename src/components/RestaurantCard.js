import { CDN_URL } from "./utils.js/constants";

const RestaurantCard = (props) => {
  let { resdata } = props;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + resdata.data.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resdata.data.name}</h3>
      <h4>{resdata.data.cuisines.join(", ")}</h4>
      <h4>{resdata.data.avgRating}</h4>
      <h4>{resdata.data.costForTwo / 100}</h4>
      <h4>{resdata.data.deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
