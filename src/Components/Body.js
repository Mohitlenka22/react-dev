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
    const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=17.6847037&lng=83.2149637');
    const json = await data.json();
    // Optional chaining
    // console.log(await json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(() => {
    getRestaurants();
  }, []); // onMount

  return (
    // Conditional rendering
    filteredRestaurants.length == 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="search-bar">
          <input type="search" placeholder="search🔍" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        </div>
        <div className="restaurant-list">
          {filteredRestaurants.map(restaurant => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
          })}
        </div>
      </>
    )
  );
};

export default Body;
