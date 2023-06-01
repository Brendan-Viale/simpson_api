import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Quote = () => {
    const [quote, setQuote] = useState([]);
    const [error, setError] = useState();
    const location = useLocation();
    console.log(location)
    const characterRequest = "https://thesimpsonsquoteapi.glitch.me/quotes?count=1&character=" + location.pathname.split("/")[2].replace("-", " ");
    useEffect(()=>{
        axios.get(characterRequest)
        .then((res)=>{
            setQuote(res.data[0])
        })
        .catch((err)=>{
            setError(err.message)
        })
    }, [])

  return (
    <>
        {error ? (
            <p>{error}</p>
        ) : (
            quote.length!==0 ? (
                <article>
                    <img src={quote.image} />
                    <h2>{quote.character}</h2>
                    <p>{quote.quote}</p>
                </article>
            ) : (
                <p>Loading...</p>
            )
        )}
    </>
  )
}

export default Quote