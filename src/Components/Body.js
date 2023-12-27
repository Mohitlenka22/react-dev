import { useEffect, useState } from 'react';
import { restaurantList } from '../constants'; // Named Import
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

function filterRestaurants(restaurants, searchInput) {
  return restaurants.filter(restaurant => {
    return restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase());
  });
}

const Body = () => {
  const [searchInput, setSearchInput] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const filteredRestaurants = filterRestaurants(restaurants, searchInput);

  // liveData
  async function getRestaurants() {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6847037&lng=83.2149637&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    // Optional chaining
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
    getRestaurants();

    return () => {}; // cleanup
  }, []); // onMount

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
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;
