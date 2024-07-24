//Este es un CustomHook para hacer llamadas a la API para las categorías de noticias y no tener que repetir un useEffect en cada componente para consumir la API
import { useState, useEffect } from 'react' //usadno los hooks

export const useFetch = () =>{

    const [news, setNews] = useState([]);

    function api_fetch(url){
        useEffect(() =>{
            fetch(url).then(response => response.json()).then(function(response){
                if (response.status === 'ok'){
                    setNews(response.articles);
                }
            });
        },[])
    }

    return {
        news,
        api_fetch
    }
}