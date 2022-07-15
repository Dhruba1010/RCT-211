import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Sort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const urlSort = searchParams.get('sortBy');

    const [sortBy, setSortBy] = useState(urlSort || '');

    

    const handleSort = (e) => {
        setSortBy(e.target.value);
    }

    useEffect(() => {
        if(sortBy){
            const params = {
                category: searchParams.getAll('category'),
                sortBy
            }

            setSearchParams(params)
        }
    },[searchParams, setSearchParams, sortBy])


  return (
    <div>
        <h3>Sort</h3>
        <div onChange={handleSort}>
            <input type="radio" value='asc'  name='sortBy' defaultChecked={sortBy === 'asc'} /> Ascending
            <input type="radio" value='desc' name='sortBy' defaultChecked={sortBy === 'desc'} /> Descending
        </div>
    </div>
  )
}

export default Sort