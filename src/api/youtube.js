const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyCPl-YNRnmdtNPjSPkxvTyynS8b8HTAP3o';

export function getVideos() {
  return fetch(
    `${BASE_URL}/search?part=snippet&maxResults=25&key=${API_KEY}`
  ).then((res) => res.json());
}

export const getPopularVideos = () => {
  return fetch(
    `${BASE_URL}/videos?part=snippet&maxResults=25&chart=mostPopular&key=${API_KEY}`
  ).then((res) => res.json());
};
