// createElement(type, props, ...children)
// children can array of React Elements or passed as arguments
import React from 'react';
const heading1 = React.createElement(
  'h1',
  {
    id: 'h1',
    key: 'h1',
  },
  'Heading1'
);
const heading2 = React.createElement(
  'h2',
  {
    id: 'h2',
    key: 'h2',
  },
  'Heading2'
);

const div = React.createElement(
  'div',
  {
    id: 'div',
    key: 'div',
  },
  //   [heading, heading2]
  heading1,
  heading2
);
// JSX
// React Element
const heading = (
  <div>
    <h1>Namaste React</h1>
  </div>
);
// functional Component - is a Js function which returns a piece of JSX code
const HeadingComponent1 = () => {
  return <h1>Namaste React functional Component1</h1>;
};
// Instead of having a return statement we can do this
const HeadingComponent2 = () => (
  <div>
    {/* {HeadingComponent1()} */}
    <HeadingComponent1 />
    {/* we can put any Js code inside {} braces */}
    <h1>Namaste React functional Component2</h1>
  </div>
);

// App
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer'; // Defaults imports
import About from './Components/About';
import UserClass from './Components/UserClass';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Contact from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';
import Error from './Components/Error';

const App = () => {
  return (
    <>
      {/* React.Fragment */}
      <Header />
      <Outlet />
      <Footer />
      {/* <UserClass /> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export { appRouter };
