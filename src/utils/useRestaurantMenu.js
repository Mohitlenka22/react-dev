import { useState, useEffect } from 'react';

const useRestaurantMenu = id => {
  const [restaurant, setRestaurant] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.501976&lng=80.639227&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(await json?.data?.cards[0]?.card?.card?.info);
    setItems(await json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
    // console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);
  }
  return [restaurant, items];
};

export default useRestaurantMenu;
