import { useEffect, useState } from 'react';
import Navbar from "./Navbar";

const Internacional = ({news, api_fetch}) => {

    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=science&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');
    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(science_new => (
                            <div className='col-md-6 border border-danger rounded' key={science_new.title}>
                                <img src={science_new.urlToImage}/>
                                <p>{science_new.title}</p>
                                <a href={science_new.url}>Más</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Internacional