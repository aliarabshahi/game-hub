// we can use static genres from data folder instead of fetching from API


// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGeneres = () => useData<Genre>("/genres");
const useGeneres = () => ({ data: genres, error: null, isLoading: false });

export default useGeneres;
