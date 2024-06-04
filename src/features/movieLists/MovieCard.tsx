import React from "react";
import { MovieDataType } from "../../types/types";

type MovieCardProps = {
  movie: MovieDataType;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return <div>{movie.title}</div>;
}
