import { useParams } from 'react-router-dom';
import { IMG_URL } from '../utils/constants';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, items] = useRestaurantMenu(id);

  return (
    <>
      <div>
        <h1>Restaurant id: {id}</h1>
        <br />
        <img className="RestaurantLogo" src={IMG_URL + restaurant?.cloudinaryImageId} alt="RESTAURANT LOGO" />
        <br />
        {console.log(restaurant?.name)}
        <h2> {restaurant?.name}</h2>
        <h2> {restaurant?.city}</h2>
        <h2> {restaurant?.locality}</h2>
        <h3> {restaurant?.areaName}</h3>
        <h3> {restaurant?.avgRating + '⭐'}</h3>
        <h3> {restaurant?.costForTwoMessage}</h3>
      </div>
      <ul>
        {!items ? (
          <Shimmer />
        ) : (
          items?.map(item => {
            return (
              <li key={item.card.info.id}>
                <h2 className="menu-names">{item.card.info.name} </h2>{' '}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default RestaurantMenu;
