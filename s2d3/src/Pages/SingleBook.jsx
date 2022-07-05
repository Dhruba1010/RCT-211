import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../Redux/appReducer/action';

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(store => store.appReducer.books);
  const [curBook, setCurBook] = useState({});

  useEffect(() => {
    if(books.length === 0){
      dispatch(getBooks())
    }
  },[books.length, dispatch])

  useEffect(() => {
    if(id){
      const temp = books.find(book => book.id === Number(id));
      temp && setCurBook(temp);
    }
  },[books, id])

  return (
    <div>
      <img src={curBook.cover_photo} alt={curBook.book_name} />
      <h2>{curBook.book_name}</h2>
      <h4>author : {curBook.author}</h4>
      <h4>category : {curBook.category}</h4>
      <h5>release year : {curBook.release_year}</h5>
      <Link to={`/books/${curBook.id}/edit`}>
        <button>EDIT</button>
      </Link>
    </div>
  )
}

export default SingleBook