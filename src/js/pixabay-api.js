import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export async function searchImages(userValue, currentPage) {
  const API_KEY = api;
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    key: API_KEY,
    q: userValue,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 15,
    page: currentPage,
    safesearch: true,
  };
  try {
    const result = await axios.get(url, { params });
    if (result.data.hits.length === 0) {
      showErrorToast();
    }
    return result.data;
  } catch (error) {
    throw error;
  }
}

function showErrorToast() {
  iziToast.show({
    position: 'topRight',
    messageColor: 'white',
    progressBar: false,
    backgroundColor: 'red',
    closeOnClick: true,
    close: false,
    message:
      'Sorry, there are no images matching your search query. Please, try again!',
  });
}