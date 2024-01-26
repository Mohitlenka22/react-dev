import { URL } from '../utils/constants';

const RestaurantCard = ({ name, cloudinaryImageId, areaName, cuisines, avgRating, id }) => {
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
        <li>{id}</li>
      </ul>
    </div>
  );
};

export default RestaurantCard;
