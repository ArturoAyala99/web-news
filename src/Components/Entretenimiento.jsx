import { useEffect, useState } from 'react';
import Navbar from "./Navbar";

export default function Entretenimiento({news, api_fetch}){

    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=entertainment&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');
    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(entert_new => (
                            <div className='col-md-6 border border-danger rounded' key={entert_new.title}>
                                <img src={entert_new.urlToImage}/>
                                <p>{entert_new.title}</p>
                                <a href={entert_new.url}>Más</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}