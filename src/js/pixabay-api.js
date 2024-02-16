export function fetchImg(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = new URLSearchParams({
    key: '42320174-3e6043d2cde7399227b0118b6',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${PARAMS}`;
  return fetch(url).then(res => res.json());
}
