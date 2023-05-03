const API_KEY = '4fcefc575b80a7d43033c752f910cf0c';

export function fetchSearch(endle, id) {
  return fetch(
    `https://api.themoviedb.org/3/${endle}/${id}?api_key=${API_KEY}`
  ).then(res => res.json());
}
