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
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resdata.data.cloudinaryImageId
        }
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
