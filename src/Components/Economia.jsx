import { useEffect, useState } from 'react';
import Navbar from "./Navbar";

export default function Economia({news, api_fetch}){

    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');
    return(
        <>

            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(business_new => (
                            <div className='col-md-6 border border-danger rounded' key={business_new.title}>
                                <img src={business_new.urlToImage}/>
                                <p>{business_new.title}</p>
                                <a href={business_new.url}>Más</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}