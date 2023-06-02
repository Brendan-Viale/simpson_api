import { useEffect, useState } from "react"
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [error, setError] = useState();
    const location = useLocation();

    useEffect(()=>{
        axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
        .then((res)=>{
            setQuotes(res.data)
        })
        .catch((err)=>{
            setError(err.message)
        })
    }, [location])

    return (
        <>
            {error ? (
                <p>{error}</p>
            ) : (
                quotes.length > 0 ? (
                    quotes.map((quote)=>(
                        <Link key={quote.quote} to={"/quote/"+quote.character.replace(" ","-")}>
                            <img src={quote.image} />
                        </Link>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            )}
        </>
    )
}

export default Quotes