import {useEffect, useState} from "react";
import Navbar, {Logo, Results, Search} from "./components/Navbar";
import { tempWatchedData, tempMovieData} from "./data/Data";
import MainBox from "./components/MainBox";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Box from "./components/Box";
import FilmList from "./components/FilmList";
import WatchedMoviesSummary from "./components/WatchedMoviesSummary";
import WantToWatch from "./components/WantToWatch";

export default function App() {
    const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState(tempWatchedData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect( () => {
        async function fetchMovies() {
            try {
            setIsLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=f84fc31d&`)

            if (!res.ok) throw new Error("Could not fetch movies");

            const data = await res.json();
            if(data.Response === 'False') throw new Error("Movie not found.");
            setMovies(data);
            setIsLoading(false);
        } catch (e) {
            setError(e.message);
        } finally {
                setIsLoading(false);
            }
        }
        fetchMovies();
    },[])


    return (
    <>
        <Navbar>
          <Logo/>
          <Search/>
          <Results movies={movies} />
        </Navbar>
        <MainBox>
            <Box>
                {isLoading && <Loader />}
                {isLoading && !error && <FilmList movies={movies} />}
                {error && <ErrorMessage message={error} />}
            </Box>
            <Box>
                <WatchedMoviesSummary watched={watched} />
                <WantToWatch watched={watched} />
            </Box>
        </MainBox>
    </>
  );
}
