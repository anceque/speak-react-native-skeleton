import axiosLib from "axios"

const apiKey = "adbfde7a3d0bf67ae9cc64c4f6da1b73"

export const axios = axiosLib.create({
  baseURL: "http://api.themoviedb.org/3",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
})

axios.interceptors.request.use(request => ({
  ...request,
  url: `${request.url}?api_key=${apiKey}`,
}))

export const loadLatestMovie = () => axios.get("/movie/latest")
export const loadTopRatedMovies = () => axios.get("/movie/top_rated")
export const loadMovieDetail = id => axios.get(`/movie/${id}`)
