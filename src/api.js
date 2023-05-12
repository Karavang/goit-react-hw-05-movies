const API_KEY = '4fcefc575b80a7d43033c752f910cf0c';

export function forHomePage() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(res => res.json());
}

export function forSearchPage(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(res => res.json());
}
