const API_KEY = '4fcefc575b80a7d43033c752f910cf0c';

export function forHomePage() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(res => res.json());
}
