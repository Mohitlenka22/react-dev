import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../utils/constants';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  console.log('ff');
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6847037&lng=83.2149637&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info);
    setRestaurant(await json?.data?.cards[0]?.card?.card?.info);
    console.log(restaurant);
  }
  return (
    <>
      <h1>RestaurantMenu: {id}</h1>
      <img src={URL + restaurant?.cloudinaryImageId} alt="" />
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default RestaurantMenu;
