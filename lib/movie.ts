export async function getMovies() {
  const url = "https://api.themoviedb.org/3/movie/changes?page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTA0MjU5MDA4M2QzODBmYjcxM2VlMWE2ODZiZTRhYiIsInN1YiI6IjY1NjcyYmRmYTM0OTExMDBjNDY3MjliYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BAjZc-xxLb0HUomlYf7x5LHip52gXnivVszsC9lhnVc",
    },
  };

  const data = fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}
