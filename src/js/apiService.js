const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '24308599-8d74ffbf61a0452a33ac58337';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImage() {
    const responseUrl = await fetch(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );

    const { hits: images } = await responseUrl.json();
    this.incrementPage();

    return images;
  }
  // fetchImage() {
  //   const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

  //   return fetch(url).then(response =>
  //     response.json().then(({ hits }) => {
  //       this.incrementPage();
  //       return hits;
  //     }),
  //   );
  // }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}