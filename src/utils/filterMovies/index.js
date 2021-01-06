function filterMovies(filter, data) {
  const filteredData = data.filter((movie) => movie.genres.includes(
    filter.charAt(0).toUpperCase() + filter.slice(1),
  ));
  if (filter === 'all') {
    return (data);
  }
  return (filteredData);
}

export default filterMovies;
