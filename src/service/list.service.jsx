import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getList = async () => {
  const movie = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=08198df791eb6b6663d66e664d89e588"
  );
  return movie.data.results;
};
export const searchMovie = async (a) => {
  const search = await axios.get(
    "https://api.themoviedb.org/3/search/movie?query=" +
      `${a}` +
      "&api_key=08198df791eb6b6663d66e664d89e588&"
  );
  return search.data;
};

export const getCategory = async () => {
  const category = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=08198df791eb6b6663d66e664d89e588"
  );
  return category.data.results;
};

export const getCategoryBy = async (cat) => {
  const resp = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list" + `${cat}` + "?api_key=08198df791eb6b6663d66e664d89e588"
  );
  return resp.data.results;
};

export const getDetails = async (id) => {
  const details = await axios.get(
    "https://api.themoviedb.org/3/movie/" +
      `${id}` +
      "?api_key=08198df791eb6b6663d66e664d89e588"
  );
  return details.data;
  
};
