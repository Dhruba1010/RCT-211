import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const getData = () => {
        fetch(url)
            .then(r => r.json())
            .then(r => {
                setLoading(false);
                setData(r.items);
            })
            .catch(e => {
                setLoading(false);
                setError(true);
            })
    }

    useEffect(() => {
        getData() 
    },[])

  return {loading, data, error};
}

export default useFetch