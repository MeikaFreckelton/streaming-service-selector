import React from 'react'
import FormInput from './FormInput'



const Home = () => {
    

    const netflixMovieGenres = [
        'Action & Adventure', 'Australian', 'Blockbuster', 'Comedies', 'Crime', 'Critically Aclaimed', 'Documentaries',
        'Dramas', 'Horror', 'Independent', 'International', 'New Releases', 'Romantic', 'Sci-Fi & Fantasy', 'Thriller'
    ]

    const stanGenres = [
        'Horror', 'Thriller', 'Drama', 'Comedy', 'Action', 'Documentary', 'Romance', 'Sci-fi', 'World' 
    ]

    


    return (
        <div>
            <h1 className="heading">Time to pick something to watch u indecisive idiots </h1>
            <FormInput netMovies={netflixMovieGenres} stanGenres={stanGenres}/>


        </div>
    )
}

export default Home