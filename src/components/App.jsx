import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { useState } from 'react';
import { Cast } from './Cast';

export const App = e => {
  const [title, setTitle] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="/movies"
            element={<Movies title={title} setTitle={setTitle} />}
          />
          <Route path="/movies/:id" element={<MovieDetails e={title} />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
