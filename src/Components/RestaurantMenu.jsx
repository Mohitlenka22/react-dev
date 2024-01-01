import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { id } = useParams();
  return <h1>RestaurantMenu: {id}</h1>;
};

export default RestaurantMenu;
