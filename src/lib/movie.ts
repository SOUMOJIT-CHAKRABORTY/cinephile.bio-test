export async function getMovies(query: string) {
  const searchQuery = encodeURIComponent(query);

  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTA0MjU5MDA4M2QzODBmYjcxM2VlMWE2ODZiZTRhYiIsInN1YiI6IjY1NjcyYmRmYTM0OTExMDBjNDY3MjliYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BAjZc-xxLb0HUomlYf7x5LHip52gXnivVszsC9lhnVc",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data; // Return the data fetched from the API
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Re-throw the error to be caught by the component
  }
}
