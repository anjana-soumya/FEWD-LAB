import React from 'react';
import Weather from './Weather';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
      <Weather />
      {/* Other homepage sections */}
    </div>
  );
};

export default Home;