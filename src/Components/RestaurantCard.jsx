import { IMG_URL } from '../utils/constants';

const RestaurantCard = ({ name, cloudinaryImageId, areaName, cuisines, avgRating, id }) => {
  return (
    <div className="h-76 m-4 shadow-xl rounded-lg"> {/* restaurant-card */}
      <img className='h-40 w-44 rounded-lg' src={`${IMG_URL}${cloudinaryImageId}`} alt="" />
      <ul className='text-sm h-40 w-48 m-1'>
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
