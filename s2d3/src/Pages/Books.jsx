import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from '../Components/BookCard';
import { getBooks } from '../Redux/appReducer/action';

const Books = () => {
    const dispatch = useDispatch();
    const books = useSelector(store => store.appReducer.books);
 
    useEffect(() => {
        dispatch(getBooks())
    },[dispatch])

    console.log(books.book_name);

  return (
    <div>
      {books?.map(b => {
        return (<BookCard key={b.id} {...b} />)
      })}
        
    </div>
  )
}

export default Books