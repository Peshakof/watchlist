import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import ReactPlayer from 'react-player';
import youtube from '../apis/youtube';

const Index = ({res}) => {
  const [searchedText, setSearchedText] = useState('');
  const [searchedResult, setSearchedResult] = useState([]);


  const onChangeHandler = (e) => {
    setSearchedText(e.target.value);
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    
    console.log(searchedText)
    youtube.get('/search', {
      params: {
        q: searchedText
      }
    })
    .then(res => {
      console.log(res.data.items)
      setSearchedResult(res.data.items)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    
    console.log(res)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        {/* <MovieCard/> */}
        <form onSubmit={submitHandler}>
          <input type="text" name="searchText" id="searchText" onChange={onChangeHandler}/>
          <label htmlFor="searchText">search</label>
          <input type="submit" value="Submit"/>
        </form> 

        {
          searchedResult.map(item => (
          <div key={item.id}>{item.snippet.title}</div>
          ))
        }
        <ReactPlayer url="https://www.youtube.com/watch?v=lVJLNsLNnWs" controls={true}/>
      </main>
    </div>
  )
}

Index.getInitialProps = async () => {
  let data
  await axios.get('http://localhost:3000/api/hello')
    .then(res => {
      data = res.data
    })

  return {
    res: data
  }
}

export default Index;
