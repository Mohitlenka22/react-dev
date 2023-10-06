import React, { useState } from 'react';

const Home = () => {
  const [items, setItems] = useState(['one', 'two', 'three']);
  const [query, setQuery] = useState('');
  const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </form>
      {filteredItems.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Home;
