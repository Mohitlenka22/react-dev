import { URL } from '../constants';

const RestaurantCard = ({ name, cloudinaryImageId, areaName, cuisines, avgRating }) => {
  return (
    <div className="card-container">
      <img src={`${URL}${cloudinaryImageId}`} alt="" />
      <ul>
        <li>
          <h2>{name}</h2>
        </li>
        <li>{`⭐️${avgRating}`}</li>
        <li>{areaName}</li>
        <li>{cuisines.join(', ')}</li>
      </ul>
    </div>
  );
};

export default RestaurantCard;
