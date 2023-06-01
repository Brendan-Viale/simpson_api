import { useState } from "react"
import ids from "./ids.json"
import axios from "axios"
import { useNavigate } from "react-router"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const verifyIds = (e) => {
    e.preventDefault();
    if(ids["username"] === username && ids["password"] === password){
      axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=942793ac262d56a416455b75eba35928")
      .then((res)=>{
        sessionStorage.setItem("token",res.data.request_token);
        navigate("/quotes");
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    else if(ids["username"] === username){
      setFormError({"password" : "Mauvais mot de passe !"})
    }
    else if(ids["password"] === password){
      setFormError({"username" : "Mauvais nom d'utilisateur !"})
    }
    else{
      setFormError({})
    }
  }

  return (
    <form onSubmit={verifyIds}>
      <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
      {formError["username"] && <p>{formError["username"]}</p>}
      <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      {formError["password"] && <p>{formError["password"]}</p>}
      <button type="submit">Se connecter</button>
    </form>
  )
}

export default Login