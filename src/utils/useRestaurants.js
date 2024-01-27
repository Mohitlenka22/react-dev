import { useState, useEffect } from 'react';
import { RESTAURANT_URL } from './constants';

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  // liveData
  useEffect(() => {
    getRestaurants();

    return () => {}; // cleanup
  }, []); // onMount

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    // Optional chaining
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return restaurants;
};

export default useRestaurants;
