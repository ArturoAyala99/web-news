import { useEffect, useState } from 'react';
import Navbar from "./Navbar";

export default function Tecnologia({news, api_fetch}){

    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');
    return(
        <>
            
            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(tech_new => (
                            <div className='col-md-6 border border-danger rounded' key={tech_new.title}>
                                <img src={tech_new.urlToImage}/>
                                <p>{tech_new.title}</p>
                                <a href={tech_new.url}>Más</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}