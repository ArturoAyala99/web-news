import { useEffect, useState } from 'react';

export default function Salud({news, api_fetch}){
    /*const [news_salud, setSalud] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=f94e5bdb5ae441b2aa94d7b23214c241')
        .then(response => response.json()).then(function(data){
          if (data.status === 'ok'){
            setSalud(data.articles);console.log(data.articles);
          }
        });
    },[]);*/
    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');

    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(health_new => (
                            <div className='col-md-6 border border-danger rounded' key={health_new.title}>
                                <img src={health_new.urlToImage}/>
                                <p>{health_new.title}</p>
                                <a href={health_new.url}>Más</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}