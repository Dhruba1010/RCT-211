import React from 'react'

const BookCard = ({cover_photo, book_name, release_year, category}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', width: 'fit-content'}}>
      <img width='200px' src={cover_photo} alt={book_name} />
      <h5>{book_name}</h5>
      <p>{release_year}</p>
      <p>{category}</p>
    </div>
  )
}

export default BookCard