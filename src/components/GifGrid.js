import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({category}) => {

    const {data,loading} = useFetchGifs(category);

    
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading</p>}
            
            <div className="card-grid">
            
            
                {
                    data.map(img =>(
                        <GifGriditem 
                        key={img.id}
                        {...img}/>
                    ))
                }
            
            </div>
        </>
    )    
}
