"use client";
import React, { useEffect } from "react";
import { Input } from "@nextui-org/react";
import { getMovies } from "@/lib/movie";
import { set } from "mongoose";

interface Movie {
  id: number;
  original_title: string;
}

export default function MovieForm() {
  const placements = ["inside", "outside", "outside-left"];
  const [movie, setMovie] = React.useState<Movie[]>([]);
  const [fav, setFav] = React.useState<string>("");
  const [serise, setSerise] = React.useState<string>("");
  const [movieInput, setMovieInput] = React.useState("");
  useEffect(() => {
    getMovies(movieInput)
      .then((data) => {
        console.log(data);
        setMovie(data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [movieInput]);
  console.log(movie);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-default-500 text-small">
          Currently watching Movie
        </h3>
        <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            className="text-black"
            // label="Currently watching"
            //   labelPlacement={placement}
            onChange={(e) => setMovieInput(e.target.value)}
            value={movieInput}
            placeholder="  Movie title"
            //   description={placement}
          />
        </div>
        <h3 className="text-default-500 text-small">
          Currently watching Serise
        </h3>
        <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            className="text-black"
            // label="Currently watching"
            //   labelPlacement={placement}
            onChange={(e) => setSerise(e.target.value)}
            placeholder="  Movie title"
            value={serise}
            //   description={placement}
          />
          <ul>
            {movie.map((mov) => (
              <li key={mov.id}>{mov.original_title}</li>
            ))}
          </ul>
        </div>
        <h3 className="text-default-500 text-small">Fav Movie</h3>
        <div className="flex w-[45%] flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            type="email"
            className="text-black"
            // label="Currently watching"
            //   labelPlacement={placement}
            onChange={(e) => setFav(e.target.value)}
            placeholder="  Movie title"
            value={fav}
            //   description={placement}
          />
        </div>
        <button className="px-3 py-2 bg-green-500 w-[10%] ">Save</button>
      </div>
    </div>
  );
}
