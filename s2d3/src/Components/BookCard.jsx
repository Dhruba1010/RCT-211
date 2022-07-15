import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getBooks } from '../Redux/appReducer/action';

const BookCard = () => {
    const dispatch = useDispatch();
    const books = useSelector(store => store.appReducer.books);

    const [searchParams] = useSearchParams();
    const location = useLocation();
 
    useEffect(() => {

      if(books.length === 0 || location.search){
        const sortBy = searchParams.get('sortBy');
        const getBookParams = {
          params : {
              category: searchParams.getAll('category'),
              _sort: sortBy && 'release_year',
              _order: sortBy,
          }
        }
        dispatch(getBooks(getBookParams))
      }
      
        
    },[books.length, dispatch, location.search, searchParams])

  return (
    <>
      {books.length > 0 && 
        books.map(b => {
          return (
            <Link key={b.id} to={`books/${b.id}`}>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', width: 'fit-content', lineHeight: '1px', marginTop:'4rem'}}>
                <img width='200px' src={b.cover_photo} alt={b.book_name} />
                <h5>{b.book_name}</h5>
                <p>{b.release_year}</p>
                <p>{b.category}</p>
              </div>
            </Link>
          )
        })
      }
    
    </>
  )
}

export default BookCard