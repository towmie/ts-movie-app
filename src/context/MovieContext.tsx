import React, { createContext, useReducer } from "react";
import { MovieDataType } from "../types/types";
import { moviesData } from "../assets/data";

interface MovieContextProps {
  children: React.ReactNode;
}
interface MovieState {
  movies: MovieDataType[];
}
interface MovieAction {
  type: string;
  id: string;
}

const MovieList: MovieDataType[] = moviesData;

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOGGLED_BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id) {
            return { ...movie, isBookmarked: !movie.isBookmarked };
          }
          return movie;
        }),
      };
    default:
      return { ...state };
  }
};

const initialMovieState: MovieState = {
  movies: MovieList,
};

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({
  state: initialMovieState,
  dispatch: () => {},
});

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
