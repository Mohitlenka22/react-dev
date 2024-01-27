import { useState } from 'react';
import { restaurantList } from '../utils/constants'; // Named Import
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurants from '../utils/useRestaurants';
import useOnline from '../utils/useOnline';

function filterRestaurants(restaurants, searchInput) {
  return restaurants.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchInput.toLowerCase()));
}

const Body = () => {
  const [searchInput, setSearchInput] = useState('');
  const restaurants = useRestaurants();
  const filteredRestaurants = filterRestaurants(restaurants, searchInput);

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Please Check Your Internet Connection</h1>;
  }

  return (
    // Conditional rendering
    <>
      <div className="search-bar">
        <input type="search" placeholder="search🔍" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
      </div>
      {filteredRestaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map(restaurant => {
            return (
              <Link key={restaurant?.info?.id} to={'/restaurant/' + restaurant?.info?.id}>
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
