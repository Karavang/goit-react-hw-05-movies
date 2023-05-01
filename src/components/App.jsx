import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { Movies } from './Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
