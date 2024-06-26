import React from 'react'
import { useState, useEffect } from 'react'

import './App.css'
import SearchIcon from './search-removebg-preview.png'
import MovieCard from './MovieCard'

// abe2d60b

const API_URL = 'http://www.omdbapi.com/?apikey=abe2d60b'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    // Sync Data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Anime')
    }, [])


    return (
        <>
            <div className='app'>
                <h1>Movie Review</h1>

                <div className='search'>
                    <input
                        placeholder='Search movies'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img
                        src={SearchIcon}
                        alt="Search"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>

                {
                    movies.length > 0 ? (
                        <div class="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>

                    ) : (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default App