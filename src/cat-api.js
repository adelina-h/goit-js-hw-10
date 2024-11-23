import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_zw1HIZKoBfbK6dLWCTJvA8n8QV0hyMp6sL4HSlfN32d4eEABbxTr7117b8H8jqKo';

  export const fetchBreeds = () => {
    return axios.get("https://api.thecatapi.com/v1/breeds")
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};

export const fetchCatByBreed = (breedId) => {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error));
};