import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const urlCategory = searchParams.getAll('category');

    const [category, setCategory] = useState(urlCategory || []);


    const handleCheckBox = (e) => {
        const option = e.target.value;
        let newCategory = [...category];
        if(category.includes(option)){
            newCategory.splice(option.indexOf(option), 1);
        }else{
            newCategory.push(option);
        }
        setCategory(newCategory);
    }

    useEffect(() => {
        if(category){
            setSearchParams({ category: category});
        }
    },[category, setSearchParams])


  return (
    <div >
        <h3>Filter</h3>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '2rem', gap: '0.5rem'}}>
            <div>
                <input type="checkbox" onChange={handleCheckBox} value='Novel' checked={category.includes('Novel')} />
                <label>Novel</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCheckBox} value='Science_Fiction' checked={category.includes('Science_Fiction')} />
                <label>Science_Fiction</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCheckBox} value='Thriller' checked={category.includes('Thriller')} />
                <label>Thriller</label>
            </div>
            <div>
                <input type="checkbox" onChange={handleCheckBox} value='Motivational' checked={category.includes('Motivational')} />
                <label>Motivational</label>
            </div>
        </div>
    </div>
  )
}

export default Filter