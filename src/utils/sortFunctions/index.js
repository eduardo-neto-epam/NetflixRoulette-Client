import filterMovies from '../filterMovies/index.js';

export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    // eslint-disable-next-line no-prototype-builtins
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    if (Array.isArray(a[key]) && Array.isArray(b[key])) {
      const sortedA = a[key].sort((c, d) => c.localeCompare(d));
      const sortedB = b[key].sort((c, d) => c.localeCompare(d));
      const varA = sortedA.join().replace(/[\s,]+/g, '').toUpperCase();
      const varB = sortedB.join().replace(/[\s,]+/g, '').toUpperCase();
      const comparison = varA.localeCompare(varB);
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    }

    const varA = (typeof a[key] === 'string')
        && a[key].toUpperCase();
    const varB = (typeof b[key] === 'string')
        && b[key].toUpperCase();

    const comparison = varA.localeCompare(varB);
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

export function sortMovies(data, selectedMethod, filter) {
  const sortBy = selectedMethod;
  // eslint-disable-next-line no-console
  console.log('sortBy: ', sortBy);
  if (sortBy === 'release date') {
    const sortedMovies = data.sort(compareValues('release_date', 'desc'));
    const filteredSortedMovies = filterMovies(filter, sortedMovies);
    return filteredSortedMovies;
  }
  if (sortBy === 'movie title') {
    const sortedMovies = data.sort(compareValues('title'));
    const filteredSortedMovies = filterMovies(filter, sortedMovies);
    return filteredSortedMovies;
  }
  if (sortBy === 'movie genre') {
    const sortedMovies = data.sort(compareValues('genres'));
    const filteredSortedMovies = filterMovies(filter, sortedMovies);
    return filteredSortedMovies;
  }
  return data;
}
