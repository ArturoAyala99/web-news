import { useEffect, useState } from 'react';

export default function Deportes({news, api_fetch}){
    /*const [sports_news, setSportNew] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=mx&category=sports&apiKey=f94e5bdb5ae441b2aa94d7b23214c241')
        .then(response => response.json()).then(function(data){
          if (data.status === 'ok'){
            setSportNew(data.articles);console.log(data.articles);
          }
        });
    },[]);*/

    api_fetch('https://newsapi.org/v2/top-headlines?country=mx&category=sports&apiKey=f94e5bdb5ae441b2aa94d7b23214c241');

    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    {
                        news.map(sport_new => (
                        <div className='col-md-6 mb-3' key={sport_new.title}>
                            <div className='container border border-danger rounded'>
                                <div>
                                    <img src={sport_new.urlToImage}/>
                                </div>
                                <div>
                                    <p>{sport_new.title}</p>
                                </div>
                                <div>
                                    <a href={sport_new.url}>Más</a>
                                </div>
                            </div>
                        </div>
                        
                        ))
                    }
                </div>
            </div>
        </>
    )
}