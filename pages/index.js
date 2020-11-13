import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import MovieCard from '../components/MovieCard';
import ReactPlayer from 'react-player';
import { set } from 'mongoose';

const Index = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState({});

  useEffect(() => {
    axios.get('https://imdb8.p.rapidapi.com/title/get-coming-soon-movies', {
      "headers": {
        "x-rapidapi-key": "64a29993e6mshdd3b7f419132a39p1abef9jsnaac6e119d059",
        "x-rapidapi-host": "imdb8.p.rapidapi.com"
      }
    })
    .then(res => {
      setUpcomingMovies(res.data.slice(0,10))
      
    })
    .catch(err => {
      console.log(err)
    })
  }, [upcomingMovies])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        {/* <MovieCard/> */}
        <a href="https://www.imdb.com/video/vi1441049625?api_key=64a29993e6mshdd3b7f419132a39p1abef9jsnaac6e119d059">
          trailer
        </a>  
        <p>{upcomingMovies.map(movie => {
          return (
            <p>
              {movie}
            </p>  
          )
        })}</p>  
        <ReactPlayer url="https://www.imdb.com/video/vi1441049625?api_key=64a29993e6mshdd3b7f419132a39p1abef9jsnaac6e119d059" />
      </main>
    </div>
  )
}

export default Index;
