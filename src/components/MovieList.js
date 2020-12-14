import React, {useState, useEffect} from 'react'

const MovieList = (props) => {
    
    const [ movies, setMovies ] = useState({
        error: null,
        isLoaded: false,
        items: []
    })

    const baseUrl = 'http://localhost:4000/movies'

    useEffect(()=>{
        fetch(baseUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setMovies((prev) => {
               return {
                    ...prev,
                    isLoaded: true,
                    items: result.data
                }
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setMovies((prev) => {
                return {
                    ...prev,
                    isLoaded: true,
                    error
                }
            });
          }
        )
    }, [])
    
    const { error, isLoaded, items } = movies;

    return (
        <>
            <div>Movies List</div>
            {!isLoaded && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {items.length && 
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
            }
        </>
    )
}

export default MovieList
