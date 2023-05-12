import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies/" element={<Movies />}>
            <Route path=":id" element={<MovieDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
