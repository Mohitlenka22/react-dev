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
import UserClass from './Components/UserClass';

const App = () => {
  return (
    <>
      {/* React.Fragment */}
      <UserClass />
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
