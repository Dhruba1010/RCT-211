import React from 'react';
import BookCard from '../Components/BookCard';
import Filter from '../Components/Filter';
import Sort from '../Components/Sort';


const Books = () => {
  return (
    <div style={{display: 'flex', marginLeft: '2rem'}}>
      <div style={{width: '300px', marginTop: '2rem'}}>
        <Filter />
        <Sort />
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap:'2rem', margin: 'auto'}}>
        <BookCard />
      </div>
    </div>
  )
}

export default Books