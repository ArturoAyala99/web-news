import { useEffect, useState } from 'react';
import Navbar from "./Navbar";

export default function Inicio({news, api_fetch}){
    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');
    return(
        <>
            
            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(general_new => (
                            <div className='col-md-6 border border-danger rounded' key={general_new.title}>
                                <img src={general_new.urlToImage}/>
                                <p>{general_new.title}</p>
                                <a href={general_new.url}>Más</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}