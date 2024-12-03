import React, { useEffect, useRef, useState } from 'react'
import './Tittlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


function Tittlecard({ title, category }) {

  const[apiData,setApidata]=useState([]);
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmVjYTc4MzFmYmZkMjE4YmNhMzFjNjdkZmQ3ZDJiZiIsIm5iZiI6MTczMzE0Mjc4NC4wODgsInN1YiI6IjY3NGRhOTAwZTdkNmY4MjkyZTBiOTQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6TCRz22dvO1w_XnRGkF31k_HKngmVH1L8OTTH46uzSk'
    }
  };
  
  

  const handlewheel = (event) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1'`, options)
    .then(res => res.json())
    .then(res => setApidata(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handlewheel)
  }, [])
  return (
    <div className='tittle-cards'>
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link  to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Tittlecard
